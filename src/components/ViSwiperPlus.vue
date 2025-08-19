<template>
  <view class="v-banner" :style="[boxStyle]">
    <swiper
      class="v-swiper"
      indicator-dots
      circular
      @animationfinish="onAnimationfinish"
    >
      <swiper-item
        class="v-swiper-item"
        v-for="(url, index) in list"
        :key="index"
      >
        <image class="v-img" :src="url" mode="scaleToFill"></image>
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
  computed: {
    boxStyle() {
      return {
        backgroundImage: `url(${this.list[this.value]})`,
        // 开启background-image转场动画
        transition: "1s background-image",
      };
    },
    list() {
      return this.swiperList.length
        ? this.swiperList
        : [this.banner01, this.banner02, this.banner03];
    },
  },
  data() {
    return {
      value: 0,
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
      this.value = e.detail.current;
      console.log("current swiper index:", e.detail.current);
    },
  },
};
</script>

<style scoped lang="less">
/*less变量，用于动态计算*/
@swiperWidth: 650rpx;
@swiperHeight: 350rpx;
@verticalPadding: 60rpx;
@horizontalPadding: 50rpx;
@imgWidth: @swiperWidth + @horizontalPadding * 2;
@imgHeight: @swiperHeight + @verticalPadding * 2;

.v-banner {
  /* 因为需要根据内边距动态调节背景图宽高，所以设为行内块 */
  display: inline-block;
  // 背景图铺满容器
  background-size: 100% 100%;
  padding: @verticalPadding @horizontalPadding;
  .v-swiper {
    height: @swiperHeight;
    width: @swiperWidth;
    // 裁剪图片
    overflow: hidden;
    .v-swiper-item {
      .v-img {
        width: @imgWidth;
        height: @imgHeight;
        // 使两张图片重合
        margin-top: -@verticalPadding;
        margin-left: -@horizontalPadding;
      }
    }
  }
}
</style>
