<template>
  <div class="container-md mt-7 ml-auto mr-auto">
    <!-- <CardPokemon :pokemon-name="'Charmander'" /> -->
    <CardPokemon
      :key="pokemon._id"
      :pokemon-name="pokemon.name"
      :cod="pokemon.cod"
      :pokemon-type="pokemon.type"
      :thumb="pokemon.thumb"
    />
    <Card class="mt-7 max-h-full">
      <h3 class="font-bold mb-3">Habilidades:</h3>
      <div
        v-for="skill in pokemon.skills"
        class="py-3 border-t last:pb-0 w-full"
      >
        <span class="text-xs text-[#616161]">{{ skill.title }}</span>
      </div>
    </Card>
    <NuxtLink
      to="/"
      class="text-[#00A3FF] flex items-center justify-center font-bold text-center w-full h-10 mt-10 hover:bg-slate-200 rounded-full transition-colors ease-linear"
    >
      Voltar
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const pokemon = ref({
  name: "Bulbasaur",
  thumb:
    "https://e7.pngegg.com/pngimages/72/948/png-clipart-bulbasaur-pokemon-diamond-and-pearl-pokemon-go-pokedex-ivysaur-bulbasaur-pixel-vertebrate-grass-thumbnail.png",
  type: [
    { title: "grass", color: "#08FEC3" },
    { title: "poison", color: "#AF08FE" },
  ],
  _id: "cfc55467-a1a5-4429-b1bd-1d641a99f15a",
  cod: 1,
  skills: [
    {
      title: "Verringert allen von Teampartnern Erlitten Schaden a 75%.",
    },
    {
      title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
    },
    {
      title: "Ein Pokémon mit dieser Fähigkeit kann nicht paralysiert werden",
    },
    {
      title: "Verringert allen von Teampartnern Erlitten Schaden a 75%.",
    },
  ],
});
</script>

<style scoped></style>
