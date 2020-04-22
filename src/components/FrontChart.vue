<script>
import { Radar } from 'vue-chartjs';
//20200421
import store from '/Users/nao8/seattle-academy20/portfolio/src/store.js'
import Skill from '../../skill.json'
//0421
export default {
    name:'Chart',
  extends: Radar,
  //20200421の変更点
  store,
  Skill,
  //この間0421
  data () {
    return {
      data: {
        lavels: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Vue'],
        datasets: [
          {
            label: 'Front-end Skill Level',
            data: [4, 4, 2, 2, 4],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
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
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>


