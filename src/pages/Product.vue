<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import DangerAlert from '@/components/DangerAlert.vue';

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
})

const errorMessages = ref([])
const product = ref({});

async function fetchProduct() {
    const res = await fetch(`https://fakestoreapi.com/products/${props.id}`);
    const data = await res.json();
    product.value = data;
}

const lastFetch = localStorage.getItem('lastFetch');

onMounted(async () => {
    try {   
        product.value = await fetchProduct();
    } catch (error) {
        errorMessages.value.push(`Erreur lors de la récupération du produit : ${error}`);
    }
});
</script>

<template>
    <div class="m-4">
        <div v-if="errorMessages">
            <DangerAlert v-for="error of errorMessages" :text="error" />
        </div>
        <ProductCard :id="product.id" :img="product.image" :price="product.price" :label="product.title" :description="product.description" :category="product.category"/>
        
    </div>
</template>