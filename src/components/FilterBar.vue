<template>
  <div class="filter-bar">
    <div class="filter-colors">
      <span class="bg-white" @click="setFilterMode('all')">
        All ({{ notes.length }})
      </span>
      <span
        v-for="noteCount in noteCountByColor"
        :key="noteCount.color"
        :style="{ backgroundColor: noteCount.color }"
        @click="setFilterMode(noteCount.color)"
      >
        {{ noteCount.count }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "FilterBar",
  computed: {
    ...mapState(["colors", "notes"]),
    ...mapGetters(["noteCountByColor"]),
  },
  methods: mapMutations(["setFilterMode"]),
};
</script>

<style></style>
