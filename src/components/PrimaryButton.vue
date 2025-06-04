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
  <router-link :to="{name: action}"><button type="button" class="cursor-pointer rounded-sm text-white bg-[#499F68] h-10 px-2" ><strong>{{text}}</strong></button></router-link>
</template>