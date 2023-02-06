<template>
  <section class="menu-section">
    <!-- <div>Filter & Sort Buttons - C</div> -->
    <h1>Pokedex</h1>
    <search-bar></search-bar>
    <div class="pokebutton-container">
      <poke-button :colorFrom="'#46469C'" :colorTo="'#7E32E0'" :pokemons="this.teamPokemon.length" @click="changeList('team')">
        <template #title> Mijn team </template></poke-button>
      <poke-button :colorFrom="'#65CB9A'" :colorTo="'#15D0DC'" :pokemons="this.favoritePokemon.length" @click="changeList('favorite')">
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

export default {
  components: {
    SearchBar,
    PokeButton,
    PokeList,
  },
  data() {
    return {
      pokemonStore: usePokemonStore(),
      showList: 'all'
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
    }
  },
  
  props: {
    allPokemon: Array,
    favoritePokemon: Array,
    teamPokemon: Array
  },
  computed: {
    listToShow(){
      if(this.showList === 'favorite'){
        return this.favoritePokemon;
      }
      else if(this.showList === 'team'){
        //add team prop
        return this.teamPokemon;
      }
      else {
        return this.allPokemon;
      }
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


</style>
