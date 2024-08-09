import { defineStore } from "pinia";
import { computed, ComputedRef, Ref, ref } from "vue";

interface State {
    count: Ref<number>;
    liveValue: ComputedRef<Ref<number>>;
    liveAmount: ComputedRef<Ref<number>>;
    increment: () => void;
    clear: () => void;
    setValue: (value: number) => void;
}

export const useCounterStore = defineStore('counter', (): State => {
    const count: Ref<number> = ref(0);
    const amount: Ref<number> = ref(0);

    const liveValue = computed(() => count);
    const liveAmount = computed(() => amount);
    function increment() {
        count.value++
    }
    function setValue(value: number) {
        amount.value = value;
    }
    function clear() {
        count.value = 0;
    }

    return { count, liveValue, increment, clear, setValue, liveAmount }
})