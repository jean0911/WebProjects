<!--
 * @Author: 黄剑
 * @Date: 2022-07-27 10:42:12
 * @LastEditTime: 2022-08-04 16:06:51
 * @LastEditors: 黄剑
 * @Description: 
 * @FilePath: \WebProjects\src\App.vue
-->
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="w-screen h-screen flex">
    <div class="w-1/6 flex flex-col items-center justify-evenly">
      <div class="bt" @click="router.push('/form')">Form Validator</div>
      <div class="bt">Movie Seat Booking</div>
      <div class="bt">Custom Video Player</div>
      <div class="bt">Exchange Rate Calculator</div>
      <div class="bt">DOM Array Methods Project</div>
      <div class="bt">Menu Slider & Modal</div>
      <div class="bt">Hangman Game</div>
      <div class="bt">Mealfinder App</div>
      <div class="bt">Expense Tracker</div>
      <div class="bt">Music Player</div>
      <div class="bt">Infinite Scrolling</div>
      <div class="bt">Typing Game</div>
      <div class="bt">Speech Text Reader</div>
      <div class="bt">Memory Cards</div>
      <div class="bt">LyricsSearch App</div>
      <div class="bt">Relaxer App</div>
      <div class="bt">Breakout Game</div>
      <div class="bt">New Year Countdown</div>
      <div class="bt">Sortable List</div>
      <div class="bt">Speak Number Guessing Game</div>
    </div>
    <div class="w-5/6">
      <router-view />
    </div>
  </div>
</template>
<style scoped>
.bt {
  @apply bg-violet-900 hover:bg-violet-700 hover:scale-105 hover:font-bold duration-100 w-72 h-10 leading-10 text-white rounded-xl text-base text-center cursor-pointer;
}
</style>
