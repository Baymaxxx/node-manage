<!--  -->
<template>
    <div class="todo-wrap">
        <div class="todo-header">
            <div class="title-wrap">
                <div class="header-left fl clearfix">
                    <h3 class="todo-title fl">{{todo.title}}</h3>
                    <span class="mark-num fl">{{todo.count}}</span>
                    <span class="mark-num fl">{{dagger}}</span>
                </div>
                <div class="header-right fr">
                    <i class="iconfont icon-suo"></i>
                    <i class="iconfont icon-del"></i>
                </div>
            </div>
            <div class="todo-input">
                <i class="iconfont icon-c_add"></i>
                <input type="text" placeholder="请输入">
            </div>
        </div>
        <div class="todo-body">
            <div v-for="item in items">
                <todoItem :item='item'></todoItem>
            </div>
        </div>
    </div>
</template>

<script>
import todoItem from './todoItem'
import { getTodoById } from '../../assets/js/api'

export default {
  data() {
    return {
      todo: {
        // 详情内容
        title: '星期一',
        count: 12,
        locked: false
      },
      items: [
        // 代办单项列表
        { checked: false, text: '新的一天1', isDelete: false },
        { checked: true, text: '新的一天2', isDelete: true },
        { checked: false, text: '新的一天3', isDelete: false }
      ],
      text: '' // 新增代办单项绑定的值
    }
  },
  components: {
    todoItem
  },
  watch: {
    '$route.params.id'() {
      this.init()
    }
  },
  computed: {
    dagger() {
      return this.$store.getters.showDagger
    }
  },
  methods: {
    init() {
      const ID = this.$route.params.id
      console.log(ID)
      getTodoById({ id: ID }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.todo-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  width: 800px;
  .todo-header {
    position: absolute;
    padding: 10px 20px;
    height: 80px;
    width: 100%;
    @include gradient(#d0edf5, #e1e5f0);
    .title-wrap {
      height: 40px;
      .todo-title {
        font-weight: bold;
        max-width: 500px;
        @include ell();
      }
      .mark-num {
        margin-left: 10px;
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        background: $color-default;
      }
    }
    .header-right {
      i {
        cursor: pointer;
        margin-right: 10px;
      }
    }
    .todo-input {
      input {
        background: transparent;
        padding-left: 10px;
        outline: none;
        border: none;
      }
    }
  }
  .todo-body {
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
    height: auto;
    background: #fff;
  }
}
</style>