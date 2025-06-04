<script setup>
import { ref, computed } from 'vue'
import Home from './Home.vue'
import Add from './Add.vue'

</script>

<template>

  <header class="bg-[#157A6E] px-5">
    <router-link :to="{name: 'home'}"><img alt="Vue logo" class="logo" src="./assets/logo.svg" width="25" height="25" /></router-link>
  </header>
  
  
    <router-view />
</template>