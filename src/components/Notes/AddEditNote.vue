<template>
  <div class="notes">
    <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
      <label v-if="label" class="label has-text-white">{{ label }}</label>
      <div class="field">
        <div class="control">
          <textarea
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            ref="textareaRef"
            class="textarea"
            :placeholder="placeholder"
            max-length="100"
            v-autofocus
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
import { vAutofocus } from "@/directives/vAutofocus"

/*
    Props
*/
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
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
