<!--
 * @Author: 黄剑
 * @Date: 2022-08-04 14:35:26
 * @LastEditTime: 2022-08-05 16:18:08
 * @LastEditors: 黄剑
 * @Description: 
 * @FilePath: \WebProjects\src\views\form.vue
-->
<script setup lang="ts">
import { ref, reactive } from "vue";

interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

let userInfo: User = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

interface Tip {
  username: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

let tip: Tip = reactive({
  username: false,
  email: false,
  password: false,
  confirmPassword: false,
});

const validator = (type: string): void => {
  switch (type) {
    case "username":
      if (userInfo.username.length < 3) {
        tip.username = true;
      } else {
        tip.username = false;
      }
      break;
    case "email":
      if (/.+@.+/.test(userInfo.email) === false) {
        tip.email = true;
      } else {
        tip.email = false;
      }
      break;
    case "password":
      if (userInfo.password.length < 6) {
        tip.password = true;
      } else {
        tip.password = false;
      }
      break;
    case "confirmPassword":
      if (userInfo.password !== userInfo.confirmPassword) {
        tip.confirmPassword = true;
      } else {
        tip.confirmPassword = false;
      }
      break;
    default:
      break;
  }
};
</script>

<template>
  <div class="bg-gray-100 w-full h-full flex justify-center items-center">
    <div
      class="bg-white w-[400px] h-[553px] px-[40px] py-8 rounded-md shadow-xl flex flex-col justify-between items-center"
    >
      <div class="text-2xl font-medium">Register With Us</div>
      <div class="w-full text-gray-400 h-[90px]">
        <div>Username</div>
        <input
          class="inputSty"
          type="text"
          placeholder="Enter username"
          v-model="userInfo.username"
          @blur="validator('username')"
        />
        <p v-show="tip.username">Username must be at least 3 characters</p>
      </div>
      <div class="w-full text-gray-400 h-[90px]">
        <div>Email</div>
        <input
          type="email"
          placeholder="Enter email"
          class="inputSty"
          v-model="userInfo.email"
          @blur="validator('email')"
        />
        <p v-show="tip.email">Email is not valid</p>
      </div>
      <div class="w-full text-gray-400 h-[90px]">
        <div>Password</div>
        <input
          type="password"
          placeholder="Enter password"
          class="inputSty"
          v-model="userInfo.password"
          @blur="validator('password')"
        />
        <p v-show="tip.password">Password must be at least 6 characters</p>
      </div>
      <div class="w-full text-gray-400 h-[90px]">
        <div>Confirm Password</div>
        <input
          type="password"
          placeholder="Enter password again"
          class="inputSty"
          v-model="userInfo.confirmPassword"
          @blur="validator('confirmPassword')"
        />
        <p v-show="tip.confirmPassword">Passwords do not match</p>
      </div>
      <div
        class="bg-sky-600 w-full h-[42px] text-white text-center select-none leading-[42px] rounded-md"
      >
        Submit
      </div>
    </div>
  </div>
</template>

<style scoped>
.inputSty {
  @apply w-full h-10 p-[10px] mt-1 border rounded-md border-2 outline-none focus:border-slate-600 focus:border-2 text-black text-sm;
}

p {
  @apply text-red-600 text-sm mt-1;
}
</style>
