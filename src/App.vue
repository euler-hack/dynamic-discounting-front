<template>
  <div id="app">
    <div id="nav" v-if="isCorrectNetwork">
      <router-link to="/create">Создать аукцион</router-link> |
      <router-link to="/offers">Предложения</router-link> |
      <router-link to="/active">Активные аукционы</router-link> |
      <router-link to="/close">Завершенные аукционы</router-link>
    </div>
    <div id="nav" v-else>
      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import {mapState} from 'vuex'
import { mapGetters } from 'vuex';
  
export default {
  name: 'App',
computed: {
  ...mapState({
    networkId: state => state.networkId
  }),
  ...mapGetters(["isCorrectNetwork"])
},
beforeCreate () {
      console.log('registerWeb3 Action dispatched');
      this.$store.dispatch("registerWeb3");
  }
}
</script>
