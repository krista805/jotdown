<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            ref="textareaRef"
            class="textarea"
            placeholder="Add a new note"
          />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <slot name="buttons" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

/*
    Props
*/
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

/*
    Emits
*/
const emit = defineEmits(["update:modelValue"])

/*
    Focus textarea
*/
const textareaRef = ref(null)

const focusTextarea = () => {
  textareaRef.value.focus()
}

// Expose any methods that we want to be made available to a parent component
defineExpose({
  focusTextarea,
})
</script>
