<template>
  <section class="menu-section">
    <div class="sort-icon-container" @click="toggleSortingStyle">
      <font-awesome-icon v-if="sortingStyle === 'numeric'" :icon="['fas', 'arrow-down-1-9']" style="font-size: 1.5vw;"></font-awesome-icon>
      <font-awesome-icon v-if="sortingStyle === 'alphabetical'" :icon="['fas', 'arrow-down-a-z']"  style="font-size: 1.5vw;"></font-awesome-icon>

    </div>
    <h1>Pokedex</h1>
    <search-bar @input-changed="updatePokemon"></search-bar>
    <div class="pokebutton-container">
      <poke-button :colorFrom="'#46469C'" :colorTo="'#7E32E0'" :isActive="showList === 'team'" :pokemons="this.teamPokemon.length" @click="changeList('team')">
        <template #title> Mijn team </template></poke-button>
      <poke-button :colorFrom="'#65CB9A'" :colorTo="'#15D0DC'" :isActive="showList === 'favorite'" :pokemons="this.favoritePokemon.length" @click="changeList('favorite')">
        <template #title> Favorieten </template>
      </poke-button>
    </div>
    <poke-list :allPokemon="listToShow"></poke-list>
  </section>
</template>
<script>
import SearchBar from "./menu-components/SearchBar.vue";
import PokeButton from "./menu-components/PokeButton.vue";
import PokeList from './menu-components/PokeList.vue';
import { usePokemonStore } from '@/stores/SelectedPokemonStore';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowDown)



export default {
  components: {
    SearchBar,
    PokeButton,
    PokeList,
    FontAwesomeIcon
  },
  data() {
    return {
      pokemonStore: usePokemonStore(),
      showList: 'all',
      searchString: '',
      sortingStyle: 'numeric'
    }
  },
  methods: {
    changeList(to){
      if(this.showList === to){
        this.showList = 'all';
      }
      else {
        this.showList = to;
      }
    },
    updatePokemon(searchString){
      this.searchString = searchString;
    },
    toggleSortingStyle(){
      if(this.sortingStyle === 'numeric'){
        this.sortingStyle = 'alphabetical';
      }
      else this.sortingStyle = 'numeric';
    }
  },
  
  props: {
    allPokemon: Array,
    favoritePokemon: Array,
    teamPokemon: Array
  },
  computed: {
    listToShow(){
      const searchString = this.searchString;
      let pokemonList = [];
      if(this.showList === 'favorite'){
        pokemonList = this.favoritePokemon;
      }
      else if(this.showList === 'team'){
        pokemonList = this.teamPokemon;
      }
      else {
        pokemonList = this.allPokemon;
      }
      const tempPokemonList = this.pokemonStore.searchPokemon(searchString, pokemonList);
      const finalPokemonList = this.pokemonStore.sortPokemon(tempPokemonList, this.sortingStyle);
      return finalPokemonList;
    }
  }

};
</script>
<style>
section .menu-section {
  font-family: "SF Pro Display";
  letter-spacing: -0.408px;
  background-color: #f9f9f9;
  height: 100vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  position: relative;
}

section h1 {
  position: absolute;
  margin: 0 0 0 1%;
  top: 12%;
  left: 5%;
  color: #1f2029;
}

.pokebutton-container {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  max-width: 100%;
  top: 30%;
  margin: 0 5% 0 5%;
}

.sort-icon-container{
  top: 2%;
  right: 4%;
  position: absolute;
  cursor: pointer;
}

.fa-arrow-down-1-9 {
  color: #1F2029;
}


</style>
