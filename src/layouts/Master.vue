<template>
  <div class="wrapper fixed">
    <div class="topbar">
      <h1 class="app-title">{{ pageTitle ?? "Notes" }}</h1>
    </div>
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Master",
  props: {
    pageTitle: String,
  },
};
</script>
