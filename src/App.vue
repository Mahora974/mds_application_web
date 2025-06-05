<script setup>
import { ref, computed } from 'vue'

</script>

<template>

  <header class="bg-[#157A6E] px-5">
    <router-link :to="{name: 'home'}" class="block size-fit"><img alt="Vue logo" class="logo my-2" src="./assets/logo.svg" width="25" height="25" /></router-link>
  </header>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>