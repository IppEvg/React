
import { initializeApp } from "firebase/app";
import{getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from 'firebase/auth';
import { getDatabase,ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6Jk3uoNlzszDd0KqXahBMJUNm8TA2ogs",
  authDomain: "chats1373.firebaseapp.com",
  projectId: "chats1373",
  storageBucket: "chats1373.appspot.com",
  messagingSenderId: "1083355895906",
  appId: "1:1083355895906:web:760e31aa8d685311eed93b"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const signUp =  async (email, password) => await createUserWithEmailAndPassword(firebaseAuth,email, password)
export const signIn =  async (email, password) => await signInWithEmailAndPassword(firebaseAuth,email, password)
export const logOut = async () => await signOut(firebaseAuth)

export const db = getDatabase(app)
export const userRef = ref(db, 'users');
export const messageRef = ref(db, 'messages')
export const getChatById = (chatId)=> ref(db, `messages/${chatId}`)
export const getMessageByChatId = (chatId)=> ref(db, `messages/${chatId}/text`)