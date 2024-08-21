<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue';
import { usProductsStore } from '@/stores/products';

const store = usProductsStore()

const discountCalc = (e: number | null) => {

    return e
}
</script>
<template>
    <div class="home container">
        <div class="card-box">
            <CardComponent
                v-for="product in store.products" :key="product.id"
                :title="product.title"
                :img="product.img"
                :price="product.price"
                :discount="discountCalc(product.discont)"
                button-tex="Add to Cart"
            />
        </div>
    </div>
</template>
<style scoped lang="scss">
.home {
    width: 100%;
    padding: 20px 0;
    box-sizing: border-box;
}
.card-box {
    padding: 0 32px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr) );
    gap: 20px;
}
</style>