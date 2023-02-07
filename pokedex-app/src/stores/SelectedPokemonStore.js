import { defineStore } from "pinia";
import { fetchPokemon, fetchPokemonDetails, fetchPokemonSpecies, fetchPokemonEvolutionChain } from '../services/PokemonService'

export const usePokemonStore = defineStore("PokemonStore", {
  state: () => {
    return {
      selectedPokemon: null,
      selectedPokemonDetails: null,
      selectedSpecies: null,
      selectedEvolutionChain: null,
      allPokemon: null,
      isFetching: false,
      isFetchingDetails: false,
      isFetchingSpecies: false,
      isFetchingEvoluton: false,
      favoritePokemon: [],
      teamPokemon: []
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
    async fetchPokemonSpecies() {
      this.isFetchingSpecies = true;
      try {
        this.selectedSpecies = await fetchPokemonSpecies(
          this.selectedPokemon["id"]
        );
        localStorage.setItem(
          "selectedSpecies",
          JSON.stringify(this.selectedSpecies)
        );
        this.isFetchingSpecies = false;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchPokemonEvolutionChain() {
      this.isFetchingDetails = true;
      try {
        this.selectedEvolutionChain = await fetchPokemonEvolutionChain(
          this.getSelectedSpecies()['evolution_chain'].url
        );
        localStorage.setItem(
          "selectedEvolutionChain",
          JSON.stringify(this.selectedEvolutionChain)
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
    getSelectedSpecies(){
      return this.selectedSpecies;
    },
    getSelectedEvolutionChain(){
      return this.selectedEvolutionChain;
    },
    getPokemonById(id) {
      if (this.allPokemon)
        return this.allPokemon.find((pokemon) => pokemon.id === id);
    },
    addToFavorites(pokemon) {
      this.favoritePokemon.push(pokemon);
      this.updateFavoritePokemon();
    },
    removeFromFavorites(pokemon) {
      const index = this.favoritePokemon.findIndex(p => p.id === pokemon.id);
       if (index !== -1) {
        this.favoritePokemon.splice(index, 1);
       } 
       this.updateFavoritePokemon();
    },
    getFavoritePokemon() {
      return this.favoritePokemon;
    },
    updateFavoritePokemon(){
      localStorage.setItem(
        "favoritePokemon",
        JSON.stringify(this.favoritePokemon)
      );
    },
    initiateFavoritePokemon(){
      if (localStorage.getItem("favoritePokemon") !== null){
        this.favoritePokemon = JSON.parse(localStorage.getItem("favoritePokemon"));
      }
    },
    isPokemonFavorite(pokemon) {
      return this.favoritePokemon.some(p => p.id === pokemon.id);
    },
    addToTeam(pokemon) {
      this.teamPokemon.push(pokemon);
      this.updateTeamPokemon();
    },
    removeFromTeam(pokemon) {
      const index = this.teamPokemon.findIndex(p => p.id === pokemon.id);
       if (index !== -1) {
        this.teamPokemon.splice(index, 1);
       } 
       this.updateTeamPokemon();
    },
    getTeamPokemon() {
      return this.teamPokemon;
    },
    updateTeamPokemon(){
      localStorage.setItem(
        "teamPokemon",
        JSON.stringify(this.teamPokemon)
      );
    },
    initiateTeamPokemon(){
      if (localStorage.getItem("teamPokemon") !== null){
        this.teamPokemon = JSON.parse(localStorage.getItem("teamPokemon"));
      }
    },
    isPokemonTeam(pokemon) {
      return this.teamPokemon.some(p => p.id === pokemon.id);
    },
    searchPokemon(input, pokemonArray){
      let result = null;
      if(pokemonArray.length > 0){
        result = pokemonArray.filter(pokemon => pokemon.name.includes(input));
      }
      else 
        result = pokemonArray
      return result;
    }
  },
});
