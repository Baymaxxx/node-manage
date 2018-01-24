<template>
  <div class="hello hasbottomnav hasheader">
    <router-view></router-view>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from './layout/bottom-nav'

export default {
  name: 'hello',
  components: {
    BottomNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.content {
  text-align: left;
}
</style>
