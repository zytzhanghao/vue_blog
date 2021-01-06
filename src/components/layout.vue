<!--  -->
<template>
  <div class=''>
    <h1>head</h1>
    <router-view v-if="refresh" />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      refresh: false
    };
  },
  methods: {

  },
  created() {
  this.refresh=true
  },
}
</script>
<style scoped>
</style>