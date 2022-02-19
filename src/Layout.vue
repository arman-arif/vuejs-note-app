<template>
  <div class="wrapper fixed">
    <div class="topbar">
      <h1 class="app-title">Notes</h1>
    </div>
    <div class="content-wrapper">
      <div class="form-wrapper">
        <form class="main-form" action @submit.prevent="false">
          <input type="text" class="note-title" placeholder="Enter Title" />
          <div class="form-description">
            <textarea
              class="note-desc"
              placeholder="Note Description"
            ></textarea>
            <div class="color-palettes">
              <span class="bg-red-200 border-red-200"></span>
              <span class="bg-green-200 border-green-200"></span>
              <span class="bg-blue-200 border-blue-200"></span>
              <span class="bg-yellow-200 border-yellow-200"></span>
              <span class="bg-orange-200 border-orange-200"></span>
              <span class="bg-slate-200 border-slate-200"></span>
            </div>
            <button type="submit" class="add-btn">Add Note</button>
          </div>
        </form>
      </div>
      <div class="filter-bar">
        <div class="filter-colors">
          <span class="bg-white">All (0)</span>
          <span v-for="color in colors" :key="color" :class="color">0</span>
        </div>
      </div>
      <div
        class="w-full md:h-full h-[calc(100%-200px)] overflow-x-hidden overflow-y-auto scroll-smooth scrollbar-thin hover:scrollbar-track-indigo-400 hover:scrollbar-thumb-indigo-600"
      >
        <div class="notes h-full max-w-[640px] mx-auto rounded">
          <div
            class="note h-36 rounded shadow-lg relative hover:shadow-2xl p-3"
            v-for="color in colors"
            :class="color"
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
export default {
  name: "Layout",
  data() {
    return {
      colors: [
        "bg-slate-200",
        "bg-orange-200",
        "bg-green-200",
        "bg-red-200",
        "bg-yellow-200",
        "bg-blue-200",
        "bg-purple-200",
      ],
    };
  },
};
</script>

<style lang="scss" module="tailwind"></style>
