<template>
  <div id="headerSection">
    <div id="headerButton">
    <button @click="toggle" ><img assets = "_i_icon_12585_icon_125850_256.png" ></button>
    <Drawer @close="toggle" align="left" :closeable="true">
    <div v-if="open">menu</div>
    </Drawer>
    </div>
  </div>

</template>

<script>
import Drawer from "vue-simple-drawer";
 
export default {
  name: "App",
  components: {
    Drawer
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
  width:100%;
  height: auto;
  display: block;
}

</style>