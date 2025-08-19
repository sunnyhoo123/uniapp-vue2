<template>
  <view class="vi-swiper-content">
    <swiper
      interval="3000"
      duration="500"
      previous-margin="50rpx"
      next-margin="50rpx"
      indicator-color="#999"
      indicator-active-color="#007aff"
      indicator-size="10rpx"
      indicator-dots
      circular
      @animationfinish="onAnimationfinish"
    >
      <swiper-item>
        <image :src="banner01" mode="aspectFit" />
      </swiper-item>
      <swiper-item>
        <image :src="banner02" mode="aspectFit" />
      </swiper-item>
      <swiper-item>
        <image :src="banner03" mode="aspectFit" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import Banner03 from "../static/800x350-03.jpg";

export default {
  props: {
    swiperList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      banner01: require("../static/800x350-01.jpg"),
      banner02: require("../static/800x350-02.jpeg"),
      banner03: Banner03,
    };
  },

  methods: {
    onAnimationfinish(e) {
      // console.log("current swiper index:", e.detail.current);
    },
  },
};
</script>

<style scoped lang="less">
.swiper-list {
  margin-top: 40rpx;
  margin-bottom: 0;
}
.uni-common-mt {
  margin-top: 60rpx;
  position: relative;
}
.info {
  position: absolute;
  right: 20rpx;
}
.uni-padding-wrap {
  width: 550rpx;
  padding: 0 100rpx;
}
</style>
