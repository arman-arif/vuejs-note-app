import { mapState, mapGetters, mapMutations } from "vuex";
import { v4 as uuid } from "uuid";
import Master from "@/layouts/Master.vue";
import FilterBar from "@/components/FilterBar.vue";
import Notes from "@/components/Notes.vue";
import Note from "@/components/Note.vue";
import Form from "@/components/Form.vue";
export default {
  components: {
    Master,
    Notes,
    FilterBar,
    Note,
    Form,
  },
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
