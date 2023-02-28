import { addDoc, collection } from "firebase/firestore";
import { DB } from "../libraries/firebase";

export const sendEmail = async (email) => {
  try {
    addDoc(collection(DB, "Leads"), {
      email: email,
    });
    return { status: true, message: "Message Sent!" };
  } catch (e) {
    return { status: false, message: e.message };
  }
};
