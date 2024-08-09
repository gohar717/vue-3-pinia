<script setup lang="ts">
import { useCounterStore } from "../stores/counter.ts";
import { ref, computed } from "vue";

const store = useCounterStore();
const { increment, liveValue, clear, setValue, liveAmount } = store;

const intervalId = ref<any>(null)

const incrementFnc = () => {
  intervalId.value = setInterval(() => {
    increment()
  }, 1);
}
const stopping = () => {
  if (intervalId.value) {
    setValue(liveValue.value)
    clearInterval(intervalId.value);
    intervalId.value = null;
    clear()
  }
}

const convertTime = computed(() => {
  const totalMilliseconds = liveAmount.value;
  const ms = totalMilliseconds % 100;
  const totalSeconds = Math.floor(totalMilliseconds / 100);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);

  return `${days}d ${hours}h ${minutes}m ${seconds}s ${ms}ms`;
});

</script>

<template>
  <div class="hello">
    <h1> {{ convertTime }}</h1>
    <h1> {{ liveValue }}ms</h1>
    <button @mousedown="incrementFnc" @mouseup="stopping" @mouseleave="stopping"> click me </button>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>