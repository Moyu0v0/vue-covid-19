<template>
  <van-row gutter="1" class="container">
    <van-col span="24" class="content"
      >积极防护，保护自己，戴口罩，勤洗手</van-col
    >
  </van-row>
</template>

<script>
export default {
  name: "Note",
};
</script>

<style scoped lang="less">
.container {
  height: 35px;
  margin: 5px 0;
  background-color: #277ff1;
  border-radius: 10px;
  .content {
    line-height: 35px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>