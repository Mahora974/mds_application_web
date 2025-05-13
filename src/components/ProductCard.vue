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
    <div class="item">
        <img :src="img" />
        <div class="details">
            <h3>{{ label }}</h3>
            <div >
                <p><strong>{{ price }} €</strong></p>
                <p><strong>{{ stockage }}</strong></p>
            </div>
            <p>{{ description }}</p> 
        </div>
        <div class="actions">
            <EditButton />
            <DeleteButton />
        </div>
    </div>
</template>

<style scoped>
    .item {
        border: #499F68 solid 1px ;
        border-radius: 25px;
        padding: 5%;
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2%;
    }

    .details {
        display: flex;
        flex-direction: column;
    }

    .details div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .actions {
        display: flex;
        justify-content: space-between;
        grid-column-end: span 2;
    }

    .actions button {
        border: none;
        border-radius: 3px;
    }

    .edit {
        background-color: #499F68;
        color: white;
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 0.4rem;
        color: var(--color-heading);
    }

</style>  