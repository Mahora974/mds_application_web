<script setup async>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import DangerAlert from '@/components/DangerAlert.vue';
import SuccessAlert from '@/components/SuccessAlert.vue';

const route = useRoute()
let successMessage = ref('')
if (route !== undefined){
    successMessage.value =  route.query.success
}
const errorMessages = ref([])
const products = ref([]);

async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    products.value = data;
    localStorage.setItem('products', JSON.stringify(data));
    localStorage.setItem('lastFetch', Date.now());
}

const lastFetch = localStorage.getItem('lastFetch');

onMounted(async () => {
    try {   
        products.value = JSON.parse(localStorage.getItem('products'));
        if (!products.value  || !lastFetch || Date.now() - lastFetch >= 600000){
            await fetchProducts();
        }  
    } catch (error) {
        errorMessages.value.push("Erreur lors de la récupération des produits :", error);
    }
});
</script>

<template>
    <div class="m-4">
        <SuccessAlert v-if="successMessage" :text="successMessage" />
        <div v-if="errorMessages">
            <DangerAlert v-for="error of errorMessages" :text="error" />
        </div>
        
        <header class="sm:flex justify-between">
            <h1 class="text-xl text-(--color-heading) font-bold">Répertoire des produits</h1>
            <PrimaryButton type="button" text="Ajouter" action="add"/>
        </header>
        <section class="md:grid md:grid-cols-3 md:gap-3">
            <ProductCard v-for="product in products" @delete="(message)=>successMessage = message" :key="product.id" :id="product.id" :img="product.image" :price="product.price" :label="product.title" :description="product.description" :category="product.category"/>
        </section>
    </div>
</template>