<!-- 底部导航 -->
<template>
    <div class="bottom-nav">
        <ul>
            <li>
                <i class="iconfont icon-suo"></i>
                <p>书架</p>
            </li>
            <li>
                <i class="iconfont icon-suo"></i>
                <p>精选</p>
            </li>
            <li>
                <i class="iconfont icon-suo"></i>
                <p>分类</p>
            </li>
            <li>
                <i class="iconfont icon-suo"></i>
                <p>排行</p>
            </li>
        </ul>
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
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  ul {
    display: flex;
    li {
      padding: 10px 0;
      flex: 1;
      border-right: 1px solid #e2e2e2;
      &:last-child{
          border-right: none;
      }
    }
  }
}
</style>