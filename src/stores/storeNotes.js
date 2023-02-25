import { defineStore } from "pinia"

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        },
        {
          id: "id2",
          content: "This is a shorter note",
        },
        {
          id: "id3",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur alias, quidem placeat repellendus libero, magnam quibusdam amet, reiciendis animi eos molestiae est soluta cupiditate obcaecati eligendi. Expedita beatae incidunt possimus?",
        },
      ],
    }
  },
  actions: {
    addNote(newNoteContent) {
      console.log(newNoteContent)
      let currentDate = new Date().getTime()
      let id = currentDate.toString()

      let note = {
        id,
        content: newNoteContent,
      }

      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => {
        return note.id !== idToDelete
      })
    },
    updateNote(id, content) {
      //Short hand below instead of using a 'return' and curly braces
      let index = this.notes.findIndex((note) => note.id === id)

      this.notes[index].content = content
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
