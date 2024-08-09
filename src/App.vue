  <script lang="ts" setup>
  import HeaderComponent from './components/HeaderComponent.vue';

</script>
  
<template>
  <HeaderComponent />
  <div class="router-containeer">
    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.router-containeer {
  height: 100vh;
  background-color: azure;
  padding-top: 80px;
  box-sizing: border-box;
}
</style>
