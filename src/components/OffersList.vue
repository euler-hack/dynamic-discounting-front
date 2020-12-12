<template>
<div class="activelist">
  <OffersContracts />
  <OffersDetails />
</div>
</template>


<script>
import OffersContracts from "@/components/OffersContracts.vue"
import OffersDetails from "@/components/OffersDetails.vue"

export default {
  name: 'OffersList',
components: {
OffersContracts,
OffersDetails
}
}
</script>

