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
      <swiper-item v-for="(item, index) in bannerList" :key="index">
        <view :class="['swiper-item', item.class]" @tap="handleClick">{{
          item.label
        }}</view>
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
  computed: {
    bannerList() {
      return this.swiperList.length ? this.swiperList : this.backgroundList;
    },
  },
  data() {
    return {
      backgroundList: [
        { value: "color1", label: "color1", class: "uni-bg-red" },
        { value: "color2", label: "color2", class: "uni-bg-green" },
        { value: "color3", label: "color3", class: "uni-bg-blue" },
      ],
      indicatorDots: true,
      autoplay: false,
      interval: 2000,
      duration: 500,
    };
  },

  methods: {
    handleClick(event) {
      const { item = {} } = event.currentTarget.dataset;
      const { item2 = {} } = event.target.dataset;
      console.log(
        "点击了轮播图",
        event.target,
        event.currentTarget,
        item,
        item2
      );
      uni.showToast({
        title: "点击了轮播图",
        icon: "none",
      });
    },
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
