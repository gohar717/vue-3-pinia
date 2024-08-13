<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface InputProps {
    name?: string;
    type?: string;
    placeholder?: string;
    modelValue?: string | number;
    errorMessage?: string;
}

const props = defineProps<InputProps>();
const emit = defineEmits(["update:modelValue"]);

function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}
</script>

<template>
    <div class="input-box">
        <input
            class="input"
            v-bind="props"
            :value="modelValue"
            @input="handleInput"
        />
        <span v-if="errorMessage" class="error">
            {{ errorMessage }}
        </span>
    </div>
</template>

<style scoped lang="scss">
.input-box {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.input {
    width: 100%;
    padding: 18px 20px;
    border: none;
    border-radius: 9px;
    transition: 300ms all ease;
    box-sizing: border-box;

    @media screen and (max-width: 1024px) {
        padding: 16px 20px;
    }

    @media screen and (max-width: 640px) {
        padding: 14px 16px;
    }

    &:hover {
        background-color: lightgray;
    }

    &:focus {
        background-color: #fff;
        outline: 1px solid #46304D;
    }
}

.error {
    width: 100%;
    font-size: 14px;
    padding: 0 5px;
    color: red;
    text-align: start;
}
</style>
