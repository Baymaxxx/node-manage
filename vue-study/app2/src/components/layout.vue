<!-- 入口layout -->
<template>
  <div class="layout-wrap">
    <p class="tc" @click="changeDagger">{{dagger}}</p>
    <section class="menu">
      <Menu></Menu>
    </section>
    <section class="content-container">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Menu from './layout/menu'
import Todo from './templates/todo'

export default {
  data() {
    return {}
  },
  components: {
    Menu,
    Todo
  },
  computed: {
    dagger() {
      return this.$store.getters.showDagger
    }
  },
  methods: {
    changeDagger() {
      this.$store.dispatch('changeDagger')
    }
  }
}
</script>
<style lang='scss' scoped>
.layout-wrap {
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 10px;
  overflow: hidden;
  width: auto;
  height: auto;
  @include gradient(#315481, #918e82);
  .menu {
    position: absolute;
    left: 100px;
  }
  .content-container {
    position: absolute;
    left: 400px;
    height: 100%;
  }
}
</style>