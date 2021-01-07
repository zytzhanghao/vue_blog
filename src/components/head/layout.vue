<!--  -->
<template>
  <div class=''>
    <el-header class="header">
      <div class="container">sadasdasdsdasdadasdasdawfewfwefwefw</div>
    </el-header>
    <div class="container">
    <router-view v-if="refresh" />
    </div>
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
    this.refresh = true
  },
}
</script>