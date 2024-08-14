<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue';
import ShopIcon from '@/assets/images/shopping-cart.svg';

interface Props {
    title: string;
    img: string;
    price: string;
    buttonTex: string;
    discount: string;
}

withDefaults(defineProps<Props>(), {
    title: '',
    img: '',
    price: '',
    buttonTex: '',
    discount: ''
})

</script>

<template>
    <div class="card">
        <img class="card__image" :src="img" alt="card-image" />
        <h2 class="card__header">{{title}} <small>{{ discount }}</small></h2>
        <p class="card__price">{{price}}</p>
        <ButtonComponent full-width :icon="ShopIcon">{{buttonTex}}</ButtonComponent>
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
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
        small{
            font-weight: 500px;
            font-size: 17px;
            color: red;
        }
    }
    &__price {
        font-size: 18px;
        padding: 0 8px;
    }
}
</style>