<template>
  <view class="content">
    <!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
    <view>
      <view class="uni-margin-wrap">
        <swiper
          class="swiper"
          circular
          :indicator-dots="indicatorDots"
          :autoplay="autoplay"
          :interval="interval"
          :duration="duration"
        >
          <swiper-item>
            <view class="swiper-item uni-bg-red">A</view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item uni-bg-green">B</view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item uni-bg-blue">C</view>
          </swiper-item>
        </swiper>
      </view>
    </view>

    <swiper
      class="logo"
      autoplay
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
        <image :src="Img" mode="aspectFit" />
      </swiper-item>
      <swiper-item>
        <image
          src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
          mode="aspectFill"
        />
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import Img from "@/static/cat.jpeg";
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
    };
  },

  methods: {
    onAnimationfinish(e) {
      console.log("current swiper index:", e.detail.current);
    },
  },
};
</script>

<style scoped>
.uni-margin-wrap {
  width: 690rpx;
  /* width: 100%; */
}
.swiper {
  height: 300rpx;
}
.swiper-item {
  display: block;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
}
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
.uni-bg-red {
  background-color: #ff4544;
}
.uni-bg-green {
  background-color: #00ff00;
}
.uni-bg-blue {
  background-color: #007aff;
}
</style>
