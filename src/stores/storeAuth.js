import { defineStore } from "pinia"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { auth } from "@/js/firebase"

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {}
  },
  actions: {
    registerUser(credentials) {
      // console.log("RegisterUserAction", credentials)
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log("User", user)
        })
        .catch((error) => {
          console.log("Error Message", error.message)
        })
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log("user:", user)
        })
        .catch((error) => {
          console.log("error message:", error.message)
        })
    },
    logoutUser() {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("User signed out")
        })
        .catch((error) => {
          // An error happened.
          console.log(error.message)
        })
    },
  },
})
