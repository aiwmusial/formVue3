<script setup lang="ts">
import { useInputStore } from "./stores/InputStore";
import SiteHeader from "./components/SiteHeader.vue";
import InputElement from "./components/InputElement.vue";

</script>

<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-bg-light">
    <SiteHeader />
      <InputElement />
  </div>
</template>
