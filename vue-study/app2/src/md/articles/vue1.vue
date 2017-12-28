<!--  -->
<template>
  <div>
    <ul v-for="item in projects" :key="item.id">
      <li v-html="item.content"></li>
    </ul>
    aa
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    projects() {
      console.log(this.$store.state.projects);
      return this.$store.getters.openProjects;
    }
  },
  mounted() {
    this.$store.dispatch('loadProjectList');
  },
  methods: {
  }
};
</script>
<style scoped>

</style>