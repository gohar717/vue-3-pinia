<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';
import SearchComponent from './SearchComponent.vue';

import signInIcon from '../assets/images/sign-in.svg';
import DropdownMenu from './DropdownMenu.vue';

</script>

<template>
    <header class="header">
        <div class="header__content container">
            <img class="logo" src="../assets/images/logo.png" />

            <div class="header__content__search">
                <DropdownMenu />
                <SearchComponent />
            </div>

            <ButtonComponent class="signin" :icon="signInIcon">Sign In</ButtonComponent>
        </div>
        
    </header>
</template>

<style scoped lang="scss">
.header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #f5eef8;
    border-bottom: 2px solid #CCCCFF;
    position: fixed;

    &__content {
        padding: 8px 32px;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        justify-content: space-between;
        gap: 18px;

        @media (max-width: 1024px) {
            padding: 8px 32px;
            gap: 10px;
        }

        @media (max-width: 640px) {
            padding: 8px 10px;
            grid-template-columns: auto 1fr max-content;
            gap: 0px;
        }

        &__search {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .logo {
            @media (max-width: 640px) {
                display: none;
            }
        }

        .categories {
            cursor: pointer;

            @media (max-width: 640px) {
                display: none;
            }
        }

        .signin {
            @media (max-width: 640px) {
                display: none;
            }
        }

    }
}

.logo {
    height: 64px;
}
</style>