import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1DFZfnl81hQkgd64QguWrCQhCTJskARw",
  authDomain: "web-lesson9.firebaseapp.com",
  projectId: "web-lesson9",
  storageBucket: "web-lesson9.appspot.com",
  messagingSenderId: "537119426017",
  appId: "1:537119426017:web:f8eef0ec1e839f67c5bea0",
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(firebase);

export const userRef = ref(db, "user");
export const chatsRef = ref(db, "chats");
export const messagesRef = ref(db, "messages");

export const getChatListById = (id) => ref(db, `chats/${id}`);

export const getMessagesRefId = (chatId) => ref(db, `messages/${chatId}`);

export const getMessagesListRefId = (chatId, msgId) =>
  ref(db, `messages/${chatId}/messageList/${msgId}`);
