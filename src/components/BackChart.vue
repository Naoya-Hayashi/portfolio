<script>
import { Radar } from 'vue-chartjs';

export default {
    name:'BackChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRails', 'MySQL'],
        datasets: [
          {
            label: 'Back-end Skill Level',
            data: [3, 2, 2, 1],
            backgroundColor: [
              'rgba(148, 248, 150, 0.2)'
            ],
            borderColor: [
              'rgba(10, 183, 13, 1)',
              'rgba(10, 183, 13, 1)',
              'rgba(10, 183, 13, 1)',
              'rgba(10, 183, 13, 1)',
              'rgba(10, 183, 13, 1)',
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
    this.getChartName2();
    this.getChartScore2();
//    this.getChartColor2();
    this.renderChart(this.data, this.options)
  },
    methods:{
    getChartName2(){
      const names = this.$store.getters.backName
      this.data.labels= names
    },
    getChartScore2(){
      const scores = this.$store.getters.backScore
      this.data.datasets[0].data = scores
    },
    //  getChartColor2(){
    //   const colors = this.$store.getters.backColor
    //   this.data.datasets[0].backgroundColor = colors
    //  }
     }
     }
</script>
