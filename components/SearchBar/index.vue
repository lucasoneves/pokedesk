<template>
  <label for="search-field" class="h-full relative">
    <img
      src="~/assets/images/icon-search.svg"
      alt="magnifying glass"
      class="visible sm:hidden absolute top-0 bottom-0 m-auto h-5 left-3"
    />
    <form action="" @submit="handleSubmit">
      <input
        @change="handleSearchText"
        id="search-field"
        type="search"
        placeholder="Pesquise por um nome ou código"
        class="text-lg sm:text-sm border py-2 px-9 sm:py-3 sm:px-10 rounded-full bg-white w-full"
      />
    </form>
  </label>
</template>

<script setup lang="ts">
import type { PropType, InjectionKey, Ref } from 'vue';
import { provide, ref } from 'vue';
import { useSearchTermStore } from '#imports';

const key: InjectionKey<Ref<string>> = Symbol();

defineProps({
  handleSubmit: {
    type: Function as PropType<(event: Event) => void>,
    required: false
  }
});

const searchTerm = ref<string>('');

function handleSearchText(event: Event) {
  event.preventDefault();
  const text = (event.target as HTMLInputElement).value;
  useSearchTermStore().setSearchTerm(text);
}
</script>

<style scoped></style>
