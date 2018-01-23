<template>
  <div class="hello">
    <div>
      <button @click="savePlayHistory(openProjects)">保存</button>
      <button @click="delPlayHistory()">删除</button>
    </div>
    <template v-for="item in openProjects">
      <div class="content" v-html="item.content" :key="item.title"></div>
    </template>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
import { getInternetNews } from '@/api/news'
import { mapGetters, mapActions } from 'vuex'
import bottomNav from './layout/bottom-nav'

export default {
  name: 'hello',
  data() {
    return {
      openProjects: []
    }
  },
  computed: {
    ...mapGetters([
      'playHistory'
    ])
  },
  methods: {
    ...mapActions([
      'savePlayHistory',
      'delPlayHistory'
    ])
  },
  mounted() {
    getInternetNews().then(res => {
      this.openProjects = res
    })
  },
  components: {
    bottomNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.content {
  text-align: left;
}
</style>
