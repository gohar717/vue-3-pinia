import { defineStore } from "pinia";
import { Ref, ref } from "vue";

interface State {
    products: Ref<Products[]>;
}

interface Products {
    id: string;
    title: string;
    img: string;
    price: number | null;
    discont: number | null;
}

export const usProductsStore = defineStore('products', (): State => {
    const products = ref([
        {
            id: '1',
            title: 'Shampoo',
            img: 'https://lapink.com/cdn/shop/files/self-care-combo-paytm-la-pink-2.jpg?v=1721375421&width=416',
            price: 250,
            discont: 19
        },
        {
            id: '2',
            title: 'Shampoo',
            img: 'https://belle-histoire.com/wp-content/uploads/2022/12/010-Fusion_Self_Care_Products_HandCream_SQ_WR_211117_0676-Edit_1445x.jpg.webp',
            price: 100,
            discont: null
        },
        {
            id: '3',
            title: 'Shampoo',
            img: 'https://img.huffingtonpost.com/asset/657a0ff62300003200c0b03c.jpeg?ops=scalefit_960_noupscale',
            price: 500,
            discont: 8
        },
        {
            id: '4',
            title: 'Shampoo',
            img: 'https://media.cnn.com/api/v1/images/stellar/prod/200318124911-selfcareavocado.jpg?q=w_1700,h_957,x_0,y_0,c_fill',
            price: 1990,
            discont: 19
        },
        {
            id: '3',
            title: 'Shampoo',
            img: 'https://images.summitmedia-digital.com/cosmo/images/2023/07/11/melixir-vegan-airfit-sunscreen-spf-50-1689063605.jpg',
            price: 79.9,
            discont: 9
        },
        {
            id: '4',
            title: 'Shampoo',
            img: 'https://static.wixstatic.com/media/da548e_793a9bb44b3941f89cdb8899c55c8089~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
            price: 80.9,
            discont: null
        },
        {
            id: '3',
            title: 'Shampoo',
            img: 'https://latikasoap.com/wp-content/uploads/2022/06/cream-front-self-care.jpg',
            price: 890.9,
            discont: 19
        },
        {
            id: '4',
            title: 'Shampoo',
            img: 'https://cdn.shopify.com/s/files/1/0265/1910/9685/files/Self_Care_5_Vida_Glow_De_Stress.jpg?v=1689839715',
            price: 590.9,
            discont: 19
        },
        {
            id: '3',
            title: 'Shampoo',
            img: 'https://www.sephora.com/productimages/sku/s2403640-main-zoom.jpg',
            price: 5000.9,
            discont: 19
        },
        {
            id: '4',
            title: 'Shampoo',
            img: 'https://b3618683.smushcdn.com/3618683/wp-content/uploads/2022/06/cream-front-calm.jpg?lossy=1&strip=1&webp=1',
            price: 7990.9,
            discont: 19
        },
        {
            id: '3',
            title: 'Shampoo',
            img: 'https://www.sephora.com/productimages/product/p466427-av-05-zoom.jpg',
            price: 12000,
            discont: 19
        },
        {
            id: '4',
            title: 'Shampoo',
            img: 'https://theouai.com/cdn/shop/files/Site_Asset_PDP_Product_Thumbnail_1316x1526_bb269c22-1ad0-4748-9166-206f7ab0d275.jpg?v=1717026495',
            price: 3500,
            discont: 19
        },
        {
            id: '3',
            title: 'Shampoo',
            img: 'https://cdn.shopify.com/s/files/1/1991/8975/files/bellyoilMINI_6_R1_720x.jpg?v=1686300132',
            price: 4000,
            discont: 50
        },
        {
            id: '4',
            title: 'Shampoo',
            img: 'https://www.sephora.com/productimages/sku/s2269470-main-zoom.jpg?imwidth=315',
            price: 5000,
            discont: 90
        },
        {
            id: '3',
            title: 'Shampoo',
            img: 'https://cdn.shopify.com/s/files/1/1991/8975/products/HATCH-10-30-1720958-SINGLE-copy-2_720x.jpg?v=1569003958',
            price: 8540,
            discont: 10
        },
    ])

    const search = () => {

    }

    return { products }
})















