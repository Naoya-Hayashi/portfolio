<template>
  <div id="skillSection">
    <div class="skillTitle">
      <p>Skill Set</p>
    </div>
    <div class="skillExplain">
      <p>ascnionsaicnionspo nin ind ioan inspincpopcm oncaipdn ubv osncnopdnip nin ipsncpojscn ips</p>
    </div>
    <div class="gitHubLabe">
      <p />
    </div>
    <div class="gitHubLink">
      GitHub : <a href="https://github.com/Naoya-Hayashi/portfolio">https://github.com/Naoya-Hayashi/portfolio</a>
    </div>
    <div id="skillCategorie">
      <a id="Front-end">Front-end</a>
      <a id="Back-end">Back-end</a>
      <a id="DevOps">DevOps</a>
    </div>
    <div id="skillList">
      <ul class="front-end">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul class="back-end">
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul class="devops">
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <hr width="250">
    <div class="skillGraph">
      <Chart />
    </div>
  </div>
</template>

<script>
import Chart from './Chart.vue'
export default {
  name: 'App',
  components: {
    Chart
  }
}
</script>

<style scope>
  #skillSection {
    width: 100%;
    display: block;
    background: #fff;
  }

  .skillTitle {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 1px 1px #808080;
  }

  .skillExplain {
    color: #707070;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.25em;
  }

  .gitHubLabe {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12px;
  }

  .gitHubLink {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12px;
  }

  #skillCategorie {
    margin: 10px;
  }

  #Front-end {
    color: #b51a1a;
    margin: 10px;
  }

  #Back-end {
    color: #0f8839;
    margin: 10px;
  }

  #Debops {
    color: #571083;
    margin: 10px;
  }

  li {
    font-family: 'Noto Sans JP', sans-serif;
    list-style: none;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    background: #f3f3f3;
    display: inline-block;
    box-shadow: 0 3px #f0f0f0;
  }

  .front-end {
    color: #b51a1a;
  }

  .back-end {
    color: #0f8839;
  }

  .devops {
    color: #571083;
  }

  .skillGraph {
    color: #0f8839;
    background: #fff;
    width: 50%;
    margin: 0 auto;
  }
</style>
