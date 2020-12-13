<template>
<div class="details">
  <div class="info" v-if="auction_id">
    <h2>Информация об аукционе #{{ auction_id }}</h2>
    
    <p>Сумма: {{ amount }}</p>

    <p>Минимальная процентная ставка: {{ percent }}%.</p>

    <p>Разместил: {{ buyer }}</p>

  <div v-if="state">
    <h2>Аукцион завершен</h2>
    <p>Размер скидки расчитан и зафиксирован в блокчейне.</p>

    <p>Смарт-контракт с зафиксированным соглашением: {{ fcontract }}.</p>
  </div>

    
    <div v-if="suppliers">
      <h2>Все ставки</h2>
      <p v-for="supplier in suppliers" :key="supplier.buyer">
	Сумма: {{ amount }}, Процент: {{ percent }}%  <br>(Предложил {{ supplier.address }})
      </p>
    </div>
  </div>

  <div class="no-info" v-else>
    Выберите аукцион, чтобы получить информацию о нем
  </div>
 
</div>

</template>

<script>
import {mapState, mapGetters} from 'vuex'

import Web3 from "web3"


export default {

name: 'ActiveDetails',

props: ["auction_id", "state"],

data: function() {
return {
amount: null,
percent: null,
suppliers: [],
buyer: null,
fcontract: null
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
networkId: state => state.networkId,
abi: state => state.abi
  }),
  ...mapGetters(["contract"])
},

methods: {
updateData: function() {
let self = this;
//let data = this.contract.createAuction.getData([this.auction_id]);
let coinbase = window.web3.eth.coinbase;
//this.contract.getAuctionDetails(this.auction_id).call({from: coinbase}, function(err, res) {self.updateAuctionDetails(res)})
console.log("IN", this.auction_id)


this.amount = null
this.percent = null
this.buyer = null
this.suppliers = []
this.fcontract = null

let contract_address = this.contract.address
let abi = this.abi
let w3 = new Web3(window.ethereum)
let c = new w3.eth.Contract(abi, contract_address)

console.log("CONTRACT", c)

c.methods.getAuctionDetails(this.auction_id).call({from: coinbase})
    .then((result) => {
self.updateAuctionDetails(result)
})

c.methods.getAuctionSuppliers(this.auction_id).call({from: coinbase})
    .then((result) => {
self.updateAuctionSuppliers(result)
})


//this.contract.getAuctionDetails(this.auction_id, {from: coinbase}, function(err, res) {console.log(err), self.updateAuctionDetails(res)})

//this.contract.getAuctionDetails(this.auction_id, {from: coinbase}, function(err, res) {console.log(err), self.updateAuctionDetails(res)})
},
updateAuctionDetails: function(res) {
console.log(res)
this.amount = res.hasAmount;
this.percent = res.minPercent;
this.buyer = res.buyer;
this.fcontract = res.signedContract
},
updateAuctionSuppliers: function(res) {
console.log(res)
this.suppliers = []
let lst = this.suppliers
res.forEach(function (x) {lst.push({address: x[0], amount: x[1], percent: x[2]})})
}
}
}
</script>

<style>
  .activedetails {
  }
</style>

