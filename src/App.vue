<template>
  <Master :pageTitle="$store.state.appName">
    <Form />
    <FilterBar />
    <Notes />
  </Master>
</template>

<script>
import app from "@/mixins/app";
export default {
  name: "App",
  mixins: [app],
};
</script>

<style scoped></style>
