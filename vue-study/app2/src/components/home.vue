<!--  -->
<template>
  <div class="page">
    <div class="all">{{allMoney | toMoney}}</div>
    <ul class="list">
      <li>{{allMoney*0.5 | toMoney}}</li>
      <li>{{allMoney*0.4 | toMoney}}</li>
      <li>{{allMoney*0.05 | toMoney}}</li>
      <li>{{allMoney*0.001 | toMoney}}</li>
      <li>{{allMoney*0.049 | toMoney}}</li>
    </ul>
    <div class="address">
      {{address}}
    </div>
    <div class="rank">{{rank}}</div>
    <ul class="list2">
      <li>{{allMoney*0.06 | toMoney}}</li>
      <li>{{allMoney*0.03 | toMoney}}</li>
      <li>{{allMoney*0.35 | toMoney}}</li>
    </ul>
    <ul class="list3">
      <li class="zhima">{{zhima[0]}}</li>
      <li class="aixin">{{zhima[1]}}</li>
      <li class="huanbao">{{zhima[2]}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allMoney: 2321214.92,
      address: '上海市， 浦东新区第1996名',
      rank: 99.94,
      zhima: [867, 52, 20.5]
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>
<style lang='scss' scoped>
.page {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('../assets/img/page1.jpg') no-repeat;
  background-size: 100% 100%;
  .all {
    position: absolute;
    top: 95px;
    right: 110px;
    color: #108ee9;
    font-size: 20px;
    font-weight: bold;
  }
  .list {
    position: absolute;
    top: 147px;
    right: 38px;
    font-size: 14px;
    text-align: right;
    color: #737373;
    li {
      line-height: 1.94;
    }
  }
  .address {
    position: absolute;
    top: 305px;
    left: 0;
    width: 100%;
    text-align: center;
    color: #108ee9;
    font-size: 16px;
    font-weight: bold;
  }
  .rank {
    position: absolute;
    top: 333px;
    left: 174px;
    color: #7b7b7b;
    font-size: 11px;
  }
  .list2 {
    position: absolute;
    top: 427px;
    left: 20px;
    font-size: 10px;
    text-align: right;
    color: #737373;
    li {
      &:last-child {
        margin-right: 0;
      }
      float: left;
      width: 112px;
      text-align: center;
    }
  }
  .list3 {
    position: absolute;
    top: 478px;
    left: 145px;
    font-size: 10px;
    text-align: right;
    color: #737373;
    li {
      width: 50px;
      text-align: center;
      &.aixin {
        position: relative;
        left: -3px;
        top: 18px;
      }
      &.huanbao {
        position: relative;
        left: 52px;
        top: 37px;
      }
    }
  }
}
</style>