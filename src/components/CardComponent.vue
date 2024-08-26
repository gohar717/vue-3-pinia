<script setup lang="ts">
import { withDefaults, defineProps, computed } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue';
import ShopIcon from '@/assets/images/shopping-cart.svg';

interface Props {
    title: string;
    img: string;
    price: number | null;
    buttonTex: string;
    discount: number | null;
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    img: '',
    price: null,
    buttonTex: '',
    discount: null
})

const numberWithCommas = (x: number | null) => {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const discountCalc = computed(() => {
    if (props.price && props.discount) {
        return numberWithCommas(Math.floor(props.price - (props.price / 100 * props.discount)))
    } else if (props.price) {
        return numberWithCommas(props.price)
    }
    return 0
})
</script>

<template>
    <div class="card">
        <v-carousel class="card__image" show-arrows="hover" hide-delimiters height="300px">
            <v-carousel-item
                :src="img"
                cover
            ></v-carousel-item>

            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                cover
            ></v-carousel-item>

            <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
            ></v-carousel-item>
        </v-carousel>
        <h2 class="card__header">{{title}} <small v-if="discount">{{ discount }}%</small></h2>
        <div class="card__price">
            <span>{{ discountCalc }}$ </span>
            <small v-if="discount" class="old-price">{{ numberWithCommas(props.price) }}$</small>
        </div>
        <ButtonComponent full-width :icon="ShopIcon" icon-start>{{ buttonTex }}</ButtonComponent>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: 100%;
    max-width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 9px;
    overflow: hidden;
    text-align: start;
    gap: 8px;
    @media screen and (max-width: 640px) {
        max-width: 100%;
    }

    &__image {
        img{
            width: 100%;
            height: 300px;
            object-fit: cover;
        }
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
        display: flex;
        gap: 10px;
        .old-price {
            text-decoration: line-through;
        }
    }
}
</style>