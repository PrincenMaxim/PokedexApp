<template>
    <section>
        <div v-if="!pokemonStore.isFetching">
            {{ selectedPokemon }}
        </div>
    </section>
</template>

<script>
import { usePokemonStore } from '@/stores/SelectedPokemonStore';


export default {
    data(){
        return {
            pokemonStore: usePokemonStore(),
            selectedPokemon: null,
            isFetching: true
        }
        
    },

    method:{
        
    },
    watch: {
        $route(){
            this.selectedPokemon = this.pokemonStore.getPokemonById(parseInt(this.$route.params.pokeid));
        },
        isFetching(){
            if(this.isFetching == false){
                this.selectedPokemon = this.pokemonStore.getPokemonById(parseInt(this.$route.params.pokeid));
            }
        }
    },
    created(){
        this.isFetching = this.pokemonStore.isFetching;
        
        
    }
   
}
</script>

<style>

</style>