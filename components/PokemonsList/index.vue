<template>
  <h2 class="hidden sm:block py-10 font-bold">Pokémons</h2>
  <div
    class="grid mt-7 md:mt-0 gap-y-4 gap-x-7 sm:gap-x-3 sm:gap-y-8 grid-card"
  >
    <CardPokemon
      v-for="pokemon in pokemons"
      :path="pokemon.path"
      :key="pokemon.id"
      :pokemon-name="pokemon.name"
      :color-types="pokemon.types.colorTypes"
      :cod="pokemon.id"
      :pokemon-type="pokemon.types.colorTypes"
      :thumb="pokemon.sprites.front_default"
    />
  </div>
  <!-- <pre>{{ pokemons }}</pre> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Pokemon {
  name: string;
  path: string;
  id: number;
  types: {
    colorTypes: {
      color: string,
      title: string
    }
  };
  sprites: {
    front_default: string;
  };
}

type ColorTypes = {
  title: string;
  color: string;
};

const pokemons = ref<Pokemon[]>([]);

const typeColors: Ref<ColorTypes[]> = ref<ColorTypes[]>([
  { title: "fire", color: "#FE0808" },
  { title: "grass", color: "#08FEC3" },
  { title: 'poison', color: "#AF08FE"}
]);

onMounted(async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await response.json();
    const promises = data.results.map(async (result: any) => {
      const response = await fetch(result.url);
      return await response.json();
    });
    const pokemonDetails = await Promise.all(promises);
    pokemons.value = pokemonDetails.map((pokemon: any) => {
      const types = pokemon.types.map((pokemon: any) => pokemon.type.name);
      const colorTypes = types.map((type: string) => {
        const colorType = typeColors.value.find(
          (color: ColorTypes) => color.title === type
        );
        if (colorType) {
          return {color: colorType.color, title: colorType.title};
        }
        return {color: "#000", title: 'colorType'}; // Default color
      });

      return {
        name: pokemon.name,
        path: pokemon.name,
        id: pokemon.id,
        types: { colorTypes },
        sprites: {
          front_default: pokemon.sprites.front_default,
        },
      };
    });
  } catch (error) {
    console.error("Error fetching pokemons:", error);
  }
});
</script>

<style scoped>
.grid-card {
  grid-template-columns: repeat(auto-fill, minmax(152px, 1fr));
}
</style>
