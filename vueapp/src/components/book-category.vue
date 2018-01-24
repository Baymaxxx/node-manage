<!-- 图书分类 -->
<template>
    <div>
        <Header :hasNav='false' title='图书分类'></Header>
        <div>
            <button @click="savePlayHistory(openProjects)">保存</button>
            <button @click="delPlayHistory()">删除</button>
        </div>
        <template v-for="item in openProjects">
            <div class="content" v-html="item.content" :key="item.title"></div>
        </template>
    </div>
</template>

<script>
import { getInternetNews } from '@/api/news'
import { mapGetters, mapActions } from 'vuex'
import Header from './layout/header'

export default {
  data() {
    return {
      openProjects: []
    }
  },
  computed: {
    ...mapGetters(['playHistory'])
  },
  methods: {
    ...mapActions(['savePlayHistory', 'delPlayHistory'])
  },
  mounted() {
    getInternetNews().then(res => {
      this.openProjects = res
    })
  },
  components: {
    Header
  }
}
</script>
<style lang='scss' scoped>

</style>