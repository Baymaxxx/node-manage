<!-- header -->
<template>
  <div class="header">
    <h3 class="title" :class="[hasNav ? 'left' : 'center']">{{title}}</h3>
    <nav v-if="hasNav" class="nav">
      <ul>
        <li :class="{'active': usersex === 'man'}" @click="changeUserSex('man')">男生</li>
        <li :class="{'active': usersex !== 'man'}" @click="changeUserSex('femen')">女生</li>
      </ul>
    </nav>
    <div v-show="hasSeach" class="search">
      <a>
        <i class="iconfont icon-search"></i>
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    hasNav: {
      type: Boolean,
      default: false
    },
    hasSeach: {
      type: Boolean,
      default: true
    },
    title: String
  },
  data() {
    return {}
  },
  components: {},
  computed: {
    ...mapGetters(['usersex'])
  },
  methods: {
    ...mapActions(['changeUserSex'])
  }
}
</script>
<style lang='scss' scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: $h-header;
  color: #fff;
  background-color: $color-header;
  .title {
    &.left {
      position: absolute;
      top: 20px;
      left: 15px;
      font-size: 36px;
    }
    &.center {
      font-size: 40px;
      line-height: $h-header;
    }
  }
  .nav {
    ul {
      display: flex;
      margin: 17px auto;
      width: 200px;
      border: 1px solid #fff; /*px*/
      border-radius: 6px; /*no*/
      li {
        padding: 8px 10px;
        &:first-child {
          border-radius: 6px 0 0 6px; /*no*/
        }
        &:last-child {
          border-radius: 0 6px 6px 0; /*no*/
        }
        width: 50%;
        &.active {
          background-color: #fff;
          color: $color-header;
        }
      }
    }
  }
  .search {
    position: absolute;
    top: 24px;
    right: 0;
    a {
      padding: 20px;
      .iconfont {
        color: #fff;
      }
    }
  }
}
</style>