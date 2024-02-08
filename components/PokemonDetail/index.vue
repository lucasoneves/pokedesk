import type { Loading } from '#build/components';
<template>
  <div class="container-md mt-7 ml-auto mr-auto">
    <CardPokemon
      v-if="pokemon.name.length"
      :pokemon-name="pokemon.name"
      :cod="pokemon.id"
      :pokemon-types="colorTypesPokemon"
      :thumb="pokemon.sprites.front_shiny"
    />
    <Card class="mt-7 max-h-full">
      <div v-if="pokemon.effects" class="w-full">
        <h3 class="font-bold mb-3 text-center">Habilidades:</h3>
        <div
          v-for="effect in pokemon.effects.effect_entries"
          class="py-3 border-t last:pb-0 w-full"
          data-v-inspector="components/PokemonDetail/index.vue:13:7"
        >
          <span class="text-xs text-[#616161]">{{ effect.effect }}</span>
        </div>
        <div
          v-for="effect in pokemon.effects.flavor_text_entries"
          class="py-3 border-t last:pb-0 w-full"
        >
          <span class="text-xs text-[#616161]">{{ effect.flavor_text }}</span>
        </div>
      </div>
      <span v-else>{{ pokemonFeedback }}</span>
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
import { useLoaderStore } from "#imports";
import { typeColors } from "#imports";
import { type ColorTypes } from "#imports";

type PokemonType = {
  name: string;
  sprites: {
    front_shiny: string;
  };
  id: number;
  types: { type: { name: string; url: string } }[];
  effects: {
    effect_entries: {
      effect: string;
    }[];
    flavor_text_entries: {
      flavor_text: string;
    }[];
  };
};

const loader = useLoaderStore();
const route = useRoute();
const pokemon = ref<PokemonType>({
  name: "",
  sprites: { front_shiny: "" },
  id: 0,
  effects: {
    effect_entries: [{ effect: "" }],
    flavor_text_entries: [{ flavor_text: "" }],
  },
  types: [{ type: { name: "", url: "" } }],
});

const pokemonFeedback = ref("");

onMounted(() => {
  getPokemonDetail();
});

const colorTypesPokemon: ComputedRef<ColorTypes[] | undefined> = computed(() => {
  const types: ColorTypes[] = pokemon.value.types.map((type) => {
    const color = typeColors.value.find((color) => color.title === type.type.name);
    if (color) {
      return color;
    } else {
      return { title: type.type.name, color: 'black' };
    }
  });

  console.log("Types", types);

  return types.length > 0 ? types : undefined;
});

async function getPokemonDetail() {
  loader.setLoading();
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );
    const data = await response.json();
    const { effects, types, id, name, sprites } = data;
    pokemon.value = { effects, types, id, name, sprites };
    await getPokemonEffects();
  } catch (error) {
    console.error(error);
  } finally {
    loader.removeLoading();
  }
}
async function getPokemonEffects() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/contest-effect/${pokemon.value.id}/`
    );
    if (response.status === 200) {
      const data = await response.json();
      pokemon.value.effects = data;
    }

    if (response.status === 404) {
      pokemonFeedback.value = "Pokemon effects not found";
    }
  } catch (error) {
    console.error("Error API", error);
  }
}
</script>

<style scoped></style>
