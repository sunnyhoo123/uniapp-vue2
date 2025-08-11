<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
      <button type="primary" @click="handleClick">点击我</button>
      <ViSwiper></ViSwiper>
    </view>
  </view>
</template>

<script>
import ViSwiper from "../../components/ViSwiper.vue";
export default {
  components: {
    ViSwiper,
  },
  data() {
    return {
      title: "Hello today",
    };
  },
  onLoad() {
    console.log("Page loaded", this.title);
  },
  methods: {
    handleClick() {
      console.log("Button clicked");
      uni.showModal({
        title: "提示",
        content: "这是一个模态弹窗",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
