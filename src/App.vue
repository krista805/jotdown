<template>
  <NavBar />

  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
/*
  Imports
*/
import { onMounted } from "vue"
import { useStoreNotes } from "@/stores/storeNotes"
import NavBar from "@/components/Layout/NavBar.vue"

/*
  Store
*/
const storeNotes = useStoreNotes()

/*
  Mounted
*/
onMounted(() => {
  storeNotes.getNotes()
})
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
