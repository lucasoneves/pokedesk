export const useSearchTermStore = defineStore('searchTerm', {
  state: () => ({ searchPokemonName: ''}),
  getters: {
    getSearchTerm: (state) => state.searchPokemonName,
  },
  actions: {
    setSearchTerm(payload: string) {
      this.searchPokemonName = payload
    },
    cleanSearchTerm() {
      this.searchPokemonName = ''
    },
  },
})