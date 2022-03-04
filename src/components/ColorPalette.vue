<template>
  <div class="color-palettes">
    <span
      v-for="color in colors"
      :key="color"
      :style="{ backgroundColor: color, borderColor: borderColor(color) }"
      @click="handleClick(color)"
      class="cursor-pointer"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
  },
  data() {
    return {
      selected: this.modelValue,
      colors: [
        "#FCFAF9",
        "#E9D5FF",
        "#FECACA",
        "#BBF7D0",
        "#BFDBFE",
        "#FEF08A",
        "#FED7AA",
        "#E2E8F0",
      ],
    };
  },
  methods: {
    handleClick(color) {
      this.$emit("update:modelValue", color);
      this.selected = color;
    },
    borderColor(color) {
      return this.selected == color ? "#2c3e50" : color;
    },
  },
};
</script>
