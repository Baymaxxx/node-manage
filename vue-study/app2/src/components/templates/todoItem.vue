<!-- todoItem -->
<template>
    <div class="todo-item-wrap">
        <i class="iconfont icon-checkbox" :class="{'icon-checkbox1':item.checked}"></i>
        <input type="text" class="text" placeholder="ddd" v-model="item.text">
        <i class="iconfont" :class="{'icon-del': item.isDelete}"></i>
    </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.todo-item-wrap {
  padding: 30px 0 15px 10px;
  .icon-checkbox1,.icon-checkbox {
    float: left;
    margin-left: 10px;
    width: 30px;
    cursor: pointer;
  }
  .text {
    float: left;
    width: 80%;
    background: transparent;
    outline: none;
    border: none;
  }
  .icon-del {
    float: right;
    width: 5%;
    cursor: pointer;
  }
}
</style>