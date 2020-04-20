<script>
import { Radar } from 'vue-chartjs';

export default {
    name:'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'GitHub', 'Firebase' ],
        datasets: [
          {
            label: 'DevOps Skill Level',
            data: [4, 3, 4, 4, 3],
            backgroundColor: [
              'rgba(188, 129, 243, 0.2)'
            ],
            borderColor: [
              'rgba(112, 18, 200, 1)',
              'rgba(112, 18, 200, 1)',
              'rgba(112, 18, 200, 1)',
              'rgba(112, 18, 200, 1)',
              'rgba(112, 18, 200, 1)',
              'rgba(112, 18, 200, 1)'
            ],
            borderWidth: 1
          },
                  ]
      },
      options: {
        scale: {
          ticks:{
            beginAtZero:true,
            max:5,
            min:0,
            stepSize:1
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
