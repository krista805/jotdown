<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bg-color="link"
      placeholder="Edit note"
      label="Edit Note"
    >
      <template #buttons>
        <button @click="$router.push('/')" class="button is-link is-light mr-3">
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-success"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
    <pre>{{ $route.params.id }}</pre>
  </div>
</template>

<script setup>
/*
    Imports
*/
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import AddEditNote from "@/components/Notes/AddEditNote.vue"
import { useStoreNotes } from "@/stores/storeNotes"

/*
    Router
*/
const route = useRoute()
const router = useRouter()

/*
    Store
*/
const storeNotes = useStoreNotes()

/*
    Note
*/
const noteContent = ref("")

noteContent.value = storeNotes.getNoteContent(route.params.id)

/*
    Save clicked
*/
const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push("/")
}
</script>
