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
    <button class="rounded-sm text-white bg-[#499F68] h-10 px-2" ><strong>{{text}}</strong></button>
</template>