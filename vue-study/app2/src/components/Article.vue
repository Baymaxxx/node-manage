<!--  -->
<template>
  <div class="red">
      Article
      <router-link to="vue1">vue1</router-link>
      <router-link to="vue2">vue2</router-link>
      <router-link to="vue3">vue3</router-link>
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
  mounted: {},
  methods: {}
};
</script>
<style scoped lang="scss">
.red {
  display: flex;
  color: red;
}
</style>