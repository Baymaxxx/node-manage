<!-- 菜单组件 -->
<template>
    <div class="container">
        <ul class="menu-list">
            <li @click="goList(item.id)" :class="{'active': item.id == selectedTodoId}" v-for="(item, index) in items" :key="index">
                <div class="icon-suo-wrap">
                    <i class="iconfont icon-suo" v-if="item.locked"></i>
                </div>
                <span class="text">{{item.title}}</span>
                <span class="mark-num">{{item.record.length}}</span>
            </li>
        </ul>
        <div class="add-btn">
            <a href="javascript:;" @click="addTodoList()">+ 新增</a>
        </div>
    </div>
</template>

<script>
import { getTodoList, addTodo } from '@/server/todo'
export default {
  data() {
    return {
      items: [], // 菜单数据
      selectedTodoId: ''
    }
  },
  created() {
    getTodoList({}).then(res => {
      this.items = res.data.todos
      console.log(res.data)
      const TODOS = res.data.todos
      this.$nextTick(() => {
        this.goList(TODOS[TODOS.length - 1].id);
      });
    })
  },
  components: {},
  computed: {},
  watch: {
    'selectedTodoId'(id) {
      this.$router.push({ name: 'todo', params: { id: id } })
    }
  },
  methods: {
    addTodoList() {
      const TODOS = {
        id: Math.random() + '',
        title: 'newTodo',
        isDelete: false,
        locked: false,
        record: []
      }
      addTodo(TODOS).then(data => {
        this.items.push(TODOS)
        this.selectedTodoId = this.items[this.items.length - 1].id
      })
    },
    goList(id) {
      this.selectedTodoId = id
    }
  }
}
</script>
<style lang='scss' scoped>
.container {
  width: 270px;
  color: #fff;
  text-align: left;
  .menu-list {
    li {
      padding: 0 20px;
      height: 45px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.26);
      opacity: 0.5;
      &.active,
      &:hover {
        opacity: 1;
        .mark-num {
          background: $color-default;
        }
      }
      .icon-suo-wrap {
        float: left;
        width: 16px;
        height: 16px;
        line-height: 45px;
        margin-right: 10px;
      }
      .text {
        display: inline-block;
        width: 180px;
        line-height: 45px;
        font-size: 16px;
        @include ell();
      }
      .mark-num {
        float: right;
        margin-top: 13px;
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        text-align: center;
        border-radius: 50%;
        background: $color-complementary;
      }
    }
  }
  .add-btn {
    margin-top: 20px;
    display: inline-block;
    width: 270px;
    text-align: center;
    color: $color-default;
  }
}
</style>