import { createApp } from "vue";
import RootApp from "./App.vue";
import "./assets/main.scss";
import store from "./store";

const app = createApp(RootApp);

app.use(store);

app.mount("#app");
