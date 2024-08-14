<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue';

const products = [
    {
        id: '1',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '2',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '3',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '4',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '3',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '4',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '3',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '4',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '3',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '4',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '3',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '4',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '3',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '4',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
    },
    {
        id: '3',
        title: 'Shampoo',
        img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
        price: '89.9$',
        discont: '19%'
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
                :discount="product.discont"
                button-tex="Add to Cart"
            />
        </div>
    </div>
</template>
<style scoped lang="scss">
.home {
    width: 100%;
    height: 100%;
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