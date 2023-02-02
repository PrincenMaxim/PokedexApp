<template>
  <section>
    <app-menu :allPokemon="allPokemon"></app-menu>
  </section>
</template>

<script>
import AppMenu from "./components/AppMenu.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    AppMenu,
  },
  data() {
    return {
      allPokemon: []
    };
  },

  mounted() {
    axios
      .get("https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon")
      .then((result) => {
        result.data.forEach(element => {
          this.allPokemon.push(element);
        });
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
}

@font-face {
  font-family: "SF Pro Display";
  src: local("SF Pro Display"),
    url("./assets/fonts/sf-pro-text-medium.ttf") format("truetype");
}
</style>
