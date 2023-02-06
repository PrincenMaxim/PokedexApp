<template>
  <section v-if="!pokemonStore.isFetching">
    <poke-card v-for="pokemon in allPokemon" :key="pokemon['id']" :pokemon="pokemon"></poke-card>
  </section>
  <section v-else>
    <div class="loading-indicator">
      <h2>Loading data...</h2>
    </div>
  </section>
</template>
<script>
import PokeCard from '../global-components/PokeCard.vue';
import { usePokemonStore } from '@/stores/SelectedPokemonStore';

export default {
  components: { PokeCard },
  emits: ['pokecard-clicked'],
  data() {
    return{
      pokemonStore: usePokemonStore(),
      
    }
  },
  props: {
    allPokemon: Array,
  },
  watch: {},
  
  mounted() {
    
  },
};
</script>
<style scoped>
section {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 90%;
  top: 40%;
  margin: 0 5% 0 5%;
  max-height: 50%;
  overflow: scroll;

}


section::-webkit-scrollbar {
  width: 0%;
}
</style>
