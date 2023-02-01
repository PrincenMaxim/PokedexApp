<template>
  <app-menu></app-menu>
</template>

<script>
import AppMenu from './components/AppMenu.vue'

export default {
  name: "App",
  components: {
    AppMenu,
  },
};
</script>

<style>
html, body {
  height: 100vh;
  padding: 0;
  margin: 0;
}

@font-face {
  font-family: "SF Pro Display";
  src: local("SF Pro Display"),
   url('./assets/fonts/sf-pro-text-medium.ttf') format("truetype");
}
</style>
