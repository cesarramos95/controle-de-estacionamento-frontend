<template>
<div>
  <navBar/>
    <div class = "home" v-if="!loggedIn">
      
      Faça
        <router-link to="/login">login</router-link> ou
      <router-link to="/register">registre-se.</router-link>
      
      
    </div>
</div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'
import navBar from "@/components/AppNav.vue";

export default {
  components:{
    navBar
  },
  computed: {
      ...authComputed
  }
} 
</script>
<style scoped>

.home{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
  font-size: 50px;
}


</style>


