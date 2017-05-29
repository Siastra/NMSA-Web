<template lang="pug">
  generic-template(header="Month Overview")
    card3
      month-absence-chart
</template>

<script>
  import Card3 from './Card3'
  import GenericTemplate from './GenericTemplate'
  import MonthAbsenceChart from './MonthAbsenceChart'

  export default {
    components: { GenericTemplate, Card3, MonthAbsenceChart },
    name: 'month-overview'
  }
</script>

<style scoped lang="scss">
</style>
