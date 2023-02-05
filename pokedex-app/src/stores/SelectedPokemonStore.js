import axios from "axios";
import { defineStore } from "pinia";

export const usePokemonStore = defineStore("PokemonStore", {
  state: () => {
    return {
      selectedPokemon: null,
      allPokemon: null,
      isFetching: false,
    };
  },
  actions: {
    async fetchPokemon() {
      this.isFetching = true;
      if (localStorage.getItem("allPokemon") === null) {
        try {
          const response = await axios.get(
            "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon"
          );
          this.allPokemon = response.data;
          localStorage.setItem("allPokemon", JSON.stringify(this.allPokemon));
          this.isFetching = false;
        } catch (error) {
          console.error(error);
        }
      }
      else {
        this.isFetching = false;
        this.allPokemon = JSON.parse(localStorage.getItem("allPokemon"))
      }
    },
    setSelectedPokemon(pokemon) {
      this.selectedPokemon = pokemon;
    },
    getAllPokemon() {
      return this.allPokemon;
    },
    getPokemonById(id) {
      if (this.allPokemon)
        return this.allPokemon.find((pokemon) => pokemon.id === id);
    },
  },
});
