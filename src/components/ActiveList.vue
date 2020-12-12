<template>
<div class="activelist">
  <ActiveContracts />
  <ActiveDetails />
</div>
</template>


<script>
import ActiveContracts from "@/components/ActiveContracts.vue"
import ActiveDetails from "@/components/ActiveDetails.vue"

export default {
  name: 'ActiveList',
components: {
ActiveContracts,
ActiveDetails
}
}
</script>

