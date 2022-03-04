<template>
  <div class="filter-bar">
    <div class="filter-colors">
      <span class="bg-white" @click="$emit('filter', 'all')">
        All ({{ notes.length }})
      </span>
      <span
        v-for="noteCount in noteCountByColor"
        :key="noteCount.color"
        :style="{ backgroundColor: noteCount.color }"
        @click="$emit('filter', noteCount.color)"
      >
        {{ noteCount.count }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBar",
  props: {
    notes: {
      type: Array,
    },
  },
  data() {
    return {
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
  computed: {
    noteCountByColor() {
      return this.colors.map((color) => {
        return {
          color: color,
          count: this.notes.filter((note) => note.color == color).length,
        };
      });
    },
  },
};
</script>

<style></style>
