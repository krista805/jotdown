import { defineStore } from "pinia"
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  addDoc,
} from "firebase/firestore"
import { db } from "@/js/firebase"
import { useStoreAuth } from "@/stores/storeAuth"

let notesCollectionRef
let notesCollectionQuery

let getNotesSnapshot = null

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [],
      notesLoaded: false,
    }
  },
  actions: {
    init() {
      //Access auth store so we can access use id
      const storeAuth = useStoreAuth()
      // Initialize our database refs
      notesCollectionRef = collection(db, "users", storeAuth.user.id, "notes")
      notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"))
      this.getNotes()
    },
    getNotes() {
      this.notesLoaded = false

      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        // console.log('querySnapshot', querySnapshot)
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          }
          notes.push(note)
        })

        this.notes = notes
        this.notesLoaded = true

        // setTimeout(() => {
        // this.notes = notes
        // this.notesLoaded = true
        // }, 2000)
      })
    },
    clearNotes() {
      this.notes = []

      if (getNotesSnapshot) getNotesSnapshot() // unsubscribe from any active listener
    },
    async addNote(newNoteContent) {
      let currentDate = new Date().getTime()
      let date = currentDate.toString()

      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date,
      })
    },
    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete))
    },
    async updateNote(id, content) {
      await updateDoc(doc(notesCollectionRef, id), {
        content,
      })
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => {
          return note.id === id
        })[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0

      state.notes.forEach((note) => {
        count += note.content.length
      })

      return count
    },
  },
})
