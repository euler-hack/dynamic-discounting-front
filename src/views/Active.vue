<template>
  <div class="active">
    <h1>Мои активные аукционы</h1>
    <ActiveList></ActiveList>
  </div>
</template>

<script>
  import ActiveList from "@/components/ActiveList.vue"

  export default {
  name: "Active",
  components: {
    ActiveList
  }
  
  }
</script>
