<script setup async>
import PrimaryButton from './components/PrimaryButton.vue';
import ProductCard from './components/ProductCard.vue';
import { ref, onMounted } from 'vue';

const products = ref([]);

onMounted(async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        products.value = data;
    } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
    }
});
</script>

<template>
    <div class="m-4">
        <header class="sm:flex justify-between">
            <h1 class="text-xl text-(--color-heading) font-bold">Répertoire des produits</h1>
            <PrimaryButton text="Ajouter"/>
        </header>
        <section class="md:grid md:grid-cols-3 md:gap-3">
            <ProductCard v-for="product in products" :key="product.id" :img="product.image" :price="product.price" :label="product.title" :description="product.description" :category="product.category"/>
        </section>
    </div>
</template>