<template>
  <div id="skillSection">
    <div id="skillTitle">
      <p>Skill Set</p>
    </div>
    <div class="skillExplain">
      <p>
        身につけたスキルをまとめました。フロントエンドからバックエンドまで軽く触れてはいましたが、前者のスキルはポートフォリオの実装により力を付けつつあります。
        バックエンドに関しての経験が不足している為、利用の仕方を勉強中です。
        DevOpsは、実装時の変化の見える化が難しい為、触れているスキルの多さで評価しています。

        Webアプリの開発、AI開発の為のスキルを付けられるよう勉学に励んでいます。
      </p>
    </div>
    <label id="gitHubLabel">
      GitHub:
      <a
        id="gitHubLink"
        href="https://github.com/Naoya-Hayashi/portfolio"
      >https://github.com/Naoya-Hayashi/portfolio</a>
    </label>
    <div id="skillCategorie">
      <ul>
        <li>
          <span
            id="Front-end"
            @click="setCurrentChart('front')"
          >
            Front-end
          </span>
        </li>
        <li>
          <span
            id="Back-end"
            @click="setCurrentChart('back')"
          >
            Back-end
          </span>
        </li>
        <li>
          <span
            id="Devops"
            @click="setCurrentChart('dev')"
          >
            DevOps
          </span>
        </li>
      </ul>
    </div>
    <div id="skillList">
      <ul
        id="front-end"
        :class="{'front-change': isFrontActive}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="back-end"
        :class="{'back-change': isBackActive}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul
        id="devops"
        :class="{'dev-change': isDevOpsActive}"
      >
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div id="skillGraph">
      <div
        v-if="isFrontActive"
      >
        <FrontChart />
      </div>
      <div
        v-if="isBackActive"
      >
        <BackChart />
      </div>
      <div
        v-if="isDevOpsActive"
      >
        <DevChart />
      </div>
    </div>
  </div>
</template>

<script>
import FrontChart from '../components/FrontChart.vue';
import BackChart from '../components/BackChart.vue';
import DevChart from '../components/DevChart.vue';
export default {
  components: {
    FrontChart,
    BackChart,
    DevChart
  },
  data(){
    return {
      currentChart: 'front',
    }
  },
   computed: {
     isFrontActive() {
       return this.currentChart=='front';
     },
     isBackActive() {
       return this.currentChart=='back';
     },
     isDevOpsActive() {
      return this.currentChart=='dev';
   }
  },
  methods: {
    setCurrentChart(chart){
      this.currentChart = chart;
    },
  }
}
</script>

<style scope>
  #skillSection {
    width: 100%;
    height: auto;
    display: block;
    background: #fff;
    border-bottom: 1px solid gray;
    margin: 0 auto;
    padding-bottom: 10px;
  }

  #skillTitle {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 30px;
    text-shadow: 2px 2px #808080;
    width: 300px;
    margin: 0 auto;
  }

  .skillExplain {
    color: #707070;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 18px;
    letter-spacing: 0.25em;
    width: 70%;
    word-break: normal;
    margin: 0 auto;
  }

  #gitHubLabel,
  #gitHubLink {
    font-size: 12pt;
    color: #20879f;
    font-family: "Noto Sans Japanese", sans-serif;
    font-weight: bold;
  }

  #skillCategorie {
    margin: 10px;
  }

  #Front-end {
    color: #b51a1a;
    margin: 10px;
    cursor: pointer;
  }

  #Back-end {
    color: #0f8839;
    margin: 10px;
    cursor: pointer;
  }

  #Devops {
    color: #571083;
    margin: 10px;
    cursor: pointer;
  }

  li {
    font-family: 'Noto Sans JP', sans-serif;
    list-style: none;
    margin: 10px;
    font-weight: bold;
    display: inline-block;
  }

  #front-end {
    color: #b51a1a;
  }

  #back-end {
    color: #0f8839;
  }

  #devops {
    color: #571083;
  }

  #skillList {
    font-size: 18px;
    width: auto;
  }

  .front-change li {
    background-color: rgba(181, 26, 26, 0.25);
  }

  .back-change li {
    background-color: rgba(15, 136, 57, 0.25);
  }

  .dev-change li {
    background-color: rgba(87, 16, 131, 0.25);
  }

  #front-end li {
    color: rgba(181, 26, 26, 0.75);
    height: 30px;
    font-weight: bold;
    padding: 2px 20px 2px 20px;
    box-shadow: 0 0 8px gray;
  }

  #back-end li {
    color: rgba(15, 136, 57, 0.75);
    height: 30px;
    font-weight: bold;
    padding: 2px 20px 2px 20px;
    box-shadow: 0 0 8px gray;
  }

  #devops li {
    color: rgba(87, 16, 131, 0.75);
    height: 30px;
    font-weight: bold;
    padding: 2px 20px 2px 20px;
    box-shadow: 0 0 8px gray;
  }

  #skillGraph {
    color: #0f8839;
    background: #fff;
    width: 50%;
    margin: 0 auto;
  }
</style>
