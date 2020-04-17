<template>
  <div id="drawerSection">
    <div class="drawerButton">
      <label
        id="labelBatsu"
        for="nav-input"
      >
        <img
          class="closeButton"
          src="../assets/_i_icon_11911_icon_119110_256.png"
          alt="閉じる"
        >
      </label>
    </div>
    <ul id="menuSection">
      <li id="menuItems">
        <a
          id="drawerMenuItemLink"
          href="#app"
          @click="closeMenu"
        >Home</a>
      </li>
      <li id="menuItems">
        <a
          id="drawerMenuItemLink"
          href="#aboutSection"
          @click="closeMenu"
        >About Me</a>
      </li>
      <li id="menuItems">
        <a
          id="drawerMenuItemLink"
          href="#skillSection"
          @click="closeMenu"
        >Skill Sets</a>
      </li>
      <li id="menuItems">
        <a
          id="drawerMenuItemLink"
          href="#visionSection"
          @click="closeMenu"
        >Vision</a>
      </li>
      <li id="menuItems">
        <a
          id="drawerMenuItemLink"
          href="#workSection"
          @click="closeMenu"
        >Customize Item1</a>
      </li>
      <li id="menuItems">
        <a
          id="drawerMenuItemLink"
          href="#costomizeSection"
          @click="closeMenu"
        >Customize Item2</a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  methods:{
    closeMenu(){
      this.$emit('sample')
    }
  }
}
</script>


<style scope>
  #drawerSection {
    height: auto;
    display: block;
    background: #fff;
  }

  #drawerButton {
    background-color: #f3f3f3;
    margin: 5px;
  }

  #menuSection #menuItems {
    background-color: #fff;
    width: 100%;
    height: 0 auto;
    height: 50px;
    border-bottom: 0.1px solid #000;
  }

  #drawerMenuItemLink {
    padding: 10px;
    color: #000;
    font-family: "Noto Sans Japanese", sans-serif;
    font-size: 15px;
    font-weight: bold;
    border-bottom: 2px solid #fff;
    display: block;
    text-decoration: none;
    position: relative;
    top: 10px;
  }

  li {
    display: block;
  }

  .closeButton {
    width: 20px;
    height: auto;
    float: right;
    margin: 10px;
  }
</style>
