<template>
  <div class="hello">
    <template v-for="item in openProjects">
      <div class="content" v-html="item.content" :key="item.title"></div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'hello',
  data() {
    return {}
  },
  methods: {
    ...mapActions(['loadProjectList']),
    aaa() {
      alert(1)
    }
  },
  mounted() {
    this.$store.dispatch('loadProjectList')
  },
  computed: {
    ...mapGetters(['openProjects', 'getCount'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.content {
  text-align: left;
}
</style>
