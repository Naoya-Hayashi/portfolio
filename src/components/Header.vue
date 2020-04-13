<template>
  <div id="headerSection">
    <img
      class="headerButton"
      src="../assets/_i_icon_12585_icon_125850_256.png"
      @click="toggle"
    >
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        <Menu />
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";

export default {
  name: "App",
  components: {
    Drawer,

  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";
</style>
<style scope>
  #headerSection {
    background-color: #f3f3f3;
    width: 100%;
    height: 40px;
    display: block;
  }

  .headerButton {
    width: 30px;
    height: auto;
    float: left;
    margin: 5px;
  }

</style>
