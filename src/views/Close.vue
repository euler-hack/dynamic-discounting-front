<template>
  <div class="close">
    <h1>Закрытые аукционы</h1>
    <ClosedList></ClosedList>
  </div>
</template>

<script>
  import ClosedList from "@/components/ClosedList.vue"

  export default {
  name: "Closed",
  components: {
    ClosedList
  }
  
  }
</script>
