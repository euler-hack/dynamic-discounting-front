<template>
  <div class="execute">
    <button v-on:click="execute">Завершить аукцион и начать расчет</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { mapGetters } from 'vuex';


  export default {

  name: "ExecuteAuction",

  props: ["auction_id"],
  
  methods: {
  execute: function() {
    let data = this.contract.executeAuction.getData(this.auction_id);
    let coinbase = window.web3.eth.coinbase;
window.web3.eth.sendTransaction({from: coinbase, to: this.contract.address, data: data}, function (err, res) {console.log(err, res)})
  }
  },

  computed: {
  ...mapState({
    networkId: state => state.networkId
  }),
  ...mapGetters(["contract"])
}
  
  }
</script>

<style>
  .execute {
  margin-top: 20px;
  
  }
</style>

