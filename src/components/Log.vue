<template lang="pug">
  generic-template(header="Log")
    link(rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css" media="screen" title="no title" charset="utf-8")
    .ui.container
      vuetable(ref="vuetable"
        api-url="http://vuetable.ratiw.net/api/users"
        :fields="['name', 'email', 'birthdate']")
</template>

<script>
  import GenericTemplate from './GenericTemplate'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import Card2 from './Card2'

  export default {
    components: { GenericTemplate, Card2, Vuetable },
    name: 'log'
  }
</script>

<style scoped lang="scss">
  .ui.container {
    margin: 0!important
  }
</style>
