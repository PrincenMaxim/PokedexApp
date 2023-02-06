<template>
  <section>
    <h1>INFO</h1>
    <div class="info-container">
      <card-box>
        <ul>
          <li>
            <p class="parameter">Type</p>
            <div class="poke-types">
              <poke-type
                v-for="type of types"
                :key="type.slot"
                :type="type.type.name"
              ></poke-type>
            </div>
          </li>
          <li>
            <p class="parameter">Nummer</p>
            <p>{{ id }}</p>
          </li>
          <li>
            <p class="parameter">Gewicht</p>
            <p>{{ weight }} kg</p>
          </li>
          <li>
            <p class="parameter">Hoogte</p>
            <p>{{ height }}m</p>
          </li>
        </ul>
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
    types: Array,
    id: Number,
    weight: Number,
    height: Number,
  },
  computed: {
    transformedId() {
      const id = this.id;
      if (id.length < 10) {
        return "00" + id;
      } else if (id.length < 100) {
        return "0" + id;
      } else return id;
    },
    transformedWeight() {
      const weight = this.weight;
      return weight.slice(0, weight.length - 1) + "." + weight.slice(-1);
    },
    transformedHeight() {
      const height = this.height;
      return height.slice(0, height.length - 1) + "." + height.slice(-1);
    },
  },
};
</script>
<style scoped>
section {
  width: 100%;
}

.info-container {
  position: absolute;
  top:65%;
  width: 100%;
  height: 50%;
}

h1 {
  font-size: 1vw;
  color: #FFFFFF;
  position: absolute;
  top: 63%;
  left: 0%;
}
.poke-types {
  margin-top: 5%;
  margin-right: 0;
  height: 80%;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: start;
}

ul {
  display: flex;
  flex-direction: column;
}

li {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30%;
}

.parameter{
  color: #ACB2C1;
}
</style>
