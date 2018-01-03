<!-- 入口layout -->
<template>
  <div class="container">
    <section class="menu"><Menu></Menu></section>
    <section class="content-container"></section>
  </div>
</template>

<script>
import Menu from './layout/menu'
export default {
  data() {
    return {}
  },
  components: {
    Menu
  },
  computed: {},
  methods: {}
}
</script>
<style lang='scss' scoped>
@import '../assets/css/util.scss';
.container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: auto;
  height: auto;
  @include gradient(#315481, #918e82);
  .menu{
    position: absolute;
    left: 100px;
  }
  .content-container {
  }
}
</style>