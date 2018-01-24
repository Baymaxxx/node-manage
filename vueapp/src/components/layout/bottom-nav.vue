<!-- 底部导航 -->
<template>
    <div class="bottom-nav">
        <ul>
            <li>
                <router-link to="/shelf">
                    <i class="iconfont icon-shu"></i>
                    <p>书架</p>
                </router-link>
            </li>
            <li>
                <router-link to="/feature">
                    <i class="iconfont icon-jingpin"></i>
                    <p>精选</p>
                </router-link>
            </li>
            <li>

                <router-link to="/category">
                    <i class="iconfont icon-fenlei"></i>
                    <p>分类</p>
                </router-link>
            </li>
            <li>
                <router-link to="/rank">
                    <i class="iconfont icon-paixingbang"></i>
                    <p>排行</p>
                </router-link>
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
      border-right: 1px solid $color-border;
      border-top: 1px solid $color-border;
      &:last-child {
        border-right: none;
      }
      .router-link-active {
          color: $color-header;
      }
    }
  }
}
</style>