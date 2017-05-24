<template lang='pug'>
  generic-template(header='Explorer')
    card2
      #explorer
</template>

<script>
  import GenericTemplate from './GenericTemplate'
  import Card2 from './Card2.vue'

  export default {
    components: { GenericTemplate, Card2 },
    name: 'heatmap',
    mounted: () => {
      var xmlHttp = new XMLHttpRequest()
      xmlHttp.open('GET', 'http://localhost/api/absences', false) // false for synchronous request
      xmlHttp.send(null)
      var exampleData = JSON.parse(xmlHttp.responseText)

      // var exampleData = [{
      //   'date': '2016-01-01',
      //   'total': 17164,
      //   'details': [{
      //     'name': 'Project 1',
      //     'date': '2016-01-01 12:30:45',
      //     'value': 9192
      //   }, {
      //     'name': 'Project 2',
      //     'date': '2016-01-01 13:37:00',
      //     'value': 6753
      //   },
      //   {
      //     'name': 'Project N',
      //     'date': '2016-01-01 17:52:41',
      //     'value': 1219
      //   }]
      // }]

      // Set custom color for the calendar heatmap
      var color = '#cd2327'
      // Set overview type (choices are year, month and day)
      var overview = 'year'
      // Handler function
      var print = function (val) {
        console.log(val)
      }
      calendarHeatmap.init(exampleData, color, overview, print)
    }
  }
</script>

<style scoped lang='scss'>

</style>
