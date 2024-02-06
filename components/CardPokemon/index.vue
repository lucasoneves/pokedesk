<template>
  <Card>
    <NuxtImg :src="thumb" alt="Bulbasaur" class="mb-3 h-8" />
    <h3 class="font-bold mb-3">{{ pokemonName }}</h3>
    <span class="text-tiny mb-12 block">Cod: {{ cod }}</span>
    <div class="pokemon-info text-tiny-xs flex gap-1">
      <span
        class="rounded-full py-1 text-white uppercase w-16 text-center"
        v-for="pokemon in pokemonType"
        :key="pokemon.title"
        :style="{ backgroundColor: pokemon.color }"
      >
        {{ pokemon.title }}
      </span>
    </div>
  </Card>
</template>

<script setup lang="ts">
defineProps({
  pokemonName: String,
  cod: Number || null,
  thumb: String,
  pokemonType: [Object],
});
</script>

<style scoped></style>
