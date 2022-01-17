<template>
  <my-header></my-header>

  <div id="app"></div>

  <router-view />

  <my-footer></my-footer>
</template>

<script>

import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  components:{
    MyHeader,
    MyFooter,
  }
}

</script>


<style scoped>
#app {
  padding: 20px;
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>
