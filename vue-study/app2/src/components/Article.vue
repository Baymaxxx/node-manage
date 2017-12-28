<!--  -->
<template>
  <div>
      Article
      <router-link to="/article/vue1">vue1</router-link>
      <router-link to="/article/vue2">vue2</router-link>
      <router-link to="/article/vue3">vue3</router-link>
      <router-view></router-view>      
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {}
};
</script>
<style scoped lang="scss">
</style>