<template>
  <div id="app">
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <!--   <Work />
    <Customize /> -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'
import { mapActions } from 'vuex';
//import Work from './components/Work.vue'
//import Customize from './components/Customize.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer,
//    Work,
//    Customize
  },
  computed: {
    skillCategories(){
     return this.$store.getters.skillCategories
   }
  },
  mounted () {
    this.updateskillCategories();
    this.$store.dispatch('updateskillCategories');
  },
  methods: {
      ...mapActions(['updateskillCategories']),
  }
}




</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

</style>
