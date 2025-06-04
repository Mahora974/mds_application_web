<script setup>

defineProps({
    text : {
        type: String,
        required: true,
    },
    action: {
        type: String,
        required: false,
    },
})
</script>
<template>
    <a :href="action"><button class="cursor-pointer rounded-sm text-white bg-[#499F68] h-10 px-2" ><strong>{{text}}</strong></button></a>
</template>