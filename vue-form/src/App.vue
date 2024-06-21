<script setup lang="ts">
import { useInputStore } from "./stores/InputStore";
import SiteHeader from "./components/SiteHeader.vue";
import InputElement from "./components/InputElement.vue";

// const inputStore = useInputStore();

</script>

<template>
  <div class="container flex flex-col min-h-screen font-Roboto bg-bg-light">
    <SiteHeader />
    
    <!-- <div class="mt-6 items-list"> -->
      <!-- <div v-for="item in inputStore.inputs" class="flex justify-center"> -->
        <InputElement />
        <!-- <InputElement :inputValue="item.inputValue" /> -->
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>
