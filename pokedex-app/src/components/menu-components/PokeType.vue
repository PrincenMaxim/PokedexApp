<template>
  <div class="type-box" :style="{ backgroundColor: styleColor }">
    <p class="type-name"> {{ type }} </p>
  </div>
</template>
<script>
export default {
  props: {
    type: String,
  },

  data() {
    return {
      normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      fairy: "#D685AD",
      steel: '#B7B7CE',
    };
  },
  computed: {
    styleColor() {
      let backgroundColor = "";
      switch (this.type) {
        case "normal":
          backgroundColor = this.normal;
          break;
        case "fire":
          backgroundColor = this.fire;
          break;
        case "water":
          backgroundColor = this.water;
          break;
        case "electric":
          backgroundColor = this.electric;
          break;
        case "grass":
          backgroundColor = this.grass;
          break;
        case "ice":
          backgroundColor = this.ice;
          break;
        case "fighting":
          backgroundColor = this.fighting;
          break;
        case "poison":
          backgroundColor = this.poison;
          break;
        case "ground":
          backgroundColor = this.ground;
          break;
        case "flying":
          backgroundColor = this.flying;
          break;
        case "psychic":
          backgroundColor = this.psychic;
          break;
        case "bug":
          backgroundColor = this.bug;
          break;
        case "rock":
          backgroundColor = this.bug;
          break;
        case "ghost":
          backgroundColor = this.ghost;
          break;
        case "dragon":
          backgroundColor = this.dragon;
          break;
        case "fairy":
          backgroundColor = this.fairy;
          break;
        case "steel":
            backgroundColor = this.steel;
            break;
      }
      return backgroundColor;
    },
  },
};
</script>
<style scoped>
.type-box {
  min-width: 40%;
  height: 25%;
  
  border-radius: 50px;
  margin: 0 0 0 3%;
  padding-bottom: 2%;
}

.type-name {
   text-align: center;
   vertical-align: top;
   line-height: 0%;
   color: #FFFFFF;
}
</style>
