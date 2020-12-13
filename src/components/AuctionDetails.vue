<template>
<div class="details">
  <div class="info" v-if="auction_id">
    <p>ID: {{ auction_id }}.</p>

    <p>Сумма: {{ amount }}, Минимальная процентная ставка: {{ percent }}%.</p>

    <p>Текущие ставки:</p>

    <p v-for="offer in offers" :key="offer">{{ offer }}</p>
  </div>

  <div class="no-info" v-else>
    Выберите аукцион, чтобы получить информацию о нем
  </div>
 
</div>

</template>

<script>
import {mapState, mapGetters} from 'vuex'


export default {

name: 'ActiveDetails',

props: ["auction_id"],

data: function() {
return {
amount: null,
percent: null,
offers: []
}
},

watch: {

auction_id: {
      immediate: true,
      deep: true,
handler(newValue) {
if (newValue) 
this.updateData(newValue)

      }
}
},

computed: {
  ...mapState({
    networkId: state => state.networkId
  }),
  ...mapGetters(["contract"])
},

methods: {
updateData: function() {
//let self = this;
//let data = this.contract.createAuction.getData([this.auction_id]);
//let coinbase = window.web3.eth.coinbase;
//this.contract.getAuctionDetails(this.auction_id).call({from: coinbase}, function(err, res) {self.updateAuctionDetails(res)})
console.log("IN", this.auction_id)

this.contract.getContractDetails('0x65Fa9Fc03B18977761b4e27b3C460c2D521335d6').call({from: '0x1B47ee2f9ad071B2754f329373711e32A9C6b04e'})
.then((result) => {
    console.log('\n getAuctionDetails');
    console.log(result);
})

//this.contract.getAuctionDetails(this.auction_id, {from: coinbase}, function(err, res) {console.log(err), self.updateAuctionDetails(res)})

//this.contract.getAuctionDetails(this.auction_id, {from: coinbase}, function(err, res) {console.log(err), self.updateAuctionDetails(res)})
},
updateAuctionDetails: function(res) {
   console.log(res)
}
}
}
</script>

<style>
  .activedetails {
  }
</style>
