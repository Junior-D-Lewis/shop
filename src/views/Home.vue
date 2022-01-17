<template>
  <div class="home">
   <articles 
   v-for="todo in todos" 
   :key="todo.nom"
   :nom="todo.nom"
   :description="todo.description"
   :src="todo.image"
   :prix="todo.prix">

   </articles>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue'
 */

import Articles from '../components/Articles.vue'

import image1 from '../assets/images/embid.png'
import image2 from '../assets/images/logo.png'
import image3 from '../assets/images/logo.png'

export default {
  name: 'Home',
  components: {
    Articles,
  },
  data() {
    return {
       todos: [
         {
         nom: 'Embid',
         description: 'La new basket du joueur camerounais',
         image: image1,
         prix: 120
       },
       {
         nom: 'Curry',
         description: 'La new basket de Stephen Curry ',
         image: image2,
         prix: 320
       },
       {
         nom: 'Allen',
         description: "La new basket d'Allen Iverson",
         image: image3,
         prix: 220
       }
       ],
    }
}
}
</script>

<style scoped>
.home{
  padding: 20px;
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>