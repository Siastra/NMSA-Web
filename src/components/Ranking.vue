<template lang="pug">
  generic-template(header="Ranking")
    link(rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css" media="screen" title="no title" charset="utf-8")
    .ui.container
      vuetable(ref="vuetable"
        api-url="http://localhost/api/ranking"
        :fields="[{name: 'id', title:''}, 'name', {name:'value', title:'Time in hours'}]"
        @vuetable:cell-clicked="onCellClicked"
      )
</template>

<script>
  import GenericTemplate from './GenericTemplate'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import router from '../router/index.js'

  export default {
    components: { GenericTemplate, Vuetable },
    name: 'ranking',
    methods: {
      onCellClicked: (data) => {
        router.push('/user/' + data.name)
      }
    }
  }
</script>

<style scoped lang="scss">
  .ui.container {
    margin: 0!important
  }
</style>
