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
          <div
            class="note h-36 rounded shadow-lg relative hover:shadow-2xl p-3"
            v-for="color in colors"
            :style="{ backgroundColor: color }"
            :key="color"
          >
            <button class="close-btn">&times;</button>
            <div class="content">
              <div class="time text-gray-500 text-sm leading-none">
                A minutes ago.
              </div>
              <h2 class="title text-md font-semibold leading-loose">
                The Note Title
              </h2>
              <p class="desc leading-tight text-base text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident, quos?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import FilterBar from "./components/FilterBar.vue";
export default {
  name: "Layout",
  components: {
    Form,
    FilterBar,
  },
  data() {
    return {
      colors: [
        "#FECACA",
        "#BBF7D0",
        "#BFDBFE",
        "#FEF08A",
        "#FED7AA",
        "#E9D5FF",
        "#E2E8F0",
      ],
    };
  },
};
</script>

<style lang="scss" module="tailwind"></style>
