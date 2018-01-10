<template>
    <div class="sidebar">
        <ul class="sidebar-menu ">`
            <template v-for="(item ,index) in menulist">
                <li :class="currentUrl === item.menuUrl ? 'active':''" :key="index">
                    <template v-if="item.menuUrl">
                        <router-link :to="item.menuUrl" @click.native="toggleName=''">
                            <i :class="['fzicon',item.menuIcon]"></i>
                            <span>{{item.menuName}}</span>
                        </router-link>
                    </template>
                    <template v-else-if="item.menuSubLink">
                        <a href="javascript:;" @click="isToggle(item.menuName,item.defaultActive)">
                            <i :class="['fzicon',item.menuIcon]"></i>
                            <span>{{item.menuName}}</span>
                            <i class="trangle" :class="[config.iconfont, (item.menuName === toggleName) || item.defaultActive? config.icon_expand: config.icon_collapse]">
                            </i>
                        </a>
                        <transition name="sliderToggle" mode="out-in">
                            <ul class="tree-menu" v-show="item.menuName === toggleName || item.defaultActive">
                                <li v-for="(subitem, index) in item.menuSubLink" :key="index" :class="currentUrl === subitem.menuUrl ? 'active':''">
                                    <router-link :to="subitem.menuUrl">
                                        <i :class="subitem.menuIcon"></i>
                                        <span>{{subitem.menuName}}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </transition>
                    </template>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import { MENULIST } from '@/assets/js/menuList' // 引入的自定义菜单数据
export default {
  name: 'layout-sidebar',
  data: function() {
    return {
      menulist: MENULIST, // 自定义菜单数据
      currentUrl: '', // 当前浏览器的url
      toggleName: '', // 菜单子项目名称
      config: {
        iconfont: 'fzicon', // iconfont的字体
        icon_collapse: 'fz-ad-jiantou', // 箭头
        icon_expand: 'fz-ad-jiantou1' // 箭头
      }
    }
  },
  props: ['toggle', 'padMode'], // 这里是用来构成布局响应传递的props,单一组件不用管他
  watch: {
    $route() {
      this.currentUrl = this.$route.fullPath // 实时监测当前路由的变化并且赋值
    }
  },
  methods: {
    isToggle(name, defaultActive) {
      this.clearDefaultActive() // 清除标记位,是否当前为默认展开
      defaultActive
        ? false
        : name !== this.toggleName
          ? (this.toggleName = name)
          : (this.toggleName = '') // 判断展开收缩的核心
    },
    clearDefaultActive() {
      this.menulist.forEach(item => {
        this.$delete(item, 'defaultActive')
      })
    }
  },
  created: function() {
    this.currentUrl = this.$route.fullPath
    this.$nextTick(() => {
      this.menulist.forEach((item, index) => {
        // 增加标记位,判断当前url然后自动展开或者激活对应项(刷新默认展开当前url的项)
        if (!item.menuSubLink && item.menuUrl) {
          this.currentUrl === item.menuUrl
            ? this.$set(item, 'defaultActive', true)
            : ''
        } else {
          if (item.menuSubLink) {
            item.menuSubLink.forEach((subitem, index) => {
              this.currentUrl === subitem.menuUrl
                ? this.$set(item, 'defaultActive', true)
                : ''
            })
          }
        }
      })
    })
  },
  mounted: function() {}
}
</script>

<style scoped lang="scss">
// 自定义过渡效果
.sliderToggle-enter-active,
.sliderToggle-leave-active {
  transition: all 0.5s linear;
  height: 100%;
  height: auto;

  overflow: hidden;
}

.sliderToggle-enter,
.sliderToggle-leave-to {
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
  height: 0;
  opacity: 0;
}

// 侧边栏全局样式
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 68px;
  min-height: 100%;
  z-index: 810;
  transition: all 0.3s linear;
  background-color: #222d32;
  .sidebar-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    span {
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: #8aa4af;
      &:hover {
        color: #fff;
      }
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      white-space: nowrap;
      overflow: hidden;
    }
    > li {
      position: relative;
      margin: 0;
      padding: 0;
      text-align: left;
      &.active {
        color: #fff;
      }
      > a {
        border-left: 3px solid transparent;
        position: relative;
        padding: 15px 5px 15px 19px;
        display: block;
        font-size: 14px;
        > i {
          padding-right: 4px;
        }
        .trangle {
          float: right;
          padding-right: 10px;
        }
      }
      &.active {
        > a {
          border-left: 3px solid #3c8dbc;
          color: #fff;
        }
      }
      > .tree-menu {
        margin: 0 1px;
        background: #2c3b41;
        list-style: none;
        padding: 0;
        margin: 0;
        .tree-menu {
          padding-left: 20px;
        }
        > li {
          margin: 0;
          &.active {
            > a {
              border-left: 3px solid #3c8dbc;
              color: #fff;
            }
          }
          > a {
            padding: 15px 10px 15px 40px;
            display: block;
            font-size: 14px;
            border-left: 3px solid transparent;
          }
        }
        &.active {
          display: block;
        }
      }
    }
  }

  &.expand {
    width: 230px;
  }

  &.collapse {
    width: 50px;
    .sidebar-menu {
      > li {
        > a {
          padding: 15px 5px 15px 15px;
          span,
          i:last-child {
            display: none;
          }
        }
        .tree-menu {
          display: none;
        }
        &:hover {
          > a {
            display: block;
            span {
              display: block;
              position: absolute;
              left: 47px;
              width: 153px;
              padding: 15px 5px 15px 19px;
              background-color: #222d32;
              color: #fff;
              width: 177px;
              top: 0;
              border-radius: 0 5px 0 0;
            }
            i:last-child {
              display: inline-block;
              position: absolute;
              right: -165px;
              top: 50%;
              transform: translateY(-50%);
              color: #fff;
            }
          }
          > .tree-menu {
            display: block;
            position: absolute;
            left: 47px;
            width: 180px;
            background-color: #222d32;
            color: #fff;
            top: 46px;
            width: 180px;
            border-radius: 0 0 5px 5px;
          }
        }
      }
    }
  }
}
</style>
