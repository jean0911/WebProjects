/*
 * @Author: 黄剑
 * @Date: 2022-07-27 16:29:30
 * @LastEditTime: 2022-07-27 16:39:58
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \WebProjects\src\plugins\index.ts
 */
import type { App } from "vue";
import setTailwind from "./tailwindcss/index";

export default function setPlugins(app: App) {
  setTailwind(app);
}
