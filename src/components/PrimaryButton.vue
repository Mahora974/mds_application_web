<script setup>

defineProps({
    text : {
        type: String,
        required: true,
    },
    type : {
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
  <router-link v-if="action" :to="{name: action}">
    <button :type="type" class="cursor-pointer rounded-sm text-white bg-[#499F68] h-10 px-2" >
        <strong>{{text}}</strong>
    </button>
</router-link>

<button  v-else :type="type" class="cursor-pointer rounded-sm text-white bg-[#499F68] h-10 px-2" >
    <strong>{{text}}</strong>
</button>
</template>