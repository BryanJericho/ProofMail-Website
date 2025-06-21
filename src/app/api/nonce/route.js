import { NextResponse } from "next/server";
import {
  collection,
  addDoc,
  getDocs,
  query,
  updateDoc,
  where
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export const resetQuotaExpired = async (publicKey) => {
  try {
    if (!db) throw new Error("Database not initialized");
    const userRef = collection(db, "users");
    const q = query(userRef, where("wallet", "==", publicKey));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      throw new Error("User not found");
    }
    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();
    const currentTime = new Date();
    const resetTime = userData.resetQuotaTime.toDate();;
    if (currentTime >= resetTime) {
      await updateDoc(userDoc.ref, {
        signQuota: 10,
        verifyQuota: 10,
        resetQuotaTime: new Date(currentTime.getTime() + 24 * 60 * 60 * 1000)
      });
      return {
        success: true,
        message: "Quota reset successfully"
      };
    } else {
      return {
        success: true,
        message: "Quota reset not required yet"
      };
    }
  }
  catch (error) {
    console.error("Error resetting quota:", error.message);
    return {
      success: false,
      message: error.message || "Failed to reset quota"
    };
  }
};

export const createNonce = async (nonce) => {
  try {
    if (!db) throw new Error("Database not initialized");

    const docRef = await addDoc(collection(db, "nonces"), {
      nonce: nonce
    });

    return {
      success: true,
      nonceId: docRef.id,
    };
  } catch (error) {
    console.error("Error creating nonce:", error.message);
    return {
      success: false,
      message: error.message || "Failed to create nonce"
    };
  }
};

export const decreaseSignQuota = async (publicKey) => {
  try {
    if (!db) throw new Error("Database not initialized");
    
    const userRef = collection(db, "users");
    const q = query(userRef, where("wallet", "==", publicKey));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      throw new Error("User not found");
    }
    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();
    if (userData.signQuota <= 0) {
      throw new Error("Sign quota exceeded");
    }
    await updateDoc(userDoc.ref, {
      signQuota: userData.signQuota - 1
    });
    return {
      success: true,
      message: "Sign quota decreased successfully"
    };
  } catch (error) {
    console.error("Error decreasing sign quota:", error.message);
    return {
      success: false,
      message: error.message || "Failed to decrease sign quota"
    };
  }
};

export const isNonceExists = async (nonce) => {
  try {
    if (!db) throw new Error("Database not initialized");

    const q = query(
      collection(db, "nonces"),
      where("nonce", "==", nonce)
    );
    const querySnapshot = await getDocs(q);

    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking nonce existence:", error.message);
    return false;
  }
}

export const decreaseVerifyQuota = async (publicKey) => {
  try {
    if (!db) throw new Error("Database not initialized");

    const userRef = collection(db, "users");
    const q = query(userRef, where("wallet", "==", publicKey));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error("User not found");
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    if (userData.verifyQuota <= 0) {
      throw new Error("Verify quota exceeded");
    }

    await updateDoc(userDoc.ref, {
      verifyQuota: userData.verifyQuota - 1
    });

    return {
      success: true,
      message: "Verify quota decreased successfully"
    };
  } catch (error) {
    console.error("Error decreasing verify quota:", error.message);
    return {
      success: false,
      message: error.message || "Failed to decrease verify quota"
    };
  }
};

export async function GET(request) {
  try {
    const authorizationHeader = request.headers.get("authorization");

    const stupidXor = (encrypted) => {
      const key = "stupidEncryptionKey";
      let decrypted = "";
      const decoded = atob(encrypted);
      for (let i = 0; i < decoded.length; i++) {
      decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
      }
      return decrypted;
    }

    const publicKey = stupidXor(authorizationHeader.replace("Bearer ", ""));
    if (!publicKey || publicKey.length < 10) {
      return NextResponse.json(
        { error: "Invalid or missing authorization header" },
        { status: 400, headers: corsHeaders }
      );
    }

    const nonce = Math.random().toString(36).substring(2, 15);
    const result = await createNonce(nonce);
    if (!result.success) {
      throw new Error("Failed to create nonce");
    }

    const resetQuotaResult = await resetQuotaExpired(publicKey);
    if (!resetQuotaResult.success) {
      return NextResponse.json(
        { error: resetQuotaResult.message },
        { status: 400, headers: corsHeaders }
      );
    }

    const quotaResult = await decreaseSignQuota(publicKey);
    if (!quotaResult.success) {
      return NextResponse.json(
        { error: quotaResult.message },
        { status: 400, headers: corsHeaders }
      );
    }

    return NextResponse.json({
      nonce: nonce
    }, { status: 200, headers: corsHeaders });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Validation failed" },
      { status: 400, headers: corsHeaders }
    );
  }
}

export async function POST(request) {
  try {
    const { nonce } = await request.json();
    if (!nonce) {
      return NextResponse.json(
        { error: "Nonce is required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const authorizationHeader = request.headers.get("authorization");

    const stupidXor = (encrypted) => {
      const key = "stupidEncryptionKey";
      let decrypted = "";
      const decoded = atob(encrypted);
      for (let i = 0; i < decoded.length; i++) {
      decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
      }
      return decrypted;
    }

    const publicKey = stupidXor(authorizationHeader.replace("Bearer ", ""));
    if (!publicKey || publicKey.length < 10) {
      return NextResponse.json(
        { error: "Invalid or missing authorization header" },
        { status: 400, headers: corsHeaders }
      );
    }

    const exists = await isNonceExists(nonce);
    if (!exists) {
      return NextResponse.json(
        { error: "Nonce does not exist" },
        { status: 400, headers: corsHeaders }
      );
    }

    const resetQuotaResult = await resetQuotaExpired(publicKey);
    if (!resetQuotaResult.success) {
      return NextResponse.json(
        { error: resetQuotaResult.message },
        { status: 400, headers: corsHeaders }
      );
    }

    const quotaResult = await decreaseVerifyQuota(publicKey);
    if (!quotaResult.success) {
      return NextResponse.json(
        { error: quotaResult.message },
        { status: 400, headers: corsHeaders }
      );
    } 

    return NextResponse.json(
      { success: true, nonce: nonce },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Validation failed" },
      { status: 400, headers: corsHeaders }
    );
  }
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://mail.google.com",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}
