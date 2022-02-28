<template>
  <div class="filter-bar">
    <div class="filter-colors">
      <span class="bg-white">All (0)</span>
      <span
        v-for="color in colors"
        :key="color"
        :style="{ backgroundColor: color }"
        >0</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBar",
  data() {
    return {
      colors: [
        "#FECACA",
        "#BBF7D0",
        "#BFDBFE",
        "#FEF08A",
        "#FED7AA",
        "#E9D5FF",
        "#E2E8F0",
      ],
    };
  },
};
</script>

<style></style>
