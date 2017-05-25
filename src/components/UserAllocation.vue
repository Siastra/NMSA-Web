<script>
  import { Radar } from 'vue-chartjs'

  export default Radar.extend({
    props: ['name'],
    mounted () {
      var xmlHttp = new XMLHttpRequest()
      xmlHttp.open('GET', 'http://localhost/api/user/allocation/' + this.name, false) // false for synchronous request
      xmlHttp.send(null)
      var exampleData = JSON.parse(xmlHttp.responseText)

      this.renderChart({
        name: 'userallocation',
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        legend: {
          display: false
        },
        datasets: [
          {
            backgroundColor: ['#ED6A5E'],
            fillOpacity: 0.5,
            data: exampleData
          }
        ]
      })
    }
  })
</script>
