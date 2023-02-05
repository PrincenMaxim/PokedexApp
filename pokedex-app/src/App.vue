<template>
  <section>
    <app-menu :allPokemon="allPokemon"></app-menu>
    <div class="router-container">
      <router-view></router-view>
    </div>
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
  font-family: "SF Pro Display";
}

.router-container {
  width: 70%;
  background-color: #EFF0F1;

}

@font-face {
  font-family: "SF Pro Display";
  src: local("SF Pro Display"),
    url("./assets/fonts/sf-pro-text-medium.ttf") format("truetype");
}

section{
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
