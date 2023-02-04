<template>
  <section>
    <poke-card v-for="pokemon in allPokemon" :key="pokemon['id']" :pokemon="pokemon"></poke-card>
  </section>
</template>
<script>
import PokeCard from './PokeCard.vue';

export default {
  components: { PokeCard },
  
  data() {
    return {};
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
