<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
      <image
        src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
        mode=""
        :show-menu-by-longpress="true"
      ></image>
      <view>长按识别微信3</view>
      <button type="primary" @click="handleClick">点击我</button>
    </view>
    <input :adjust-position="true" placeholder="请输入" ></input>
    <view class="width-fit">
      <SwiperA></SwiperA>
      <!-- <ViSwiper></ViSwiper> -->
      <ViSwiperPlus></ViSwiperPlus>
      <Custom></Custom>
    </view>
  </view>
</template>

<script>
import SwiperA from "../../components/SwiperA.vue";
import ViSwiper from "../../components/ViSwiper.vue";
import ViSwiperPlus from "../../components/ViSwiperPlus.vue";
import Custom from "../../components/Custom.vue";

export default {
  components: {
    ViSwiper,
    ViSwiperPlus,
    SwiperA,
    Custom,
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

/* .width-fit {
  width: 100%;
} */
</style>
