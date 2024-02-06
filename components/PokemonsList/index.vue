
<template>
  <h2 class="hidden sm:block py-10 font-bold">Pokémons</h2>
  <div class="grid mt-7 md:mt-0 gap-y-4 gap-x-7 sm:gap-x-3 sm:gap-y-8 grid-card">
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
    <CardPokemon />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .grid-card {
    grid-template-columns: repeat(auto-fill, minmax(152px, 1fr));
  }
</style>