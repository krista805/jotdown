<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            ref="newNoteRef"
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
          />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            class="button is-link has-background-success"
            :disabled="!newNote"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
/*
    Imports
*/
import { ref } from "vue"
import Note from "@/components/Notes/Note.vue"
import { useStoreNotes } from "@/stores/storeNotes"

/*
    Store
*/
const storeNotes = useStoreNotes()

/*
    Notes
*/
const newNote = ref("")
const newNoteRef = ref(null)

const addNote = () => {
  let currentDate = new Date().getTime()
  let id = currentDate.toString()

  let note = {
    id,
    content: newNote.value,
  }

  notes.value.unshift(note)

  newNote.value = ""
  newNoteRef.value.focus()
}

/*
    Delete notes
*/
const deleteNote = (idToDelete) => {
  //   console.log("Delete note", idToDelete)
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete
  })
}
</script>
