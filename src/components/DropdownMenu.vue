<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue';
import menuIcon from '../assets/images/menu.svg';
import { useCategoriesStore } from '@/stores/categories';
import { BriefcaseIcon, ChevronRightIcon, CircleStackIcon, CodeBracketIcon, Cog6ToothIcon, CurrencyDollarIcon, EllipsisHorizontalCircleIcon, HomeModernIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/vue/24/outline';
import { DevicePhoneMobileIcon, TruckIcon, BuildingOffice2Icon, HomeIcon, CubeIcon, ScissorsIcon, HeartIcon, UsersIcon } from '@heroicons/vue/24/outline';

const store = useCategoriesStore();
const iconsArr = [
    BuildingOffice2Icon,
    TruckIcon,
    DevicePhoneMobileIcon,
    CubeIcon,
    HomeIcon,
    ScissorsIcon,
    HeartIcon,
    UsersIcon,
    RocketLaunchIcon,
    SparklesIcon,
    BriefcaseIcon,
    HomeModernIcon,
    CurrencyDollarIcon,
    EllipsisHorizontalCircleIcon,
    Cog6ToothIcon,
    CodeBracketIcon,
    BriefcaseIcon,
    CircleStackIcon,
]
</script>

<template>
    <div class="dropdown">
        <ButtonComponent class="dropbtn" type="text" :icon="menuIcon" icon-start>Categories</ButtonComponent>
        <div class="dropdown-content container">
            <div class="categories">
                <div class="categories__list">
                    <div v-for="(category, i) in store.categories" :key="category.id">
                        <div class="categories__list-item">
                            <div>
                                <component class="icon" :is="iconsArr[i]"></component>
                                {{ category.title }}
                            </div>
                            <ChevronRightIcon class="icon" />
                        </div>
                        <div v-if="category.break" class="break" />
                    </div>
                </div>
                <div class="categories__sub-categories">sub categories section</div>
            </div>
        </div>
    </div>
    <div class="dark" />
</template>

<style scoped lang="scss">
.dropdown {
    display: inline-block;

    &:hover~.dark {
        display: block;
    }
}

.categories {
    display: grid;
    grid-template-columns: 380px 1fr;

    &__list {
        border-right: 1px solid rgba(124, 124, 124, 0.315);
        padding: 5px 0;

        &-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 8px 6px 16px;
            color: #46304D;
            font-size: 16px;

            &:hover {
                transition: 100ms all;
                cursor: pointer;
                color: #C35DE0;
            }

            div {
                display: flex;
                align-items: center;
                gap: 10px;
            }
        }

        .icon {
            width: 21px;
            height: 21px;
        }
    }

    &__sub-categories {
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(151, 151, 151);
        font-size: 40px;
    }
}

.dropdown-content {
    width: 100%;
    background-color: #ece7ee;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    display: none;
    z-index: 2;
    border-radius: 0 0 1rem 1rem;
}

.dropdown:hover .dropbtn {
    margin-top: 22px;
    border-radius: 9px 9px 0 0;
    background-color: #b091bb56;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dark {
    display: none;
    width: 100%;
    height: 100vh;
    background-color: #02010175;
    position: absolute;
    right: 0;
    left: 0;
    top: 80px;
    z-index: 1;
}
</style>