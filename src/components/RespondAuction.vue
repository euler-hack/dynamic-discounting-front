<template>
  <div class="respond">
    <h2>Отправить заявку на участие</h2>
    <p>Сумма: <input v-model="amount"></p>
    <p>Размер скидки: <input v-model="percent">%</p>
    <button v-on:click="respond">Отправить заявку на участие в аукционе</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { mapGetters } from 'vuex';


  export default {

  name: "RespondAuction",

  props: ["auction_id"],
  
  methods: {
  respond: function() {
    let data = this.contract.respondAuction.getData(this.auction_id, this.amount, this.percent);
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
  .respond {
  margin-top: 20px;
  
  }
</style>

