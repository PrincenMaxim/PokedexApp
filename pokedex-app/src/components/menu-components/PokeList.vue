<template>
  <button @click="listPokemon">list</button>
  <section>
    <card-box v-for="pokemon in allPokemon" :key="pokemon['id']">
      <img :src="pokemon.sprites.front_default" />
      <h3>{{ pokemon.name }}</h3>
      <p>Nr. {{ pokemon.id }}</p>
      <div v-for="type in pokemon.types" :key="type.slot">
        <div>{{ type.type.name }}</div>
      </div>
    </card-box>
  </section>
</template>
<script>
export default {
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
  max-width: 100%;
  top: 40%;
  margin: 0 5% 0 5%;
  max-height: 50%;
  overflow: scroll;
}
</style>
