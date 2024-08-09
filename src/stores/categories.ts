import { defineStore } from "pinia";
import { computed, ComputedRef, Ref, ref } from "vue";

interface State {
    categories: Ref<Category[]>;
}

interface Category {
    id: string | number;
    title: string;
    break?: boolean;
}


export const useCategoriesStore = defineStore('counter', (): State => {
    const categories = ref([
        { id: 1, title: 'Real Estate' },
        { id: 2, title: 'Vehicles', break: true },
        { id: 3, title: 'Electronics' },
        { id: 4, title: 'Appliances' },
        { id: 5, title: 'Home and Garden' },
        { id: 6, title: 'Clothing and Fashion' },
        { id: 7, title: 'Health and Beauty' },
        { id: 8, title: 'Baby and Kids' },
        { id: 9, title: 'Hobbies and Sports' },
        { id: 10, title: 'Pets and Animals' },
        { id: 11, title: 'Food and Beverages' },
        { id: 12, title: 'Renovation and Construction' },
        { id: 13, title: 'Business and Еquipment' },
        { id: 14, title: 'Everything Else', break: true },
        { id: 15, title: 'Service' },
        { id: 16, title: 'Jobs', break: true },
        { id: 17, title: 'Business page' },
    ]);

    return { categories }
})















