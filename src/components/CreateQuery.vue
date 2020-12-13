<template>
<div class="createquery">
    <p>Свободная сумма: <input v-model="amount"></p>
    <p>Минимальный дисконт <input v-model="percent"> %</p>
    <p><button v-on:click="send">Создать</button></p>
    <p></p>
  </div>      
</template>


<script>
import {mapState} from 'vuex'
import { mapGetters } from 'vuex';

export default {
name: 'CreateQuery',
data: function() { return {
amount: 100000,
percent: 2
}},
methods: {
send: function() {
console.log(this.amount, this.percent);
console.log(this.contract.address);
let data = this.contract.createAuction.getData(this.amount, this.percent);
let coinbase = window.web3.eth.coinbase;
window.web3.eth.sendTransaction({from: coinbase, to: this.contract.address, data: data}, function (err, res) {console.log(err, res)})
}},
computed: {
  ...mapState({
    networkId: state => state.networkId
  }),
  ...mapGetters(["contract"])
}
}
</script>

