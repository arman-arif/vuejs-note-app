import { v4 as uuid } from "uuid";
export default {
  mounted() {
    this.notes = JSON.parse(localStorage.getItem("notes")) || [
      {
        id: 1,
        title: "The note title",
        desc: "Erat autem lorem nonummy duo stet luptatum dolor labore",
        color: "#E9D5FF",
        time: "2022-01-01T00:00:00.000Z",
      },
    ];
  },
  watch: {
    notes: {
      handler() {
        localStorage.setItem("notes", JSON.stringify(this.notes));
      },
      deep: true,
    },
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
