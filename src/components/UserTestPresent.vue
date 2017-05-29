<script>
  import { Doughnut } from 'vue-chartjs'

  export default Doughnut.extend({
    props: ['name'],
    mounted () {
      var xmlHttp = new XMLHttpRequest()
      xmlHttp.open('GET', 'http://localhost/api/user/testPresent/' + this.name, false) // false for synchronous request
      xmlHttp.send(null)
      var data = JSON.parse(xmlHttp.responseText)

      this.renderChart({
        name: 'userallocation',
        labels: ['Present', 'Not Present'],
        legend: {
          display: false
        },
        datasets: [
          {
            backgroundColor: ['#8CD867', '#ED6A5E'],
            fillOpacity: 0.5,
            data: data
          }
        ]
      })
    }
  })
</script>
