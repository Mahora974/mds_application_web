<script setup>
import  PrimaryButton  from "./PrimaryButton.vue";
import DeleteButton from "./DangerButton.vue";
import ConfimCard from "./ConfimCard.vue";
import { ref } from "vue";

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
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
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})
const open = ref(false)


</script>

<template>
    <div class="flex flex-col gap-2 justify-between rounded-3xl p-5 shadow-lg dark:shadow-[#157A6E]" :id="'id'+id">
        <RouterLink :to="{name: 'product', params: {id: id}}" class="lg:flex lg:flex-row gap-2">
            <img :src="img" class="max-h-40 md:max-w-50 rounded-xl" />
            <div class="flex flex-col w-full flex-1">
                <h3 class="line-clamp-2 overflow-hidden text-ellipsis text-(--color-heading) break-* text-lg">{{ label }}</h3>
                <div class="flex flex-row justify-between" >
                    <p class="text-right text-(--color-heading)">{{ price }} €</p>
                    <p class="text-right text-(--color-heading)">{{ category }}</p>
                </div>
                <p class="line-clamp-4 overflow-hidden text-ellipsis  text-(--color-text) break-words">{{ description }}</p>
            </div>
        </RouterLink>
        <div class="flex justify-between col-start-1 col-end-3">
            <PrimaryButton :id="'edit'+id" type="button" text="Modifier" />
            <DeleteButton :id="'delete'+id" @click="open = true" />
        </div>
    </div>

    <ConfimCard :id="id" :name="label" :show="open" @close="open=false" @deleted="(message)=>$emit('delete',message)"/>
</template>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}
</style>