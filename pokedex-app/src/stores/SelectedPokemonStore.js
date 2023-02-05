import axios from "axios";
import { defineStore } from "pinia";

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
          const response = await axios.get(
            "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon"
          );
          this.allPokemon = response.data;
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
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + this.selectedPokemon["id"]
        );
        this.selectedPokemonDetails = response.data;
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
