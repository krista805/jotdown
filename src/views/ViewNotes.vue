<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add a new note"
    >
      <template #buttons>
        <button
          @click="addNote"
          class="button is-link has-background-success"
          :disabled="!newNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
/*
    Imports
*/
import { ref } from "vue"
import Note from "@/components/Notes/Note.vue"
import AddEditNote from "@/components/Notes/AddEditNote.vue"
import { useStoreNotes } from "@/stores/storeNotes"

/*
    Store
*/
const storeNotes = useStoreNotes()

/*
    Notes
*/
const newNote = ref("")
const addEditNoteRef = ref(null)

const addNote = () => {
  storeNotes.addNote(newNote.value)

  newNote.value = ""
  addEditNoteRef.value.focusTextarea()
}
</script>
