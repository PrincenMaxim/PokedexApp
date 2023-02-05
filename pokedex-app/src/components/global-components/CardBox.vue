<template>
  <div :class="{selectable : selectable}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    selectable: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
<style scoped>
div {
  background: #ffffff;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  width: 100%;
  margin: 1% 0 1% 0;
}



div .selectable:hover{
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.04);
  transform: translateY(-5%);
  transition: 0.2s;
  cursor: pointer;
}

div .selectable:active{
  background: rgb(224, 223, 223);
  transition: ease-out 0.2s;
}
</style>
