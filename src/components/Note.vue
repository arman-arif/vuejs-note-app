<template>
  <div class="note" :style="{ backgroundColor: note.color }">
    <button class="close-btn" @click="$emit('remove', note.id)">&times;</button>
    <div class="content">
      <div class="time">{{ formatedTime }}</div>
      <h2 class="title">{{ note.title }}</h2>
      <p class="desc">{{ note.desc }}</p>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export default {
  name: "Note",
  props: {
    note: Object,
    bgColor: String,
  },
  computed: {
    formatedTime() {
      return dayjs(this.note.time).fromNow();
    },
  },
};
</script>
