<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';

import signInIcon from '../assets/images/sign-in.svg';
import DropdownMenu from './DropdownMenu.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import InputComponent from './InputComponent.vue';

const route = useRoute();
const router = useRouter();

const leaveLogoOnly = ref(route.path.includes('login'));
const user = ref('')
const isLoggedin = ref(false);

watch(() => [route.path, user.value], 
() => {
    user.value = JSON.parse(localStorage.getItem('user') || '{}')?.email
    isLoggedin.value = !!user.value;
    leaveLogoOnly.value = route.path.includes('login')
})

const navigateToLogin = () => {
    router.push('/login')
}

</script>

<template>
    <header class="header">
        <div class="header__content container">
            <RouterLink to="/">
                <img class="logo" src="../assets/images/logo.png" />
            </RouterLink>

            <div v-if="!leaveLogoOnly" class="header__content__search">
                <DropdownMenu />
                <InputComponent placeholder="Search" />
            </div>

            <div class="user-section">
                <p v-if="isLoggedin && !leaveLogoOnly">{{ user }}</p>
                <ButtonComponent
                     v-if="!leaveLogoOnly"
                     @click="navigateToLogin"
                     class="signin"
                     :icon="signInIcon"
                >
                    {{isLoggedin ? 'Sign Out' : 'Sign In'}}
                </ButtonComponent>
            </div>
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
    border-bottom: 1px solid #CCCCFF;
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
        .user-section{
            display: flex;
            align-items: center;
            gap: 18px;
        }
    }
}

.logo {
    height: 64px;
}
</style>