<template>
<div class="main">
  <h1>Network {{ networkId }}</h1>
</div>
</template>

<script>
import {mapState} from 'vuex'
  
export default {
  name: 'HelloWorld',
  beforeCreate () {
      console.log('registerWeb3 Action dispatched');
      this.$store.dispatch("registerWeb3");
  },
  props: {
    msg: String
},
computed: mapState({
ethereum: state => state.ethereum,
networkId: state => state.networkId
})
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
