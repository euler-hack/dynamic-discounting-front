<template>
  <div class="offers">
    <h1>Открытые аукционы</h1>
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
