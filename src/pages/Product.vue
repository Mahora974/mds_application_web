<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import DangerAlert from '@/components/DangerAlert.vue';

let successMessage = ref('');
const props = defineProps({
    id: {
        type: Number,
        required: true
    },
})

const errorMessages = ref([])
const product = ref({});


onMounted(async () => {
    try {   
        const res = await fetch(`https://fakestoreapi.com/products/${props.id}`);
        const data = await res.json();
        product.value = data;
    } catch (error) {
        errorMessages.value.push(`Erreur lors de la récupération du produit : ${error}`);
    }
});
</script>

<template>
    <div class="m-4">
        <SuccessAlert v-if="successMessage" :text="successMessage" />
        <div v-if="errorMessages">
            <DangerAlert v-for="error of errorMessages" :text="error" />
        </div>
        <ProductCard @delete="(message)=>successMessage = message" :id="product.id" :img="product.image" :price="product.price" :label="product.title" :description="product.description" :category="product.category"/>
        
    </div>
</template>