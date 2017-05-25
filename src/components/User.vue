<template lang="pug">
  generic-template(:header="$route.params.name")
    link(rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css" media="screen" title="no title" charset="utf-8")
    card3
      h2.head Absence per Day
      user-allocation(:name="$route.params.name")
</template>

<script>
  import GenericTemplate from './GenericTemplate'
  import UserAllocation from './UserAllocation'
  import Card3 from './Card3.vue'

  export default {
    components: { GenericTemplate, UserAllocation, Card3 },
    name: 'user'
  }
</script>

<style scoped lang="scss">
  .head {
    text-align: left;
    margin-top: 0;
  }
</style>
