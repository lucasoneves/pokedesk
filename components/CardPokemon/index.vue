<template>
  <NuxtLink :to="!disabled ? 'pokemon/' + path : undefined">
    <Card>
      <NuxtImg :src="thumb" :alt="pokemonName" class="sm:mb-3 h-32 sm:h-20" />
      <h3 class="text-lg sm:text-sm  font-bold capitalize mb-3">{{ pokemonName }}</h3>
      <span class="sm:text-tiny mb-12 block">Cod: {{ cod }}</span>
      <div class="pokemon-info text-xs sm:text-tiny-xs flex items-center justify-center gap-1">
        <span
          class="rounded-full py-1 text-white uppercase w-16 sm:w-16 text-center"
          v-for="(type, index) in pokemonTypes"
          :key="index"
          :style="{ backgroundColor: type.color }"
        >
          {{ type.title }}
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
  pokemonTypes: Array<PokemonTypes>,
  disabled: {
    type: Boolean,
    default: false
  }
});

</script>

<style scoped>
/* Add your custom styles here */
</style>
