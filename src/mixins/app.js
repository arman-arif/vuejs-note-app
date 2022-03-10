import { v4 as uuid } from "uuid";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  mounted() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [
      {
        id: uuid(),
        title: "The note title",
        desc: "Erat autem lorem nonummy duo stet luptatum dolor labore",
        color: "#E9D5FF",
        time: "2022-01-01T00:00:00.000Z",
      },
    ];
    this.setNotes(notes);
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
    ...mapState({
      note: (state) => state.note,
      notes: (state) => state.notes,
      filter: (state) => state.filter,
    }),
    ...mapGetters(["filteredNotes"]),
  },
  methods: mapMutations(["setNotes"]),
};
