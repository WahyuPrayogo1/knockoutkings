// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

if (!getApps.length) {
    initializeApp(firebaseConfig)
}

export const FirebaseAuth = getAuth()

export const SignUp = async (email, password) => {
    await createUserWithEmailAndPassword(FirebaseAuth, email, password)
} 

export const Authentication = () => {
    return FirebaseAuth
}

export const SignIn = async (email, password) => {
    await signInWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignOut = async () => {
    await signOut(FirebaseAuth)
}

export const ForgotPassword = async (email) => {
    await sendPasswordResetEmail(FirebaseAuth, email)
}

export const GetErrorSignIn = async (code) => {
    switch (code) {
        case 'auth/invalid-login-credentials':
            return 'Email or Password is not registered'
            case 'auth/invalid-login-credentials':
        default:
            return 'Email or Password is not registered'
    }
}

export const GetErrorSignUp = async (code) => {
    switch (code) {
        case 'auth/email-already-in-use':
            return 'Email is already registered'
        default:
            return 'An error occurred during the sign up process'
    }t
}

export const GetErrorForgotPassword = async (alert) => {
    switch (alert) {
        case 'auth/email-already-in-use':
            return 'Email is not registered'
        default:
            return 'An error occurred during the sign up process'
    }t
}



