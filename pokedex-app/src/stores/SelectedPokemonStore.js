import { defineStore } from "pinia";
import { fetchPokemon, fetchPokemonDetails } from '../services/PokemonService'

export const usePokemonStore = defineStore("PokemonStore", {
  state: () => {
    return {
      selectedPokemon: null,
      selectedPokemonDetails: null,
      allPokemon: null,
      isFetching: false,
      isFetchingDetails: false,
    };
  },
  actions: {
    async fetchPokemon() {
      this.isFetching = true;
      if (localStorage.getItem("allPokemon") === null) {
        try {
          this.allPokemon = await fetchPokemon();
          localStorage.setItem("allPokemon", JSON.stringify(this.allPokemon));
          this.isFetching = false;
        } catch (error) {
          console.error(error);
        }
      } else {
        this.isFetching = false;
        this.allPokemon = JSON.parse(localStorage.getItem("allPokemon"));
      }
    },
    async fetchPokemonDetails() {
      this.isFetchingDetails = true;
      try {
        this.selectedPokemonDetails = await fetchPokemonDetails(
          this.selectedPokemon["id"]
        );
        localStorage.setItem(
          "selectedPokemonDetails",
          JSON.stringify(this.selectedPokemonDetails)
        );
        this.isFetchingDetails = false;
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
    getSelectedPokemonDetails() {
      return this.selectedPokemonDetails;
    },
    getPokemonById(id) {
      if (this.allPokemon)
        return this.allPokemon.find((pokemon) => pokemon.id === id);
    },
  },
});
