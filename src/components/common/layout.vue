<!--  -->
<template>
  <div class="">
    <div class="header">
      <div class="logo">
        <img src="@/assets/logo.png"
             class="logoImg">
      </div>
      <div class="menu">
        <a>主页</a>
        <a>发布文章</a>
      </div>
    </div>
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
    this.refresh = true
  },
}
</script>
<style scope>
.logoImg {
  width: 50px;
  height: 50px;
  float: right;
}
.menu {
  top: 10px;
  left: 800px;
  position: absolute;
}
.menu a {
  margin: 0 50px;
}
.header {
  position: relative;
  height: 100px;
  background: #525255;
}
</style>