<template>
  <div class="color-palettes">
    <span
      v-for="color in colors"
      :key="color"
      :style="{ backgroundColor: color, borderColor: borderColor(color) }"
      @click="$emit('update:modelValue', color)"
      class="cursor-pointer"
    ></span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    modelValue: String,
  },
  computed: mapState(["colors"]),
  methods: {
    borderColor(color) {
      return this.modelValue == color ? "#2c3e50" : color;
    },
  },
};
</script>
