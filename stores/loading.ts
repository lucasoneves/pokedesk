export const useLoaderStore = defineStore('loader', {
  state: () => ({ loading: true}),
  getters: {
    getLoader: (state) => state.loading,
  },
  actions: {
    setLoading() {
      this.loading = true
    },
    removeLoading() {
      this.loading = false
    },
  },
})