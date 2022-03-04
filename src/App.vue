<template>
  <Master :pageTitle="pageTitle">
    <Form @add-note="addNote" />
    <FilterBar :notes="notes" @filter="filterNote" />
    <Notes :notes="filteredNotes" @delete="handelDelete" />
  </Master>
</template>

<script>
import Master from "./layouts/Master.vue";
import Notes from "./components/Notes.vue";
import FilterBar from "./components/FilterBar.vue";
import Note from "./components/Note.vue";
import Form from "./components/Form.vue";
import { v4 as uuid } from "uuid";
export default {
  name: "App",
  components: {
    Master,
    Notes,
    FilterBar,
    Note,
    Form,
  },
  data() {
    return {
      pageTitle: "Notes",
      note: {
        title: "",
        desc: "",
        color: "#FCFAF9",
      },
      notes: [
        {
          id: 1,
          title: "The note title",
          desc: "Erat autem lorem nonummy duo stet luptatum dolor labore",
          color: "#E9D5FF",
          time: "2022-01-01T00:00:00.000Z",
        },
      ],
      filter: "all",
    };
  },
  computed: {
    filteredNotes() {
      if (this.filter == "all") {
        return this.notes;
      }
      return this.notes.filter((note) => note.color == this.filter);
    },
  },
  methods: {
    addNote(note) {
      const newNote = {
        id: uuid(),
        ...note,
        time: new Date(),
      };
      this.notes.unshift(newNote);
    },
    handelDelete(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    filterNote(filter) {
      this.filter = filter;
    },
  },
};
</script>

<style scoped></style>
