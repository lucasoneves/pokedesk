<template>
  <div>
    <Header />
    <NuxtPage />
    <Loading v-if="loader.getLoader"/>
  </div>
</template>

<script setup lang="ts">
import { useLoaderStore } from './stores/loading';
const loader = useLoaderStore();
</script>
