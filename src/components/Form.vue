<template>
  <div class="form-wrapper">
    <form class="main-form" @submit.prevent="handleAddNote">
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

        <ColorPalette @select-color="handleSelectColor" v-model="note.color" />

        <button type="submit" class="add-btn">Add Note</button>
      </div>
    </form>
  </div>
</template>

<script>
import ColorPalette from "./ColorPalette.vue";
export default {
  name: "Form",
  components: {
    ColorPalette,
  },
  data() {
    return {
      note: {
        title: "",
        desc: "",
        color: "#FCFAF9",
      },
    };
  },
  props: {},
  methods: {
    handleSelectColor(color) {
      this.note.color = color;
    },

    handleAddNote() {
      if (this.note.title == "") {
        alert("Please enter a title");
        return;
      }
      if (this.note.desc == "") {
        alert("Please enter a description");
        return;
      }
      this.$emit("add-note", this.note);
      this.note = {
        title: "",
        desc: "",
        color: this.note.color,
      };
    },
  },
};
</script>

<style></style>
