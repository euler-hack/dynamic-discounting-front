<template>
  <div class="create">
    <h1>Создать аукцион</h1>
    <CreateQuery>
    </CreateQuery>
  </div>
</template>

<script>
  import CreateQuery from "@/components/CreateQuery.vue"

  export default {
  name: "Create",
  components: {
  CreateQuery
  }
  
  }
</script>
