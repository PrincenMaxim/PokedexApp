<template>
    <card-box :selectable="true">
        <div class="cardbox-slot-content">
            <img :src="pokemon.sprites.front_default"/>
            <div class="poke-info">
              <h3>{{ pokemon.name }}</h3>
              <p>Nr. {{ pokemon.id }}</p>
            </div>
            <div class="poke-types">
              <poke-type v-for="type in pokemon.types" :key="type.slot" :type="type.type.name">
            </poke-type>
            </div>
          </div>
    </card-box>
    
</template>
<script>
import PokeType from './PokeType.vue';

import CardBox from '../global-components/CardBox.vue'
export default {
  components: { CardBox, PokeType },
    props: {
        pokemon: {
            type: Object
        }
    }
}
</script>
<style scoped>
.cardbox-slot-content {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: start;
    height: 100%;
    width: 90%;
    padding-bottom: 2%;
  
}

img {
    height: 7vw;
}
  
  .poke-info {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
  }
  
  .poke-info h3 {
    font-size: 1.2vw;
    margin-bottom: 0;
    letter-spacing: 0.01vw;
  }
  .poke-info p {
    margin-top: 0;
    color: #919698;
    letter-spacing: 0.01vw;
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
</style>