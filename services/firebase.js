// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { firebaseConfig } from "../firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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



