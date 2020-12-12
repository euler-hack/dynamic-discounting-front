<template>
<div class="activelist">
  <ClosedContracts />
  <ClosedDetails />
</div>
</template>


<script>
import ClosedContracts from "@/components/ClosedContracts.vue"
import ClosedDetails from "@/components/ClosedDetails.vue"

export default {
  name: 'ClosedList',
components: {
ClosedContracts,
ClosedDetails
}
}
</script>

