<!--  -->
<template>
  <div class=''>
    <div id="parent">
      <div id="center">
        <div class="main">
          <div class="userImg">
            <img src="@/assets/logo.png"
                 class="logoImg">
          </div>
          <div class="textContent">
            <div class="mainText"></div>
            <div class="message"></div>
          </div>
        </div>
      </div>
      <div id="left"></div>
      <div id="right"></div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {

    };
  },
  methods: {

  },
  created() {

  },
}
</script>
<style scope>
.mainText {
  background-color: azure;
  border: 2px;
  border-color: #424141;
  border-style: solid;
}
.message {
  min-height: 50px;
  background-color: bisque;
  position: absolute;
  bottom: 0px;
  width: 100%;
}
.logoImg {
  width: 50px;
  height: 50px;
  float: right;
}
.userImg {
  position: relative;
  width: 150px;
  height: 200px;
  display: inline-block;
}
.textContent {
  margin: 10 20 10 20px;
  background-color: aqua;
  width: 1000px;
  min-width: 200px;
  min-height: 200px;
  display: inline-block;
  position: relative;
}
.menu {
  top: 10px;
  left: 800px;
  position: absolute;
}
.menu a {
  margin: 0 50px;
}
#parent {
  /* 对应的是left元素的宽度 */
  margin-left: 300px;
  /* 对应的是right元素的宽度 */
  margin-right: 300px;
}

#left,
#center,
#right {
  height: 800px;
  float: left;
}

#left,
#right {
  width: 300px;
}

#left {
  /* 将当前元素从当前行，移动上一行同一个位置 */
  margin-left: -100%;
  position: relative;
  /* 将当前元素移动到理想位置 */
  left: -300px;
}

#center {
  /* 为父级元素宽度的100% */
  width: 100%;
}

#right {
  margin-left: -300px;
  position: relative;
  right: -300px;
}
</style>