import { defineStore } from "pinia"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { auth } from "@/js/firebase"
import { useStoreNotes } from "@/stores/storeNotes"

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
      user: {},
    }
  },
  actions: {
    init() {
      const storeNotes = useStoreNotes()

      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          this.router.push("/")
          storeNotes.init()
        } else {
          this.user = {}
          this.router.replace("/auth")
          storeNotes.clearNotes()
        }
      })
    },
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
