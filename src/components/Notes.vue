<template>
  <div class="notes-wrapper">
    <div class="notes">
      <Note
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @remove="deleteNote(note.id)"
      />
    </div>
  </div>
</template>

<script>
import Note from "./Note.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Notes",
  components: {
    Note,
  },
  computed: {
    ...mapGetters({
      notes: "filteredNotes",
    }),
  },
  methods: mapMutations({
    deleteNote: "deleteNote",
  }),
};
</script>
