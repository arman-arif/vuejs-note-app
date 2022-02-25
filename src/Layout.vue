<template>
  <div class="wrapper fixed">
    <div class="topbar">
      <h1 class="app-title">Notes</h1>
    </div>
    <div class="content-wrapper">
      <Form />
      <FilterBar />
      <div
        class="w-full md:h-full h-[calc(100%-200px)] overflow-x-hidden overflow-y-auto scroll-smooth scrollbar-thin hover:scrollbar-track-indigo-400 hover:scrollbar-thumb-indigo-600"
      >
        <div class="notes h-full max-w-[640px] mx-auto rounded">
          <Note v-for="note in notes" :key="note.id" :note="note" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import FilterBar from "./components/FilterBar.vue";
import Note from "./components/Note.vue";

export default {
  name: "Layout",
  components: {
    Form,
    FilterBar,
    Note,
  },
  data() {
    return {
      notes: [
        {
          id: 1,
          title: "The note title",
          note: "Erat autem lorem nonummy duo stet luptatum dolor labore. Ipsum dolor nonu",
          color: "#FECACA",
          time: "A few minutes ago"
        },
        {
          id: 1,
          title: "The note title",
          note: "Erat autem lorem nonummy duo stet luptatum dolor labore. Ipsum dolor nonu",
          color: "#FECACA",
          time: "A few minutes ago"
        },
      ]
    };
  },
};
</script>