<!--  -->
<template>
  <div>
    <div>
      <img alt="互联网简讯" src="https://pic2.zhimg.com/v2-aee5ad9ffb0bd5bc721630360ebeb75b_r.jpg" class="" height="220px"></div>
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <li class="content" v-for="item in projects" :key="item.id" v-html="item.content"></li>
    </ul>
    <!-- <router-link to="/article/vue1">by baymaxxx</router-link> -->
  </div>
</template>

<script>
import Vue from 'Vue'
import { InfiniteScroll } from 'mint-ui'

Vue.use(InfiniteScroll)
export default {
  data() {
    return {}
  },
  components: {},
  computed: {
    projects() {
      console.log(this.$store.state.projects)
      return this.$store.getters.openProjects
    }
  },
  methods: {
    loadMore() {
      this.loading = true
      setTimeout(() => {
        // let last = this.list[this.list.length - 1]
        // for (let i = 1; i <= 10; i++) {
        //   this.list.push(last + i)
        // }
        this.loading = false
      }, 2500)
    }
  },
  mounted() {
    this.$store.dispatch('loadProjectList')
  }
}
</script>
<style lang="scss">
li.content {
  padding: 0 16px;
  margin: 24px 0 30px;
  text-align: left;
  blockquote {
    &:first-child,
    &:last-of-type{
      display: none;
    }
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  img {
    display: none;
  }
  p {
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 1.7;
  }
}
</style>