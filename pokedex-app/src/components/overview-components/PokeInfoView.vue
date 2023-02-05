<template>
    <section v-if="selectedPokemon">
    </section>
</template>

<script>
import { usePokemonStore } from '@/stores/SelectedPokemonStore';


export default {
    data(){
        return {
            pokemonStore: usePokemonStore(),
            selectedPokemon: null,
        }
        
    },

    method:{
        
    },
    watch: {
        $route(){
            this.selectedPokemon = this.pokemonStore.getPokemonById(parseInt(this.$route.params.pokeid));
        }
    },
    created(){
        this.selectedPokemon = this.pokemonStore.getPokemonById(parseInt(this.$route.params.pokeid));
    }
   
}
</script>

<style>

</style>