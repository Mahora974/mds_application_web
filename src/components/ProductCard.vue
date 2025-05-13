<script setup>
import  EditButton  from "./EditButton.vue";
import DeleteButton from "./DeleteButton.vue";

defineProps({
    img: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stockage: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="md:grid md:grid-cols-2 gap-2 rounded-3xl p-5 shadow-lg dark:shadow-[#157A6E]">
        <img :src="img" />
        <div class="details flex flex-col">
            <h3 class="text-(--color-heading) text-lg">{{ label }}</h3>
            <div class="flex flex-row justify-between" >
                <p class="text-right text-(--color-heading)">{{ price }} €</p>
                <p class="text-right text-(--color-heading)">En stock : {{ stockage }}</p>
            </div>
            <p>{{ description }}</p> 
        </div>
        <div class="flex justify-between col-start-1 col-end-3">
            <EditButton />
            <DeleteButton />
        </div>
    </div>
</template>