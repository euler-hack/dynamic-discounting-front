<template>
  <div class="offers">
    <h1>Предложения</h1>
    <OffersList></OffersList>
  </div>
</template>

<script>
  import OffersList from "@/components/OffersList.vue"

  export default {
  name: "Offers",
  components: {
    OffersList
  }
  
  }
</script>
