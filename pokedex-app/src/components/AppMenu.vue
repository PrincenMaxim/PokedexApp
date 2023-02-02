<template>
  <section class="menu-section">
    <!-- <div>Filter & Sort Buttons - C</div> -->
    <h1>Pokedex</h1>
    <search-bar></search-bar>
    <div class="pokebutton-container">
      <poke-button :colorFrom="'#46469C'" :colorTo="'#7E32E0'" :pokemons="0">
        <template #title> Mijn team </template></poke-button>
      <poke-button :colorFrom="'#65CB9A'" :colorTo="'#15D0DC'" :pokemons="0">
        <template #title> Favorieten </template>
      </poke-button>
    </div>
    <poke-list :allPokemon="allPokemon"></poke-list>
  </section>
</template>
<script>
import SearchBar from "./menu-components/SearchBar.vue";
import PokeButton from "./menu-components/PokeButton.vue";
import PokeList from './menu-components/PokeList.vue';

export default {
  components: {
    SearchBar,
    PokeButton,
    PokeList,
  },
  props: {
    allPokemon: Array,
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
  font-style: normal;
  font-weight: 700;
  font-size: 2vw;
  top: 12%;
  left: 5%;
  letter-spacing: 0.01vw;
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

p {
  font-weight: 100;
  font-size: 15px;
  letter-spacing: 0.01vw;
}

h2 {
  font-weight: 700;
}

.white-text {
  color: #ffffff;
}

.greyed-text {
  color: rgba(255, 255, 255, 0.5);
}
</style>
