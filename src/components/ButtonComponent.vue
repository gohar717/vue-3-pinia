<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
interface Props {
    icon?: string;
    iconStart?: boolean;
    type?: 'outline' | 'filled' | 'text';
}

withDefaults(defineProps<Props>(), {
    icon: '',
    iconStart: false,
    type: 'filled'
})

</script>

<template>
    <button
        class="button" 
        :class="{ iconStart, [type]: true }"
    >
        <slot></slot>
        <img class="icon" v-if="icon" :src="icon" alt="icon" />
    </button>
</template>

<style scoped lang="scss">
.button {
    max-width: 200px;
    min-width: 60px;
    border: none;
    border-radius: 9px;
    padding: 18px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: 300ms all ease;

    @media screen and (max-width: 1024px) {
        font-size: 14px;
        padding: 16px 20px;
    }

    @media screen and (max-width: 640px) {
        padding: 14px 16px;
        gap: 8px;
    }

    &.outline {
        background-color: #00000000;
        outline: 1px solid #46304D;
        color: #000000;
        fill: black;

        .icon {
            filter: invert(1);
        }

        &:hover {
            background-color: #291C2E;
            color: #fff;

            .icon {
                filter: invert(0);
            }
        }
    }

    &.filled {
        background-color: #46304D;
        color: #fff;

        &:hover {
            background-color: #291C2E;
        }
    }

    &.text {
        background-color: #00000000;
        color: #000000;

        .icon {
            filter: invert(1);
        }

        &:hover {
            background-color: #b091bb56;
        }
    }

    &.iconStart {
        flex-direction: row-reverse;
    }

    .icon {
        width: 16px;
        height: 16px;
    }
}
</style>