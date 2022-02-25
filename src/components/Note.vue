<template>
  <div
    class="note h-36 rounded shadow-lg relative hover:shadow-2xl p-3"
    :style="{ backgroundColor: note.color }"
  >
    <button class="close-btn">&times;</button>
    <div class="content">
      <div class="time text-gray-500 text-sm leading-none">{{ note.time }}</div>
      <h2 class="title text-md font-semibold leading-loose">{{ note.title }}</h2>
      <p class="desc leading-tight text-base text-slate-600">
          {{ note.note }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: {
    note: Object,
    bgColor: String,
  },
};
</script>