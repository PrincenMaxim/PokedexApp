<template>
  <section>
    <div
      v-if="!pokemonStore.isFetching && selectedPokemon"
      :style="{ backgroundColor: styleColor }"
      class="pokeinfo-container"
    >
      <h1>{{ selectedPokemon["name"] }}</h1>
      <div class="left-info-container" v-if="selectedPokemonDetails">
        <poke-info
          :images="selectedPokemon.sprites"
          :id="selectedPokemonDetails.id"
          :types="selectedPokemonDetails.types"
          :height="selectedPokemonDetails.height"
          :weight="selectedPokemonDetails.weight"
        ></poke-info>
      </div>
      <div class="right-info-container" v-if="selectedPokemonDetails">
        <poke-statistics :statistics="selectedStatistics"></poke-statistics>
        <poke-evolutions v-if="chainPokemonInfo" :pokemonChain="chainPokemonInfo"></poke-evolutions>
      </div>
    </div>
  </section>
</template>

<script>
import { usePokemonStore } from "@/stores/SelectedPokemonStore";
import { typeColor } from "@/typeColor.js";
import PokeInfo from "./pokeinfo-components/PokeInfo.vue";
import PokeStatistics from "./pokeinfo-components/PokeStatistics.vue";
import PokeEvolutions from "./pokeinfo-components/PokeEvolutions.vue";

export default {
  components: { PokeInfo, PokeStatistics, PokeEvolutions },
  data() {
    return {
      pokemonStore: usePokemonStore(),
      selectedPokemon: null,
      selectedPokemonDetails: null,
      selectedEvolutionChain: null,
      isFetching: true,
      isFetchingDetails: true,
      primaryType: null,
      selectedStatistics: null,
      chainPokemonInfo: null,
    };
  },

  methods: {
    loadData() {
      this.selectedPokemon = this.pokemonStore.getPokemonById(
        parseInt(this.$route.params.pokeid)
      );
      this.primaryType = this.selectedPokemon.types[0].type.name;
      this.pokemonStore.selectedPokemon = this.selectedPokemon;
      this.pokemonStore.fetchPokemonDetails().then(() => {
        this.selectedPokemonDetails =
          this.pokemonStore.getSelectedPokemonDetails();
        this.setStatistics();
      });
      this.pokemonStore
        .fetchPokemonSpecies()
        .then(() => {
          this.pokemonStore
            .fetchPokemonEvolutionChain()         
            .then(() => {
              this.selectedEvolutionChain =
                this.pokemonStore.getSelectedEvolutionChain();
                this.parseEvolutionChain();
            });
        });
    },
    setStatistics() {
      let tempStatistics = [
        { name: "HP", value: null, id: "hp" },
        { name: "Attack", value: null, id: "attack" },
        { name: "Defense", value: null, id: "defense" },
        { name: "Sp. Attack", value: null, id: "special-attack" },
        { name: "Sp. Defense", value: null, id: "special-defense" },
        { name: "Speed", value: null, id: "speed" },
      ];
      let selectedStatistics = this.selectedPokemonDetails.stats;
      selectedStatistics.forEach((stat) => {
        let tempStat = tempStatistics.find(
          (tempStat) => tempStat.id === stat.stat.name
        );
        if (tempStat) {
          tempStat.value = stat.base_stat;
        }
      });
      this.selectedStatistics = tempStatistics;
    },
    parseEvolutionChain(){
      let tempEvolutions = [this.selectedEvolutionChain.chain.species];
      if(this.selectedEvolutionChain.chain.evolves_to){
        this.getEvolutions(this.selectedEvolutionChain.chain.evolves_to, tempEvolutions)
      }
      
      let tempArray = [];
      tempEvolutions.forEach(evo => {
        const speciesURL = evo.url;
        const substrings = speciesURL.split('/')
        substrings.pop();
        const id = substrings.pop();
        const pokemon = this.pokemonStore.getPokemonById(parseInt(id));
        if(pokemon){
          tempArray.push(pokemon)
        }
        
      })
      this.chainPokemonInfo = tempArray;
    },
    getEvolutions(evolution, allEvolutions){
      allEvolutions.push(evolution['0'].species);
      if(evolution['0'].evolves_to.length > 0){
        console.log(evolution['0'].evolves_to)
        this.getEvolutions(evolution['0'].evolves_to, allEvolutions);
      }
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
  height: 100vh;
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

img {
  widows: 2px;
}

.left-info-container {
  height: 60%;
  width: 40%;
  top: 20%;
  left: 5%;
  bottom: 30%;
  position: absolute;
}

.right-info-container {
  height: 85%;
  width: 40%;
  top: 10%;
  right: 5%;
  bottom: 20%;
  position: absolute;
}

h1 {
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 3vw;
  letter-spacing: 0.01vw;
  top: 10%;
}
</style>
