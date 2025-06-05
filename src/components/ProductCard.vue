<script setup>
import  PrimaryButton  from "./PrimaryButton.vue";
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
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="flex flex-col gap-2 justify-between rounded-3xl p-5 shadow-lg dark:shadow-[#157A6E]">
        <div class="lg:flex lg:flex-row gap-2">
            <img :src="img" class="max-h-40 md:max-w-50 rounded-xl" />
            <div class="flex flex-col w-full flex-1">
                <h3 class="line-clamp-2 overflow-hidden text-ellipsis text-(--color-heading) break-* text-lg">{{ label }}</h3>
                <div class="flex flex-row justify-between" >
                    <p class="text-right text-(--color-heading)">{{ price }} €</p>
                    <p class="text-right text-(--color-heading)">{{ category }}</p>
                </div>
                <p class="line-clamp-4 overflow-hidden text-ellipsis break-words">{{ description }}</p>
            </div>
        </div>
        <div class="flex justify-between col-start-1 col-end-3">
            <PrimaryButton type="button" text="Modifier" />
            <DeleteButton />
        </div>
    </div>
</template>