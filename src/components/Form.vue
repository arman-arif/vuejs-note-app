<template>
  <div class="form-wrapper">
    <form class="main-form" @submit.prevent="addNote">
      <input
        type="text"
        class="note-title border-b"
        placeholder="Enter Title"
        v-model="note.title"
      />
      <div class="form-description">
        <textarea
          class="note-desc"
          placeholder="Note Description"
          v-model="note.desc"
        >
        </textarea>

        <ColorPalette v-model="note.color" />

        <button type="submit" class="add-btn">Add Note</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ColorPalette from "./ColorPalette.vue";
export default {
  name: "Form",
  components: {
    ColorPalette,
  },
  computed: mapState(["note"]),
  methods: mapActions(["addNote"]),
};
</script>

<style></style>
