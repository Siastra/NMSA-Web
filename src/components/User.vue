<template lang="pug">
  generic-template(:header="$route.params.name")
    link(rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css" media="screen" title="no title" charset="utf-8")
    card3
      user-allocation
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
  .ui.container {
    margin: 0!important
  }
</style>
