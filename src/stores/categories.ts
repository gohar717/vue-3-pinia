import { defineStore } from "pinia";
import { computed, ComputedRef, Ref, ref } from "vue";

interface State {
    categories: Ref<Category[]>;
}

interface Category {
    id: string | number;
    title: string;
}


export const useCategoriesStore = defineStore('counter', (): State => {
    const categories = ref([
        {id: 1, title: 'Electronics'},
        {id: 2, title: 'Appliances'},
        {id: 3, title: 'Home and Garden'},
        {id: 4, title: 'Clothing and Fashion'},
        {id: 5, title: 'Health and Beauty'},
        {id: 6, title: 'Baby and Kids'},
        {id: 7, title: 'Hobbies and Sports'},
        {id: 8, title: 'Pets and Animals'},
        {id: 9, title: 'Food and Beverages'},
        {id: 10, title: 'Renovation and Construction'},
        {id: 11, title: 'Business and Еquipment'},
        {id: 12, title: 'Everything Else'},
    ]);

    return { categories }
})















