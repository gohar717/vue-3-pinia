<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue';

const products = [
    {
        id: '1',
        title: 'Canon 7d',
        img: 'https://i1.adis.ws/i/canon/eos-r5_martin_bissig_lifestyle_05_c629aad3c2154f34b3d7d7ba5a509196?$70-30-header-4by3-dt-jpg$',
        price: '299.9$',
    },
    {
        id: '2',
        title: 'Canon 7d',
        img: 'https://i1.adis.ws/i/canon/eos-r5_martin_bissig_lifestyle_05_c629aad3c2154f34b3d7d7ba5a509196?$70-30-header-4by3-dt-jpg$',
        price: '299.9$',
    },
    {
        id: '3',
        title: 'Canon 7d',
        img: 'https://i1.adis.ws/i/canon/eos-r5_martin_bissig_lifestyle_05_c629aad3c2154f34b3d7d7ba5a509196?$70-30-header-4by3-dt-jpg$',
        price: '299.9$',
    },
    {
        id: '4',
        title: 'Canon 7d',
        img: 'https://i1.adis.ws/i/canon/eos-r5_martin_bissig_lifestyle_05_c629aad3c2154f34b3d7d7ba5a509196?$70-30-header-4by3-dt-jpg$',
        price: '299.9$',
    },
]

</script>
<template>
    <div class="home container">
        <div class="card-box">
            <CardComponent
                v-for="product in products" :key="product.id"
                :title="product.title"
                :img="product.img"
                :price="product.price"
                button-tex="buy"
            />
        </div>
    </div>
</template>
<style scoped lang="scss">
.home {
    width: 100%;
    height: 100%;
}
.card-box {
    padding: 0 32px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr) );
    gap: 20px;
}
</style>