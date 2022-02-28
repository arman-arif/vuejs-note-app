<template>
  <div class="form-wrapper">
    <form class="main-form" action @submit.prevent="false">
      <input type="text" class="note-title" placeholder="Enter Title" />
      <div class="form-description">
        <textarea class="note-desc" placeholder="Note Description"></textarea>
        <div class="color-palettes">
          <span
            v-for="color in colors"
            :key="color"
            :style="{ backgroundColor: color, borderColor: color }"
          ></span>
        </div>
        <button type="submit" class="add-btn">Add Note</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
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

<style></style>
