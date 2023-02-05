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
import PokeLogo from '../global-components/PokeLogo.vue';

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
    position: relative;
    padding-left: 2%;
    width: 45%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    z-index: 1;
    padding-top: 10%;
    padding-bottom: 3%;
    cursor: pointer;
}

.poke-button:hover {
    filter: brightness(110%);
    transition: ease-in-out 0.2s;
}

.poke-button:active {
    filter: brightness(120%);
    transition: 0s;
}

h3 {
    position: absolute;
    top: 20%;
    z-index: 4;
    font-size: 1.45vw;
    letter-spacing: 0.01vw;
}

p {
    position: absolute;
    z-index: 4;
    font-size: 1vw;
    bottom: 0%;
}

</style>