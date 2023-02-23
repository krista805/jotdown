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
        <button @click="$router.push('/')" class="button is-link is-light">
          Cancel
        </button>
        <button
          class="button is-link has-background-success"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
    Imports
*/
import { ref } from "vue"
import AddEditNote from "@/components/Notes/AddEditNote.vue"

/*
    Note
*/
const noteContent = ref("")
</script>
