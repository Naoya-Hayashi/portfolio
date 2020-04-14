<template>
  <div id="footerSection">
    <a
      href="#"
      @click="clickSmoothScroll()"
    >
      <img
        class="footerScroll"
        src="../assets/i_icon_12256_icon_122560_256.png"
        alt="スクロールボタン"
      >
    </a>
    <div class="footerCopyright">
      <p>©︎Seattleconsulting</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo)

export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector("#hoge"),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
Vue.use(VueScrollTo, {
  container: "body",// スクロールするcontainer
  duration: 500, // スクロールアニメーションの長さ（ミリ秒）
  easing: "ease", // 使用されるイージング
  force: true,   // スクロールターゲットがすでに表示されている場合でも、スクロールを実行するかどうか。
  cancelable: false // ユーザーがスクロールをキャンセルできるかどうか
});
</script>

<style scope>
  #footerSection {
    width: 100%;
    height: 100px;
    display: block;
    background: linear-gradient(to bottom, #80e1f7, #06c1e6);
  }

  .footerCopyright {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 1px 1px #808080;
  }

  .footerScroll {
    width: 20px;
    height: auto;
    position: relative;
    top: -12px;
  }
</style>
