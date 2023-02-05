<template>
    <section>
        <poke-logo></poke-logo>
    </section>
        
</template>
<script>
import PokeLogo from '../global-components/PokeLogo.vue';
export default {
  components: { PokeLogo },
}
</script>
<style scoped>
section {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column; 
}


</style>