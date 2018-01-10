<!-- flex布局实战:https://segmentfault.com/a/1190000008823763#articleHeader6 -->

<template>
    <div>
        <div class="btn-red"></div>
        <div class="btn-blue"></div>
        <div class="parent">
            <div class="child"></div>
        </div>
        <div class="flex-container">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
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
/* scss placehold */
%box {
  width: 100px;
  height: 100px;
}

@mixin bgColor($backgroundColor) {
  background-color: $backgroundColor;
}

.btn-red {
  @extend %box;
  @include bgColor(red);
  width: 200px;
}
.btn-blue {
  @extend %box;
  @include bgColor(blue);
}
.parent {
  display: flex;
  //   justify-content: center;
  //   align-items: center;
  height: 300px;
  @include bgColor(#555);
  .child {
    margin: auto;
    @include bgColor(#369369);
    @extend %box;
  }
}
.flex-container {
  display: flex;
//   flex-direction: column;
    flex-wrap: nowrap; //默认拆行
    justify-content: space-between;
//   flex-flow: row wrap;
//   /* 然后我们定义在剩余空间上子元素如何排布 */
//   justify-content: space-around;
  .item {
      @extend %box;
      @include bgColor(#137137);
      &:first-child{
          flex: 1;
           @include bgColor(#333);
      }
      &:nth-child(2) {
            flex: 2;
           @include bgColor(#999);
      }
      &:nth-child(3) {
            flex: 1;
           @include bgColor(#777);
      }
  }
}
</style>