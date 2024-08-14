<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue';

interface Props {
    title: string;
    img: string;
    price: string;
    buttonTex: string;
}

withDefaults(defineProps<Props>(), {
    title: '',
    img: '',
    price: '',
    buttonTex: ''
})

</script>

<template>
    <div class="card">
        <img class="card__image" :src="img" alt="card-image" />
        <h2 class="card__header">{{title}}</h2>
        <p class="card__price">{{price}}</p>
        <ButtonComponent full-width>{{buttonTex}}</ButtonComponent>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    overflow: hidden;
    text-align: start;
    gap: 8px;

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &__header {

    }
}
</style>