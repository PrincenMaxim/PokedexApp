<template>
    <section>
        <div class="search-bar">
            <font-awesome-icon icon="search" style="font-size: 1.2vw;"></font-awesome-icon>
            <input type="text" placeholder="Pokemon zoeken"/>
        </div>
        
    </section>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);
export default {
    components: {
        FontAwesomeIcon
    }
}
</script>
<style scoped>
    section {
        width: 90%;
        height: fit-content;
        top: 20%;
        position: absolute;
        margin: 0 5% 0 5%;
    }
    .search-bar{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2% 5%;
        gap: 2%; 
        max-width: 100%;
        height: fit-content;
        background: #EFF0F1;
        border-radius: 10px;
        
    }

    .search-bar input {
        border: none;
        background-color: transparent;
        width: 100%;
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 200;
        font-size: 1.2vw;
        outline: none;
    }
</style>

section {
    
}