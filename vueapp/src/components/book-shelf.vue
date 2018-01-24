<!-- 我的书架 -->
<template>
    <div class="shelf">
        <Header :hasNav='false' title='我的书架'></Header>
        <div class="content">
            <router-link to="/feature">
                <div class="inner clearfix">
                    <i class="iconfont icon-tianjiaadd142"></i>
                    <p>快去添加你喜欢的小说吧！</p>
                </div>
            </router-link>
        </div>
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
.shelf {
  .content {
    .inner {
      @include center();
      .iconfont {
        width: 400px;
        font-size: 260px;
        color: #999;
      }
      p {
        margin-top: 120px;
        font-size: 30px;
      }
    }
  }
}
</style>