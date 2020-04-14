<template>
  <div id="drawerSection">
    <div class="drawerButton">
      <img src="">
    </div>
    <ul class="menuButton">
      <!--  <button @click="toggle">他のやつをボタンにしたいボタン</button>-->
      <li>
        <a
          class="Home"
          href="#mainSection"
          @click="clickSmoothScroll()"
        >Home</a>
      </li>
      <li>
        <a
          class="Aboutme"
          href="#aboutSection"
          @click="clickSmoothScroll()"
        >About Me</a>
      </li>
      <li>
        <a
          class="SkillSets"
          href="#skillSection"
          @click="toggle"
        >Skill Sets</a>
      </li>
      <li>
        <a
          class="Vision"
          href="#visionSection"
          @click="clickSmoothScroll()"
        >Vision</a>
      </li>
      <li>
        <a
          class="Customize1"
          href="#workSection"
          @click="clickSmoothScroll()"
        >Customize Item1</a>
      </li>
      <li>
        <a
          class="Customize2"
          href="#customizeSection"
          @click="clickSmoothScroll()"
        >Customize Item2</a>
      </li>
    </ul>
    <div class="drawerMenuItemLink">
      <a helf="" />
    </div>
  </div>
</template>
<!--<template>
  <div id="app">
    <button @click="toggle" class="btn btn-success">toggle</button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">content here</div>
    </Drawer>
  </div>
</template>-->

<script>

</script>

<style scope>
  #drawerSection {
    width: 100%;
    height: auto;
    display: block;
    background: #f3f3f3;
  }

  .Home {
    display: block;
  }

  .Aboutme {
    display: block;
  }

  .SkillSets {
    display: block;
  }

  .Vision {
    display: block;
  }

  .Customize1 {
    display: block;
  }

  .Customize2 {
    display: block;
  }
</style>
