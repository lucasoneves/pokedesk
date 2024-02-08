<template>
  <div>
    <h2 class="hidden sm:block py-10 font-bold">Pokémons</h2>
    <div
      class="grid mt-7 md:mt-0 gap-y-4 gap-x-7 sm:gap-x-3 sm:gap-y-8 grid-card"
    >
      <CardPokemon
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon-types="pokemon.types"
        :pokemon-name="pokemon.name"
        :cod="pokemon.id"
        :thumb="pokemon.sprites.front_default"
        :path="pokemon.path"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useLoaderStore } from "#imports";
import { typeColors } from "#imports";
import {type ColorTypes} from '~/utils/typeColors';

interface Pokemon {
  name: string;
  path: string;
  id: number;
  types: ColorTypes[];
  sprites: {
    front_default: string;
  };
}
const loader = useLoaderStore();
const pokemons = ref<Pokemon[]>([]);

const limitApi = ref(24);
const mainUrl = ref(
  `https://pokeapi.co/api/v2/pokemon?limit=${limitApi.value}`
);
const nextApiUrl = ref();
async function getPokemons(url: string) {
  loader.setLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    const promises = data.results.map(async (result: any) => {
      const response = await fetch(result.url);
      return await response.json();
    });
    nextApiUrl.value = data.next;
    const pokemonDetails = await Promise.all(promises);
    pokemonDetails.forEach((pokemon: any) => {
      const types = pokemon.types.map((pokemon: any) => pokemon.type.name);
      const colorTypes = types.map((type: string) => {
        const colorType = typeColors.value.find(
          (color: ColorTypes) => color.title === type
        );
        if (colorType) {
          return { color: colorType.color, title: colorType.title };
        }
        return { color: "#000", title: type }; // Default color
      });
      pokemons.value.push({
        name: pokemon.name,
        path: pokemon.name,
        id: pokemon.id,
        types: [...colorTypes],
        sprites: {
          front_default: pokemon.sprites.front_default,
        },
      });
      
    });
  } catch (error) {
    console.error("Error fetching pokemons:", error);
  } finally {
    loader.removeLoading();
  }
}

function handleScroll() {
  let bottomOfWindow =
    document.documentElement.scrollTop + window.innerHeight ===
    document.documentElement.offsetHeight;

  if (bottomOfWindow) {
    limitApi.value += 24;
    getPokemons(nextApiUrl.value);
  }
}

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
onMounted(async () => {
  getPokemons(mainUrl.value);
  window.addEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.grid-card {
  grid-template-columns: repeat(auto-fill, minmax(152px, 1fr));
}
</style>
