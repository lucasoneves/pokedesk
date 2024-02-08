<template>
  <NuxtLink :to="'pokemon/' + path">
    <Card>
      <NuxtImg :src="thumb" :alt="pokemonName" class="mb-3 h-20" />
      <h3 class="font-bold capitalize mb-3">{{ pokemonName }}</h3>
      <span class="text-tiny mb-12 block">Cod: {{ cod }}</span>
      <div class="pokemon-info text-tiny-xs flex gap-1">
        <span
          class="rounded-full py-1 text-white uppercase w-16 text-center"
          v-for="(pokemon, index) in pokemonTypes"
          :key="index"
          :style="{ backgroundColor: pokemon.color }"
        >
          {{ pokemon.title }}
        </span>
      </div>
    </Card>
  </NuxtLink>
</template>

<script setup lang="ts">
type PokemonTypes = {
  title: string,
  color: string,
}

defineProps({
  pokemonName: String,
  path: String,
  cod: Number || null,
  thumb: String,
  pokemonTypes: Array<PokemonTypes>
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
