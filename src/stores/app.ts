import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    verbose: false
  }),
  actions: {
    setVerbose(verbose) {
      this.verbose = verbose;
    }
  },
  getters: {
    isVerbose: (state) => state.verbose
  }
})
