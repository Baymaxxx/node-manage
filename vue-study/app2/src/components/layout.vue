<!-- 入口layout -->
<template>
  <div class="layout-wrap">
    <p class="tc" @click="changeDagger">{{dagger}}</p>
    <section class="menu animated shake">
      <Menu></Menu>
      <input type="text" v-focus>
    </section>
    <section class="content-container">
      <transition name="fade">
        <router-view v-if="!show"></router-view>
      </transition>
    </section>
    <button v-on:click="show = !show">
      toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Menu from './layout/menu'
import Todo from './templates/todo'
import Sidebar from './layout/sidebar'

export default {
  data() {
    return {
      show: false
    }
  },
  components: {
    Menu,
    Todo,
    Sidebar
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>