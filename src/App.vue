<template>
  <Master :pageTitle="$store.state.appName">
    {{ note }}
    <Form />
    <FilterBar />
    <Notes />
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
  mixins: [app],
};
</script>

<style scoped></style>
