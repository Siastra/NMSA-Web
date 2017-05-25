<script>
  import { Doughnut } from 'vue-chartjs'

  export default Doughnut.extend({
    mounted () {
      // Overwriting base render method with actual data.
      this.renderChart({
        name: 'userallocation',
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            backgroundColor: ['#f87979', '#36a2eb'],
            data: [40, 60]
          }
        ]
      })
    }
  })
</script>
