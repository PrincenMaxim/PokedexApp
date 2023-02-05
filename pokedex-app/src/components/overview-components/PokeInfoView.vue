<template>
  <section>
    <div
      v-if="!pokemonStore.isFetching && selectedPokemon"
      :style="{ backgroundColor: styleColor }"
      class="pokeinfo-container">
      <h1>{{ selectedPokemon["name"] }}</h1>
    </div>
  </section>
</template>

<script>
import { usePokemonStore } from "@/stores/SelectedPokemonStore";
import { typeColor } from "@/typeColor.js";

export default {
  data() {
    return {
      pokemonStore: usePokemonStore(),
      selectedPokemon: null,
      isFetching: true,
      primaryType: null,
    };
  },

  method: {},
  watch: {
    $route() {
      this.selectedPokemon = this.pokemonStore.getPokemonById(
        parseInt(this.$route.params.pokeid)
      );
      this.primaryType = this.selectedPokemon.types[0].type.name;
    },
    isFetching() {
      if (this.isFetching == false) {
        this.selectedPokemon = this.pokemonStore.getPokemonById(
          parseInt(this.$route.params.pokeid)
        );
        this.primaryType = this.selectedPokemon.types[0].type.name;
      }
    },
  },
  computed: {
    styleColor() {
      let color = typeColor(this.primaryType);
      return color;
    },
  },
  created() {
    this.isFetching = this.pokemonStore.isFetching;
  },
};
</script>

<style scoped>
section {
  height: 100%;
  width: 100%;
}
.pokeinfo-container {
  filter: brightness(110%);
  filter: opacity(90%);
  height: 100%;
  width: 100%;
}

h1 {
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 3vw;
  letter-spacing: 0.01vw;
}
</style>
