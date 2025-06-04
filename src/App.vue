<script setup>
import { ref, computed } from 'vue'
import Home from './Home.vue'
import Add from './Add.vue'
import NotFound from './NotFound.vue'

const routes = {
  '/': Home,
  '/add': Add
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
  <header class="bg-[#157A6E] px-5">
    <a href="#/"><img alt="Vue logo" class="logo" src="./assets/logo.svg" width="25" height="25" /></a>
  </header>
  
  <component class="m-4" :is="currentView" />
</template>