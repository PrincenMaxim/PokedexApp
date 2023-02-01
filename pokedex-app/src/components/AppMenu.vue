<template>
  <section>
    <div>Filter & Sort Buttons - C</div>
    <h1>Pokedex</h1>
    <search-bar></search-bar>
    <div>
      <div>Mijn Team - C</div>
      <div>Favorieten - C</div>
    </div>
    <div>Pokemon Lijst - C</div>
  </section>
</template>
<script>
import SearchBar from './menu-components/SearchBar.vue';

export default {
  components: {
    SearchBar
  }
};
</script>
<style>
section {
  background-color: #f9f9f9;
  min-height: 100vh;
}

section h1 {
  position: absolute;
  height: 41px;
  left: 16px;
  right: 835px;
  top: 90px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;

  letter-spacing: 0.374px;
  color: #1f2029;
}
</style>
