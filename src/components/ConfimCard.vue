<script setup>
import DangerButton from './DangerButton.vue';
import PrimaryButton from './PrimaryButton.vue';

const props = defineProps({
    show:{
        type: Boolean,
        required:true
    },
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    }
})
const emit = defineEmits(['close']);

async function deleteProduct() {
    const res = await fetch(`https://fakestoreapi.com/products/${props.id}`, {
        method: "DELETE"
    });
    if (!res.ok) {
        errors.value.push('Erreur lors de la suppression du produit. Si le problème persite, contactez le support');
        return;
    } 
    emit('close');
    emit('deleted', `${props.name} a bien été supprimé`)
}
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container rounded-3xl shadow-sm dark:shadow-[#157A6E] bg-(--color-background)">
                    <h1 class="line-clamp-2 overflow-hidden text-ellipsis text-(--color-heading) break-* text-lg">Suppression de {{ name }} </h1>

                    <div class="modal-body">
                        <p><span class="text-(--color-heading)">ATTENTION !</span> Cette action est <span class="text-(--color-heading)">irréversible</span>.</p>

                        <p>Souhaitez-vous supprimer <span span class="text-(--color-heading)">{{ name }}</span> ?</p>
                    </div>

                    <div class="flex justify-between col-start-1 col-end-3">
                        <PrimaryButton text="Annuler" type="button" @click="$emit('close')"/>
                        <DangerButton @click="deleteProduct" />
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 75vw;
    margin: 0px auto;
    padding: 20px 30px;
    transition: all 0.3s ease;
}

.modal-body {
    margin: 20px 0;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>