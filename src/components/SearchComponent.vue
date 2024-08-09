<script lang="ts" setup>
</script>

<template>
    <input class="search" placeholder="Search" />
</template>

<style scoped lang="scss">
.search {
    width: 100%;
    padding: 18px 20px;
    border: none;
    border-radius: 9px;
    transition: 300ms all ease;
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
</style>