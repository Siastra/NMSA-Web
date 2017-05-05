<template lang="pug">
  generic-template(header="Dashboard")
    banner(slot="banner")
    card
      Testchart
    card
      Testchart
    card
      Testchart
    card
      Testchart
    card
      Testchart
</template>

<script>
  import GenericTemplate from './GenericTemplate'
  import Testchart from './Testchart'
  import Card from './Card'
  import Banner from './Banner'

  export default {
    components: { GenericTemplate, Card, Testchart, Banner },
    name: 'dashboard'
  }
</script>

<style scoped lang="scss">

</style>
