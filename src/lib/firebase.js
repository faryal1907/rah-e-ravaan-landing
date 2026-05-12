import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Official Rah-e-Ravaan Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGwn7EZoO4yqcaPhmFp13i_jDqu5nwfWI",
  authDomain: "rah-e-ravaan-waitlist.firebaseapp.com",
  projectId: "rah-e-ravaan-waitlist",
  storageBucket: "rah-e-ravaan-waitlist.firebasestorage.app",
  messagingSenderId: "732040575000",
  appId: "1:732040575000:web:47592df0b2dc6c30da6b6d",
  measurementId: "G-7Z1FVPJPBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export const addToWaitlist = async (email) => {
  try {
    const docRef = await addDoc(collection(db, "waitlist"), {
      email: email,
      timestamp: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export { db, analytics };
export default db;
