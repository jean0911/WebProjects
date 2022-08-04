/*
 * @Author: 黄剑
 * @Date: 2022-08-02 14:05:07
 * @LastEditTime: 2022-08-04 16:08:27
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \WebProjects\src\router\routes.ts
 */
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/form",
    component: () => import("@/views/Form.vue"),
  },
];
