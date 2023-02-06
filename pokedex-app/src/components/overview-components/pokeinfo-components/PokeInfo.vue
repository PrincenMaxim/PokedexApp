<template>
  <section>
    <img :src="images.front_default" />
    <h1>INFO</h1>
    <div class="info-container">
      <card-box>
        <div class="content">
          <div class="row">
            <p class="parameter-name">Type</p>
            <div class="poke-types">
              <poke-type
                v-for="type of types"
                :key="type.slot"
                :type="type.type.name"
              ></poke-type>
            </div>
          </div>
          <div class="row">
            <p class="parameter-name">Nummer</p>
            <p class="parameter-value">{{ transformedId }}</p>
          </div>
          <div class="row">
            <p class="parameter-name">Gewicht</p>
            <p class="parameter-value">{{ transformedWeight }} kg</p>
          </div>
          <div class="row">
            <p class="parameter-name">Hoogte</p>
            <p class="parameter-value">{{ transformedHeight }}m</p>
          </div>
        </div>
      </card-box>
    </div>
  </section>
</template>
<script>
import CardBox from "@/components/global-components/CardBox.vue";
import PokeType from "@/components/global-components/PokeType.vue";
export default {
  components: { CardBox, PokeType },
  props: {
    images: Array,
    types: Array,
    id: Number,
    weight: Number,
    height: Number,
  },
  computed: {
    transformedId() {
      const id = this.id;
      if (id < 10) {
        return "00" + id;
      } else if (id < 100) {
        return "0" + id;
      } else return id;
    },
    transformedWeight() {
      return this.weight/10;
    },
    transformedHeight() {
      return this.height/10;
    },
  },
};
</script>
<style scoped>
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.info-container {
  position: absolute;
  bottom: 5%;
  width: 100%;
  height: fit-content;
  top: 55%;
}

h1 {
  font-size: 1vw;
  color: #FFFFFF;
  position: absolute;
  top: 50%;
  left: 0%;
}
.poke-types {
  margin-top: 5%;
  margin-right: 0;
  height: fit-content;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  position: absolute;
  left: 37%;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 0 0 0 5%;
}

img {
  top: 10%;
  left: 5%;
  height: 40%;
  position: absolute;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  left: 0%;
}
.parameter-value{
  position: absolute;
  left: 40%;
}

.parameter-name{
  color: #ACB2C1;
}
</style>
