<script setup async>

import { ref } from 'vue';
import {  useRouter } from 'vue-router'
import DangerAlert from './DangerAlert.vue';
import PrimaryButton from './PrimaryButton.vue';

const router = useRouter()

let product = ref({
    label:'',
    price:0.0,
    category: '',
    image:'',
    description:''
})

let step = ref(1);
let errors = ref([]);

async function addProduct(){
    event.preventDefault()
    let data = {
        title:product.value.label,
        price:product.value.price,
        category: product.value.category,
        image:product.value.image,
        description:product.value.description
    };
    
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };
    const res = await fetch("https://fakestoreapi.com/products", requestOptions);
    if (!res.ok) {
        errors.value.push('Erreur lors de l\'enregitrement du produit. Si le problème persite, contactez le support')
    } 
    const response = await res.json();
    router.replace({ name: 'home', query: { success: `Le produit ${response.title} a été créé avec succès !`} });
}

</script>

<template>
    <div class="m-4">
        <header>
            <h1 class="text-xl text-(--color-heading) font-bold">Ajouter un produit</h1>
        </header>
        <div v-if="errors">
            <DangerAlert v-for="error of errors" :text="error" />
        </div>
        <form>
            <div v-if="step == 1" class="flex flex-col gap-4 m-4">
                <div class="flex flex-col">
                    <label>Nom du produit</label>
                    <input v-model="product.label" id="label" class="rounded-xl p-3 inset-shadow-sm dark:inset-shadow-[#157A6E]" />
                </div>
                <div class="md-flex gap-2">
                    <div class="flex flex-col grow">    
                        <label>Prix</label>
                        <input v-model="product.price" type="number" class="rounded-xl p-3 inset-shadow-sm dark:inset-shadow-[#157A6E]" />
                    </div>
                    <div class="flex flex-col grow">
                        <label>Catégorie</label>
                        <input v-model="product.category" id="category" class="rounded-xl p-3 inset-shadow-sm dark:inset-shadow-[#157A6E]" />
                    </div>
                </div>
                <div class="flex justify-end col-start-1 col-end-3">
                    <PrimaryButton text="Suivant" @click="step++" />
                </div>
            </div>
            <div v-if="step == 2" class="flex flex-col gap-4 m-4">
                <div class="flex flex-col">
                    <label>Image</label>
                    <input v-model="product.image" type="url" class="rounded-xl p-3 inset-shadow-sm dark:inset-shadow-[#157A6E]" />
                </div>
                <div class="flex flex-col">
                    <label>Description</label>
                    <textarea v-model="product.description" class="rounded-xl p-3 h-[33vh] inset-shadow-sm dark:inset-shadow-[#157A6E]"></textarea>
                </div>
                <div class="flex justify-between col-start-1 col-end-3">
                    <PrimaryButton text="Précédent" @click="step--"/>
                    <PrimaryButton text="Enregistrer" id="add" @click="addProduct"/>
                </div>
            </div>
        </form>
    </div>
</template>