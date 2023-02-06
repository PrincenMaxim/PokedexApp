<template>
  <section>
    <h1>EVOLUTIE</h1>
    <div class="evolutions-container" v-if="pokemonChain">
        <poke-card v-for="pokemon in pokemonChain" :key="pokemon.id" :pokemon="pokemon"></poke-card>
    </div>
  </section>
</template>

<script>
import PokeCard from '../../global-components/PokeCard.vue'
export default {
  components: { PokeCard },
    props: {
        pokemonChain: Array
    },
    mounted(){
        
    },
}
</script>

<style scoped>
section {
  position: absolute;
  top: 55%;
  height: 10%;
}
h1 {
  font-size: 1vw;
  color: #ffffff;
  position: absolute;
  top: 5%;
  left: 0;
}

.evolutions-container {
  top: 10%;
  height: 10%;
  position: absolute;
  width: 100%;
}
</style>
