<script>
import { Radar } from 'vue-chartjs';

export default {
    name:'FrontChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Front-end Skill Level',
            data: [],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)"
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)'
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
        },
        legend:{
          display:false
        }
      }
    }
  },
  mounted () {
    this.getChartName();
    this.getChartScore();
    this.getChartColor();
    this.renderChart(this.data, this.options)
  //  this.getSkills()
  },
  methods:{
    getChartName(){
      const names = this.$store.getters.frontName
      this.data.labels= names
    },
    getChartScore(){
      const scores = this.$store.getters.frontScore
      this.data.datasets[0].data = scores
    },
     getChartColor(){
      const colors = this.$store.getters.frontColor
      this.data.datasets[0].backgroundColor = colors
    }
  }
 //methods:{
 //// storeからscore
 //getFSkillScores(){
 //const skillFScore=this.$store.getters.frontScore
 //this.data.datasets[0].data=skillFScore
 //},
 //// storeからname
 //getFSkillName(){
 //const skillFName=this.$store.getters.frontName
 //this.data.labels=skillFName
 //}
 //}
}

</script>


