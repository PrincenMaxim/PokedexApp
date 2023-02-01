<template>
  <section>
    <!-- <div>Filter & Sort Buttons - C</div> -->
    <h1>Pokedex</h1>
    <search-bar></search-bar>
    <div class="pokebutton-container">
      <poke-button :colorFrom="'#46469C'" :colorTo="'#7E32E0'" :pokemons="0">
        <template #title>
          Mijn team
        </template></poke-button>
      <poke-button :colorFrom="'#65CB9A'" :colorTo="'#15D0DC'" :pokemons="0">
        <template #title>
          Favorieten
        </template>
      </poke-button>
    </div>
  </section>
</template>
<script>
import SearchBar from './menu-components/SearchBar.vue';
import PokeButton from './menu-components/PokeButton.vue';

export default {
  components: {
    SearchBar,
    PokeButton,
  }
};
</script>
<style>
section {
  font-family: "SF Pro Display";
  letter-spacing: -0.408px;
  background-color: #f9f9f9;
  height: 100vh;
  max-width: 20.5%;
}

section h1 {
  position: absolute;
  height: 41px;
  left: 16px;
  right: 835px;
  top: 65px;
  
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;

  letter-spacing: 0.374px;
  color: #1f2029;
}

.pokebutton-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: auto;
  top: 200px;
  position: relative;
  width: 100%;
}

p {
  font-weight: 100;
  font-size: 15px;
}

h2 {
  font-weight: 700;
}

.white-text{
  color: #FFFFFF;
}



.greyed-text{
  color: rgba(255, 255, 255, 0.5);
}
</style>
