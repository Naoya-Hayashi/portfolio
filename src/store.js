import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'
// npm install --save axios vue-axios を実行してデータにアクセスできるようにする
//import VueAxios from 'vue-axios'
//Vue.use(VueAxios, axios)
//Vue.config.productionTip = false

Vue.use(Vuex);

export default new Vuex.Store({
  //state:コンポーネントでいうdata
  state: {
    skillCategories: [],
    loaded: false
  },

  //getters:コンポーネントでいうcomputed的なもの
  getters: {
 //     getSkills: (state) => (category) => {
 //       if (state.skillCategories.length > 0) {
 //         return state.skillCategories.find((skills) => skills.Categories==category);
 //       }
 //     return [];
 //   },
 // },
 frontName: (state) => {
  const skillNameArray = []
     state.skillCategories[0].skill.forEach((Skill) => {
      skillNameArray.push(Skill.name)
    })
  return skillNameArray
  },

  frontScore: (state) =>{
    const skillScoreArray = []
      state.skillCategories[0].skill.forEach((Score) => {
        skillScoreArray.push(Score.score)
      })
    return skillScoreArray
  },

  frontColor: (state) =>  {
    const skillColorArray = []
      state.skillCategories[0].skill.forEach((Color) => {
        skillColorArray.push(Color.backgroundColor)
      })
    return skillColorArray
  },
  backName: (state) => {
    const skillNameArray = []
       state.skillCategories[1].skill.forEach((Skill) => {
        skillNameArray.push(Skill.name)
      })
    return skillNameArray
    },

    backScore: (state) =>{
      const skillScoreArray = []
        state.skillCategories[1].skill.forEach((Score) => {
          skillScoreArray.push(Score.score)
        })
      return skillScoreArray
    },

    backColor: (state) =>  {
      const skillColorArray = []
        state.skillCategories[1].skill.forEach((Color) => {
          skillColorArray.push(Color.backgroundColor)
        })
      return skillColorArray
    },
    devName: (state) => {
      const skillNameArray = []
         state.skillCategories[2].skill.forEach((Skill) => {
          skillNameArray.push(Skill.name)
        })
      return skillNameArray
      },

      devScore: (state) =>{
        const skillScoreArray = []
          state.skillCategories[2].skill.forEach((Score) => {
            skillScoreArray.push(Score.score)
          })
        return skillScoreArray
      },

      devColor: (state) =>  {
        const skillColorArray = []
          state.skillCategories[2].skill.forEach((Color) => {
            skillColorArray.push(Color.backgroundColor)
          })
        return skillColorArray
      }
      },
  //mutations:コンポーネントでいうmethod（と言うかsetter）
  //stateを唯一変更できるもの
  mutations: {
    //vuexでは引数をpayloadと呼ぶっぽい
    //payloadはオブジェクトにするべき（いっぱい入れれるし）
    setskillCategories(state,payload){
      //skillsArray
      state.skillCategories = payload.skillCategories;
      state.loaded =true
    }
  },
  //actionのコミットを使うことでミューテーションを呼び出す（コンポーネントには無い概念）
  actions: {
    async updateskillCategories({commit}) {
      const skillCategories = [];
//      const res = await axios.get('https://us-central1-myfirstfirebase-8807b.cloudfunctions.net/skills');
        const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skills';
        const res = await axios.get(functionsUrl);
        res.data.forEach((category) =>{
        skillCategories.push(category);
      });
      commit('setskillCategories', {skillCategories});
    },
  },
});
