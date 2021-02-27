import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles.css";
import { useUser } from "./composables/useUser";

createApp(App)
  .use(router)
  .mount("#app");
