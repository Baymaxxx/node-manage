<!-- studyLayout -->
<template>
  <div>
    <div class="link">
      <router-link to="/study/flex">flex</router-link>
      <router-link to="/study/chat">chat</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {}
}
</script>
<style lang='scss' scoped>
  .link{
    position: absolute;
  }
</style>