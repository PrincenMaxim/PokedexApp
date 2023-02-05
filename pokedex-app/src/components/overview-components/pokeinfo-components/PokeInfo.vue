<template>
  <section>
    <h1>INFO</h1>
    <div class="info-container">
      <card-box>
        <ul>
          <li>
            <p>Type</p>
            <div class="poke-types">
              <poke-type
                v-for="type of types"
                :key="type.slot"
                :type="type.type.name"
              ></poke-type>
            </div>
          </li>
          <li>
            <p>Nummer</p>
            <p>{{ transformedId }}</p>
          </li>
          <li>
            <p>Gewicht</p>
            <p>{{ weight }} kg</p>
          </li>
          <li>
            <p>Hoogte</p>
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
  margin-top: -14%;
  width: 100%;
  height: 50%;
}

h1 {
  font-size: 1vw;
}
.poke-types {
  margin-top: 5%;
  margin-right: 0;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: end;
}

li {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30%;
}
</style>
