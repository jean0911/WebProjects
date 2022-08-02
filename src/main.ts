/*
 * @Author: 黄剑
 * @Date: 2022-07-27 10:42:12
 * @LastEditTime: 2022-08-02 13:59:38
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: /WebProjects/src/main.ts
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import setPlugins from "@/plugins/index";

const app = createApp(App);

setPlugins(app);

app.use(createPinia());
app.use(router);

app.mount("#app");
