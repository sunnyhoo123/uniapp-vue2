<template>
  <!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
  <view class="uni-margin-wrap">
    <swiper
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
</template>

<script>
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
    // onAnimationfinish(e) {
    //   console.log("current swiper index:", e.detail.current);
    // },
  },
};
</script>

<style scoped>
.uni-margin-wrap {
  width: 690rpx;
  width: 100%;
}
.swiper-item {
  display: block;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
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
