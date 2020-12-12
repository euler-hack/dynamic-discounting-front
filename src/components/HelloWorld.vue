<template>
<div class="main">
  <div v-if="isCorrectNetwork">
    <h1>Correct network!</h1>
    <p>Вы подключены к правильной сети {{ networkId }}. Можете приступать к работе.</p>
  </div>
  <div v-else>
    <h1>Wrong settings :(</h1>
    <p>Вы не подключены к сети</p>
    <p>Для доступа к системе необходимо установить metamask.</p>
    <p>Данные для подключения: <br />RPC: http://130.193.58.123:8545, <br />NetworkID: 0xf2c2a0839.</p>
  </div>
  
</div>
</template>

<script>
import {mapState} from 'vuex'
import { mapGetters } from 'vuex';
  
export default {
  name: 'HelloWorld',
  beforeCreate () {
      console.log('registerWeb3 Action dispatched');
      this.$store.dispatch("registerWeb3");
  },
  props: {
    msg: String
},
computed: {
  ...mapState({
    networkId: state => state.networkId
  }),
  ...mapGetters(["isCorrectNetwork"])
}
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
