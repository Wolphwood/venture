import { defineStore } from "pinia";

export const useVentureStore = defineStore("venture", {
  state: () => ({
    venture: {
      name: "",
      authors: [],
      situations: [],
    },
  }),
  actions: {
    setName(name) {
      this.venture.name = name;
    },
    addSituation(situation) {
      this.venture.situations.push(situation);
    },
    deleteSituation(id) {
      this.venture.situations = this.venture.situations.filter(
        (situation) => situation.id !== id
      );
    },
  },
  getters: {
    situationCount: (state) => state.venture.situations.length,
  },
});
