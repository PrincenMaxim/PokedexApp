<template>
  <section>
    <poke-card v-for="pokemon in allPokemon" :key="pokemon['id']" :pokemon="pokemon" @click="pokecardClick(pokemon)"></poke-card>
  </section>
</template>
<script>
import PokeCard from './PokeCard.vue';
import { usePokemonStore } from '@/stores/SelectedPokemonStore';

export default {
  components: { PokeCard },
  emits: ['pokecard-clicked'],
  data() {
    return{
      pokemonStore: usePokemonStore()
    }
  },
  props: {
    allPokemon: Array,
  },
  watch: {},
  methods: {
    listPokemon() {
      this.allPokemon.forEach((pokemon) => {
        console.log(pokemon);
      });
    },
    pokecardClick(pokemon) {
      this.$router.push({path: '/pokeinfo/' + pokemon['id']});
    }
  },
  mounted() {},
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
