<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Chatacters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="reviewInput"
      class="input"
      type="text"
      placeholder="Do you love JotDown?"
      v-autofocus
    />
  </div>
</template>

<script setup>
/*
    Imports
*/
import { ref } from "vue"
import { useStoreNotes } from "@/stores/storeNotes"
import { vAutofocus } from "@/directives/vAutofocus"
import { useWatchCharacters } from "@/use/useWatchCharacters"

/*
    Store
*/
const storeNotes = useStoreNotes()

/*
    Comment field reviewing JotDown
*/
const reviewInput = ref("")
useWatchCharacters(reviewInput, 50)
</script>
