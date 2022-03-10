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
import app from "./mixins/app";
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
      notes: [],
      filter: "all",
    };
  },
  mixins: [app],
};
</script>

<style scoped></style>
