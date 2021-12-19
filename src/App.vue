<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>
<script>
import Header from './views/partials/Header.vue'
export default {
    components:{
        Header
        
    }
}

</script>

<style>
@import "../public/assets/css/light.pro.min.css";
@import "../public/assets/css/style.css";
</style>
