import { NextResponse } from "next/server";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import bs58 from 'bs58';
import nacl from 'tweetnacl';
import { getUserByPublicKey } from "@/lib/firebase/userService";

export const createChallenge = async (challenge) => {
  try {
    if (!db) throw new Error("Database not initialized");

    const docRef = await addDoc(collection(db, "challenges"), {
      challenge: challenge
    });

    return {
      success: true,
      challengeId: docRef.id,
    };
  } catch (error) {
    console.error("Error creating challenge:", error.message);
    return {
      success: false,
      message: error.message || "Failed to create challenge"
    };
  }
};

export const isChallengeExists = async (challenge) => {
  try {
    if (!db) throw new Error("Database not initialized");

    const querySnapshot = await getDocs(
      query(collection(db, "challenges"), where("challenge", "==", challenge))
    );

    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking challenge existence:", error.message);
    return false;
  }
}

export const deleteChallenge = async (challenge) => {
  try {
    if (!db) throw new Error("Database not initialized");

    const querySnapshot = await getDocs(
      query(collection(db, "challenges"), where("challenge", "==", challenge))
    );

    if (querySnapshot.empty) {
      return { success: false, message: "Challenge not found" };
    }

    const challengeDoc = querySnapshot.docs[0];
    await deleteDoc(challengeDoc.ref);
    return { success: true, message: "Challenge deleted successfully" };
  } catch (error) {
    console.error("Error deleting challenge:", error.message);
    return { success: false, message: error.message || "Failed to delete challenge" };
  }
}

export async function GET(request) {
  try {
    const challenge = Math.random().toString(36).substring(2, 15);

    const result = await createChallenge(challenge);
    if (!result.success) {
      throw new Error("Failed to create challenge");
    }

    return NextResponse.json({
      challenge: challenge
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
    const { challenge, publicKey, signatures } = await request.json();

    if (!challenge || typeof challenge !== "string") {
      return NextResponse.json(
        { error: "Challenge is required and must be a string" },
        { status: 400, headers: corsHeaders }
      );
    }

    if (!publicKey || typeof publicKey !== "string") {
      return NextResponse.json(
        { error: "Public key is required and must be a string" },
        { status: 400, headers: corsHeaders }
      );
    }

    if (!signatures || typeof signatures !== "string") {
      return NextResponse.json(
        { error: "Signatures is required and must be a string" },
        { status: 400, headers: corsHeaders }
      );
    }

    const challengeExists = await isChallengeExists(challenge);
    if (!challengeExists) {
      return NextResponse.json(
        { error: "Challenge does not exist" },
        { status: 404, headers: corsHeaders }
      );
    }

    if (!await getUserByPublicKey(publicKey)) {
      return NextResponse.json(
        { error: "Public key not registered" },
        { status: 404, headers: corsHeaders }
      );
    }

    const isValidSignature = nacl.sign.detached.verify(
      new TextEncoder().encode(challenge),
      Uint8Array.from(atob(signatures), c => c.charCodeAt(0)),
      bs58.decode(publicKey)
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401, headers: corsHeaders }
      );
    }

    const stupidXor = (publicKey) => {
      const key = "stupidEncryptionKey";
      let encrypted = "";
      for (let i = 0; i < publicKey.length; i++) {
        encrypted += String.fromCharCode(publicKey.charCodeAt(i) ^ key.charCodeAt(i % key.length));
      }
      return btoa(encrypted);
    }

    const deleteResult = await deleteChallenge(challenge);
    if (!deleteResult.success) {
      return NextResponse.json(
        { error: deleteResult.message },
        { status: 500, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { success: true, message: "Challenge created successfully", session: stupidXor(publicKey) },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to create challenge" },
      { status: 400, headers: corsHeaders }
    );
  }
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://mail.google.com",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}
