<script setup>

import DangerAlert from '@/components/DangerAlert.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { onMounted, ref } from 'vue';
import {  useRouter } from 'vue-router'

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
})

const router = useRouter()
const emit = defineEmits(['submit']);

const product = ref({
    title:'',
    price:0.0,
    category: '',
    image:'',
    description:''
})

onMounted(async () => {
    try {   
        const res = await fetch(`https://fakestoreapi.com/products/${props.id}`);
        const data = await res.json();
        product.value = data;
    } catch (error) {
        errorMessages.value.push(`Erreur lors de la récupération du produit : ${error}`);
    }
});

let errors = ref([]);

const editProduct = async () => {
    let data = {
        title:product.value.title,
        price:product.value.price,
        category: product.value.category,
        image:product.value.image,
        description:product.value.description
    };
    
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };
    const res = await fetch(`https://fakestoreapi.com/products/${props.id}`, requestOptions);
    if (!res.ok) {
        errors.value.push('Erreur lors de l\'enregitrement du produit. Si le problème persite, contactez le support');
        return;
    } 
    const response = await res.json();
    emit('submit', { ...response })
    router.replace({ name: 'home', query: { success: `Le produit ${product.value.title} a été modifié avec succès !`} });
}

</script>

<template>
    <div class="m-4">
        <header>
            <h1 class="text-xl text-(--color-heading) font-bold">Modifier un produit</h1>
        </header>
        <div v-if="errors">
            <DangerAlert v-for="error of errors" :text="error" />
        </div>
        <form @submit.prevent="editProduct" class="m-2">
            <div class="flex flex-col">
                <label>Nom du produit</label>
                <input v-model="product.title" id="label" class="rounded-xl p-3 inset-shadow-sm dark:inset-shadow-[#157A6E]" />
            </div>
            <div class="md:flex gap-2">
                <div class="flex flex-col grow">    
                    <label>Prix</label>
                    <input v-model="product.price" type="float" class="rounded-xl p-3 inset-shadow-sm dark:inset-shadow-[#157A6E]" />
                </div>
                <div class="flex flex-col grow">
                    <label>Catégorie</label>
                    <input v-model="product.category" id="category" class="rounded-xl p-3 inset-shadow-sm dark:inset-shadow-[#157A6E]" />
                </div>
            </div>
            <div class="md:flex gap-2">
                <div class="md:w-1/6 w-1/4 m-1">
                    <img :src="product.image" >
                </div>
                <div class="grow">
                    <div class="flex flex-col">
                        <label>Image</label>
                        <input v-model="product.image" type="url" class="rounded-xl p-3 inset-shadow-sm dark:inset-shadow-[#157A6E]" />
                    </div>
                    <div class="flex flex-col">
                        <label>Description</label>
                        <textarea v-model="product.description" class="rounded-xl p-3 h-[33vh] inset-shadow-sm dark:inset-shadow-[#157A6E]"></textarea>
                    </div>
                </div>
            </div>
            <div class="flex justify-end m-2">
                <PrimaryButton type="submit" text="Enregistrer" id="edit"/>
            </div>
        </form>
    </div>
</template>