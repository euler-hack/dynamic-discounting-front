<template>
<div class="activelist">
  <div class="list">
    <div class="button" v-for="item in list" :key="item"><button v-on:click="getInfo">{{ item }}</button></div>
  </div>
  <AuctionDetails v-bind:auction_id="current" state="closed" />
</div>
</template>


<script>
import {mapState, mapGetters} from 'vuex'
import AuctionDetails from "@/components/AuctionDetails.vue"

export default {
name: 'AuctionList',
data: function () {
return {
list: [],
current: null
}
},
components: {
AuctionDetails
},
computed: {
  ...mapState({
    networkId: state => state.networkId
  }),
  ...mapGetters(["contract"])
},
mounted () {
    let self = this
    this.contract.getClosedAuctions(function(err, res) {self.updateList(res)})
},
methods: {
  updateList: function (res) {
    this.list = []
    let lst = this.list
    res.forEach(function(x) {lst.push(parseInt(x))})
  },
getInfo: function(res) {
    let id = res.target.outerText;
    console.log(id);
    this.current = id
}
}
}
</script>


<style>
  .button {
  display: inline;
  margin-left: 5px;
  margin-right: 5px;
  }

  .list {margin-bottom: 20px}
</style>
