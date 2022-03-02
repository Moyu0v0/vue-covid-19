<template>
  <div class="info">
    <p class="title">
      <i></i>
      最新消息
    </p>
    <van-collapse v-model="activeNames">
      <van-collapse-item
        v-for="(item, index) in news"
        :name="index + 1"
        :key="item.id"
        class="item"
      >
        <template #title>
          <div>
            <van-tag round type="warning">{{ item.pubDateStr }}</van-tag>
            {{ item.title }}
          </div>
        </template>
        <a :href="item.sourceUrl">{{ item.summary }}</a></van-collapse-item
      >
    </van-collapse>
  </div>
</template>

<script>
export default {
  name: "News",
  props: ["news"],
  data() {
    return {
      activeNames: ["1"],
    };
  },
};
</script>

<style scoped>
.info {
  padding: 0.16rem;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
}
.title {
  font-size: 0.17rem;
}

.title i {
  display: inline-block;
  width: 0.04rem;
  height: 0.16rem;
  margin-right: 0.03rem;
  vertical-align: middle;
  background: #4169e2;
}
</style>
