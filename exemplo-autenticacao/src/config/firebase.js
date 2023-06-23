import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAxPSRhDA_p7MvDDY7N7Cxlr2xPpFORgTI",
  authDomain: "exemplo-autenticacao-c2b69.firebaseapp.com",
  projectId: "exemplo-autenticacao-c2b69",
  storageBucket: "exemplo-autenticacao-c2b69.appspot.com",
  messagingSenderId: "820346620216",
  appId: "1:820346620216:web:e43b80954ddfc8b96fd9cd"
};

export const firebaseApp = initializeApp(firebaseConfig)
