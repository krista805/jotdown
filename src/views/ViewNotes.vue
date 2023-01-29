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
      v-for="note in notes"
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

/*
    Notes
*/
const newNote = ref("")
const newNoteRef = ref(null)

const notes = ref([
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
])

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
