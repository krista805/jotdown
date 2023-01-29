<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}

        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="handleDeleteCLicked" href="#" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
/*
    Imports
*/
import { computed } from "vue"

/*
    Props
*/
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
})

/*
    emits
*/
const emit = defineEmits(["deleteClicked"])

/*
    Character length
*/
const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? "characters" : "character"
  return `${length} ${description}`
})

/*
    Handle delete clicked
*/
const handleDeleteCLicked = () => {
  emit("deleteClicked", props.note.id)
}
</script>
