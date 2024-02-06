<template>
  <h2 class="hidden sm:block py-10 font-bold">Pokémons</h2>
  <div
    class="grid mt-7 md:mt-0 gap-y-4 gap-x-7 sm:gap-x-3 sm:gap-y-8 grid-card"
  >
    <CardPokemon
      v-for="pokemon in pokemons"
      :key="pokemon._id"
      :pokemon-name="pokemon.name"
      :cod="pokemon.cod"
      :pokemon-type="pokemon.type"
      :thumb="pokemon.thumb"
    />
  </div>
</template>

<script setup lang="ts">
const pokemons = ref([
{
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
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Charmander",
    thumb:
      "https://i.pinimg.com/736x/9d/73/9f/9d739fe1dbe0a1ca14cc1455284799d3.jpg",
    type: [{ title: "fire", color: "#FE0808" }],
    _id: "cfc55467-a1a5-4429-b1bd-1d641a99f15a",
    cod: 2,
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Squirtle",
    thumb:
      "https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png",
    type: [{ title: "water", color: "#00A3FF" }],
    _id: "67d9dac6-d025-4bbf-b9ff-79c5cf685ae9",
    cod: 4,
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Raichu",
    cod: 26,
    thumb:
      "https://www.pngplay.com/wp-content/uploads/11/Raichu-Pokemon-Background-PNG-Image.png",
    type: [{ title: "eletric", color: "#FFB800" }],
    _id: "a7456202-11d9-4405-b87e-9a80a3de1ccb",
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Sandslash",
    cod: 28,
    thumb:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    type: [{ title: "ground", color: "#85826E" }],
    _id: "98406397-2697-49eb-b4a4-e3f941fc4f24",
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
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
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Charmander",
    thumb:
      "https://i.pinimg.com/736x/9d/73/9f/9d739fe1dbe0a1ca14cc1455284799d3.jpg",
    type: [{ title: "fire", color: "#FE0808" }],
    _id: "cfc55467-a1a5-4429-b1bd-1d641a99f15a",
    cod: 2,
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Squirtle",
    thumb:
      "https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png",
    type: [{ title: "water", color: "#00A3FF" }],
    _id: "67d9dac6-d025-4bbf-b9ff-79c5cf685ae9",
    cod: 4,
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Raichu",
    cod: 26,
    thumb:
      "https://www.pngplay.com/wp-content/uploads/11/Raichu-Pokemon-Background-PNG-Image.png",
    type: [{ title: "eletric", color: "#FFB800" }],
    _id: "a7456202-11d9-4405-b87e-9a80a3de1ccb",
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Sandslash",
    cod: 28,
    thumb:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    type: [{ title: "ground", color: "#85826E" }],
    _id: "98406397-2697-49eb-b4a4-e3f941fc4f24",
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
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
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Charmander",
    thumb:
      "https://i.pinimg.com/736x/9d/73/9f/9d739fe1dbe0a1ca14cc1455284799d3.jpg",
    type: [{ title: "fire", color: "#FE0808" }],
    _id: "cfc55467-a1a5-4429-b1bd-1d641a99f15a",
    cod: 2,
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Squirtle",
    thumb:
      "https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png",
    type: [{ title: "water", color: "#00A3FF" }],
    _id: "67d9dac6-d025-4bbf-b9ff-79c5cf685ae9",
    cod: 4,
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Raichu",
    cod: 26,
    thumb:
      "https://www.pngplay.com/wp-content/uploads/11/Raichu-Pokemon-Background-PNG-Image.png",
    type: [{ title: "eletric", color: "#FFB800" }],
    _id: "a7456202-11d9-4405-b87e-9a80a3de1ccb",
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Sandslash",
    cod: 28,
    thumb:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    type: [{ title: "ground", color: "#85826E" }],
    _id: "98406397-2697-49eb-b4a4-e3f941fc4f24",
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
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
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Charmander",
    thumb:
      "https://i.pinimg.com/736x/9d/73/9f/9d739fe1dbe0a1ca14cc1455284799d3.jpg",
    type: [{ title: "fire", color: "#FE0808" }],
    _id: "cfc55467-a1a5-4429-b1bd-1d641a99f15a",
    cod: 2,
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Squirtle",
    thumb:
      "https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png",
    type: [{ title: "water", color: "#00A3FF" }],
    _id: "67d9dac6-d025-4bbf-b9ff-79c5cf685ae9",
    cod: 4,
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Raichu",
    cod: 26,
    thumb:
      "https://www.pngplay.com/wp-content/uploads/11/Raichu-Pokemon-Background-PNG-Image.png",
    type: [{ title: "eletric", color: "#FFB800" }],
    _id: "a7456202-11d9-4405-b87e-9a80a3de1ccb",
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  {
    name: "Sandslash",
    cod: 28,
    thumb:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    type: [{ title: "ground", color: "#85826E" }],
    _id: "98406397-2697-49eb-b4a4-e3f941fc4f24",
    skills: [
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
      {
        title: "Decreases all direct damage taken by friendly Pokémon to 0.75×",
      },
    ],
  },
  
]);
</script>

<style scoped>
.grid-card {
  grid-template-columns: repeat(auto-fill, minmax(152px, 1fr));
}
</style>
