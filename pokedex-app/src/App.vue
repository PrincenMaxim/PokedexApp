<template>
  <section>
    <app-menu v-if="allPokemon" :allPokemon="allPokemon"></app-menu>
    <div class="router-container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import AppMenu from "./components/AppMenu.vue";
import { usePokemonStore } from "./stores/SelectedPokemonStore";

export default {
  name: "App",
  components: {
    AppMenu,
  },
  data() {
    return {
      allPokemon: [],
      pokemonStore: usePokemonStore(),
    };
  },
  mounted() {
    this.pokemonStore.fetchPokemon().then(() => {
      this.allPokemon = this.pokemonStore.getAllPokemon();
    });
  },
};
</script>
<style>
html,
body {
  height: 100vh;
  padding: 0;
  margin: 0;
  font-family: "SF Pro Display";
  overflow: hidden;
}

.router-container {
  width: 70%;
  background-color: #eff0f1;
}

@font-face {
  font-family: "SF Pro Display";
  src: local("SF Pro Display"),
    url("./assets/fonts/sf-pro-text-medium.ttf") format("truetype");
}

section {
  display: flex;
  flex-direction: row;
}

p {
  font-weight: 100;
  font-size: 1vw;
  letter-spacing: 0.01vw;
}

h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 2vw;
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
