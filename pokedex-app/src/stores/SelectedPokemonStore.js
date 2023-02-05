import axios from "axios";
import { defineStore } from "pinia";

export const usePokemonStore = defineStore("PokemonStore", {
  state: () => {
    return {
      selectedPokemon: null,
      allPokemon: null,
    };
  },
  actions: {
    async fetchPokemon() {
      try {
        const response = await axios.get(
          "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon"
        );
        this.allPokemon = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    setSelectedPokemon(pokemon) {
      this.selectedPokemon = pokemon;
    },
    getAllPokemon() {
      return this.allPokemon;
    },
    getPokemonById(id) {
      return this.allPokemon.find((pokemon) => pokemon.id === id)
    },
  },
});
