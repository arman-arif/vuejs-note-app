import { createStore } from "vuex";
import { v4 as uuid } from "uuid";
export default createStore({
  state: {
    appName: "Vuex Notes",
    note: {
      title: "",
      desc: "",
      color: "#FCFAF9",
    },
    notes: [],
    filter: "all",
    colors: [
      "#FCFAF9",
      "#E9D5FF",
      "#FECACA",
      "#BBF7D0",
      "#BFDBFE",
      "#FEF08A",
      "#FED7AA",
      "#E2E8F0",
    ],
  },
  mutations: {
    setFilterMode(state, filterMode) {
      state.filter = filterMode;
    },
    addNote(state) {
      const newNote = {
        id: uuid(),
        ...state.note,
        time: new Date(),
      };
      state.notes.unshift(newNote);
      state.note = {
        title: "",
        desc: "",
        color: state.note.color,
      };
    },
    setNotes(state, notes) {
      state.notes = notes;
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter((note) => note.id !== id);
    },
  },
  getters: {
    filteredNotes(state) {
      return state.filter == "all"
        ? state.notes
        : state.notes.filter((note) => note.color == state.filter);
    },
    noteCountByColor(state) {
      return state.colors.map((color) => {
        const notes = state.notes.filter((note) => note.color == color);
        return {
          color: color,
          count: notes.length,
        };
      });
    },
  },
  actions: {
    addNote(context) {
      if (context.state.note.title == "" || context.state.note.desc == "") {
        alert("Please enter a title and/or description");
        return;
      }
      context.commit("addNote");
    },
  },
});
