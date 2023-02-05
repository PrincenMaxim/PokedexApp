<template>
  <div class="type-box" :style="{ backgroundColor: styleColor }">
    <p class="type-name">{{ type }}</p>
  </div>
</template>
<script>
import { typeColor } from "../../typeColor.js";

export default {
  props: {
    type: String,
  },
  computed: {
    styleColor() {
      return typeColor(this.type);
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
  color: #ffffff;
}
</style>
