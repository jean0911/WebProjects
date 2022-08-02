/*
 * @Author: 黄剑
 * @Date: 2022-07-27 10:42:12
 * @LastEditTime: 2022-08-02 14:16:25
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: /WebProjects/src/router/index.ts
 */
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
