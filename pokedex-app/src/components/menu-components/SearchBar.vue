<template>
    <section>
        <div>

        </div>
        <div class="search-bar">
            <font-awesome-icon icon="search"></font-awesome-icon>
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
<style>
    .search-bar{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 7px 8px;
        gap: 6px;
    
        position: absolute;
        width: 343px;
        height: 36px;
        left: 16px;
        top: 145px;
    
        background: #EFF0F1;
        border-radius: 10px;
    }

    .search-bar input {
        border: none;
        background-color: transparent;
        width: 100%;
        height: 80%;
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 200;
        font-size: 16px;
        outline: none;
    }
</style>

section {
    
}