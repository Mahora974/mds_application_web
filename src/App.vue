<script setup>
import ProductCard from './components/ProductCard.vue'
const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wxJ0c-jC6VcDASO9aiDWD9zWAeJLKrS5gg&s'
</script>

<template>
  <main>
    <ProductCard :img="img" :price="44.00" :stockage="200" description="Lorem Ipsum" label="Produit" />
  </main>
</template>

<style scoped>
</style>
