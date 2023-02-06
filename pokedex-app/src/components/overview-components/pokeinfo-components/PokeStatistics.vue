<template>
  <section>
    <h1>STATISTIEKEN</h1>
    <div class="statistics-container">
      <card-box>
        <div class="content">
          <div
            v-for="statistic in statistics"
            :key="statistic.id"
            class="stat-container"
          >
            <p>{{ statistic.name }}</p>
            
            <div class="stat-bar-container">
                <p>{{ statistic.value }}</p>
              <poke-stat-bar :statValue="statistic.value"></poke-stat-bar>
            </div>
          </div>
        </div>
      </card-box>
    </div>
  </section>
</template>

<script>
import CardBox from "../../global-components/CardBox.vue";
import PokeStatBar from "./pokestatistics-components/PokeStatBar.vue";
export default {
  components: { CardBox, PokeStatBar },
  data() {
    return {};
  },
  props: {
    statistics: Array,
  },
};
</script>

<style scoped>
section {
  position: absolute;
  top: 10%;
}
p {
  color: black;
    display: inline;
    line-height: 0;
    margin-top: 0;
}


h1 {
  font-size: 1vw;
  color: #ffffff;
  position: absolute;
  top: -5%;
  left: 0;
}

.statistics-container {
  top: 0%;
  height: 40%;
  position: absolute;
  width: 100%;
}

.content {
  padding: 5%;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: start;
  
}

.stat-bar-container {
  width: 70%;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 10%;
  
}

.stat-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 25%;
  text-align: start;
}
</style>
