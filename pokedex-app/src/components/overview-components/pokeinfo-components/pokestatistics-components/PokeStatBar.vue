<template>
    <div class="stat-container">
        <div class="stat-bar-background"></div>
        <div class="stat-bar-foreground" :style="{ width: foregroundSize + '%', backgroundColor: foregroundColor}"></div>
      </div>
</template>
<script>
export default {
    props:{
        statValue: Number
    },
    computed: {
        foregroundSize() {
            if(this.statValue < 100) return this.statValue;
            else return 100;
        }, 
        foregroundColor() {
            if(this.statValue < 50) return '#DF6563';
            else return '#70C18F';
        }
    }
}
</script>

<style scoped>
.stat-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .stat-bar-background {
    width: 100%;
    height: 40%;
    background-color: #ACB2C1;
    position: absolute;
    opacity: 0.2;
    top: 0;
    left: 0;
    border-radius: 100px;
  }
  
  .stat-bar-foreground {
    height: 40%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100px;
  }
</style>