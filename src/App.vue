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
import { useStoreAuth } from "@/stores/storeAuth"
import NavBar from "@/components/Layout/NavBar.vue"

/*
  Store
*/
const storeAuth = useStoreAuth()

/*
  Mounted
*/
onMounted(() => {
  storeAuth.init()
})
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
