<script>
  import { Line } from 'vue-chartjs'

  export default Line.extend({
    props: ['name'],
    mounted () {
      var xmlHttp = new XMLHttpRequest()
      xmlHttp.open('GET', 'http://localhost/api/month/absence', false) // false for synchronous request
      xmlHttp.send(null)
      var exampleData = JSON.parse(xmlHttp.responseText)

      this.renderChart({
        name: 'userallocation',
        labels: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June'],
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
