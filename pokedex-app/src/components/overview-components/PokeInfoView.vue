<template>
  <section>
    <div
      v-if="!pokemonStore.isFetching && selectedPokemon"
      :style="{ backgroundColor: styleColor }"
      class="pokeinfo-container">
      <h1>{{ selectedPokemon["name"] }}</h1>
      <div class="left-info-container">
        <img :src="selectedPokemon.sprites.front_default"/>
        <poke-info :id="selectedPokemonDetails.id" :types="selectedPokemonDetails.types" :height="selectedPokemonDetails.height" :weight="selectedPokemonDetails.weight"></poke-info>
      </div>
    </div>
  </section>
</template>

<script>
import { usePokemonStore } from "@/stores/SelectedPokemonStore";
import { typeColor } from "@/typeColor.js";
import PokeInfo from './pokeinfo-components/PokeInfo.vue';

export default {
  components: { PokeInfo },
  data() {
    return {
      pokemonStore: usePokemonStore(),
      selectedPokemon: null,
      selectedPokemonDetails: null,
      isFetching: true,
      isFetchingDetails: true,
      primaryType: null,
    };
  },

  methods: {
    loadData(){
        this.selectedPokemon = this.pokemonStore.getPokemonById(
        parseInt(this.$route.params.pokeid)
        
      );
      this.primaryType = this.selectedPokemon.types[0].type.name;
      this.pokemonStore.selectedPokemon = this.selectedPokemon;
      console.log(this.pokemonStore.selectedPokemon)
      this.pokemonStore.fetchPokemonDetails().then(
        () => {
            this.selectedPokemonDetails = this.pokemonStore.getSelectedPokemonDetails();
        }
      )
      console.log(this.selectedPokemonDetails)
    }
  },
  watch: {
    $route() {
        this.loadData();
    },
    isFetching() {
      if (this.isFetching == false) {
        this.loadData();
      }
    },
    isFetchingDetails() {
        if (this.isFetchingDetails == false) {
        this.loadData();
      }
    }
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
  display: flex;
  flex-direction: row;
  
}

img{
    width: 100%;
}

.left-info-container{
    height: 80%;
    width: 40%;
    margin: 15% 5% 5% 10%
}

h1 {
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 3vw;
  letter-spacing: 0.01vw;
}
</style>
