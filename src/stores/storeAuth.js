import { defineStore } from "pinia"
import { createUserWithEmailAndPassword } from "firebase/auth"
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
  },
})
