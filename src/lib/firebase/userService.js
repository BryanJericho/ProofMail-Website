import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { comparePassword, hashPassword } from "../hashPassword";

export const getAllUsers = async () => {
  try {
    if (!db) {
      throw new Error("Database not initialized");
    }

    console.log("Fetching users from Firestore...");
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];

    querySnapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    console.log("Users fetched successfully:", users.length);
    return users;
  } catch (error) {
    console.error("Error getting users:", error);
    console.error("Error details:", {
      code: error.code,
      message: error.message,
      name: error.name,
    });
    return [];
  }
};

export const getUserByPublicKey = async (publicKey) => {
  try {
    if (!db) throw new Error("Database not initialized");

    const userQuery = query(
      collection(db, "users"),
      where("wallet", "==", publicKey.trim())
    );
    const userSnapshot = await getDocs(userQuery);

    if (userSnapshot.empty) {
      throw new Error("User not found");
    }

    const userData = userSnapshot.docs[0].data();
    return {
      id: userSnapshot.docs[0].id,
      ...userData,
    };
  } catch (error) {
    console.error("Error getting user by public key:", error.message);
    throw error;
  }
};

export const validateUserRegistration = async (userData) => {
  try {
    if (!db) throw new Error("Database not initialized");

    const { name, email, wallet, password } = userData;

    if (!name || !email || !wallet || !password) {
      throw new Error("Fill all required fields!");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    const combinedQuery = query(
      collection(db, "users"),
      where("email", "==", email.trim()),
      where("wallet", "==", wallet.trim())
    );
    const combinedSnapshot = await getDocs(combinedQuery);

    if (!combinedSnapshot.empty) {
      throw new Error("Your account already registered");
    }

    return {
      success: true,
      message: "Validation passed",
    };
  } catch (error) {
    console.error("Error validating user:", error.message);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    if (!db) throw new Error("Database not initialized");

    const { name, email, wallet, password } = userData;

    await validateUserRegistration(userData);

    const hashedPassword = await hashPassword(password.trim());

    const newUser = {
      name: name.trim(),
      email: email.trim(),
      wallet: wallet.trim(),
      password: hashedPassword,
      registeredAt: serverTimestamp(),
      signatures: [],
      emailVerified: true,
    };

    const docRef = await addDoc(collection(db, "users"), newUser);

    return {
      success: true,
      message: "User registered successfully",
      userId: docRef.id,
    };
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

export async function getUserByEmail(email) {
  if (!db) throw new Error("Database not initialized");
  const q = query(collection(db, "users"), where("email", "==", email.trim()));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() };
}

export async function validateUserLogin(email, plainPassword) {
  const user = await getUserByEmail(email);
  if (!user) return null;

  const match = await comparePassword(plainPassword, user.password);
  if (!match) return null;

  const { password, ...safeUser } = user;
  return safeUser;
}
