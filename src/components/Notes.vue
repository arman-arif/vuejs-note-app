<template>
  <div class="notes-wrapper">
    <div class="notes">
      <Note
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @remove="$emit('delete', note.id)"
      />
    </div>
  </div>
</template>

<script>
import Note from "./Note.vue";
export default {
  name: "Notes",
  components: {
    Note,
  },
  props: {
    notes: {
      type: Array,
    },
  },
};
</script>
