<template>
    
    <div class="poke-button" :style="{ background: backgroundGradient }">
        <poke-logo></poke-logo>
        <h3 class="white-text">
            <slot name="title"></slot>
        </h3>
        <p class="greyed-text">{{ pokemons }} pokemons</p>
        
    </div>
</template>

<script>
import PokeLogo from './PokeLogo.vue';

export default {
    components: {
        PokeLogo
    },
    props: {
        pokemons: Number,
        colorFrom: String,
        colorTo: String
    },
    computed: {
        backgroundGradient() {
            return 'linear-gradient(109.73deg, ' + this.colorFrom + ' 0%, ' + this.colorTo + ' 100%)';
        }
    }
}
</script>
<style scoped>
.poke-button {
    padding-left: 10px;
    width: 167px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
    z-index: 1;
}

h3 {
    margin-top: 40px;
    margin-bottom: 0px;
    z-index: 4;
}

p {
    margin-top: 5px;
    z-index: 4;
}

</style>