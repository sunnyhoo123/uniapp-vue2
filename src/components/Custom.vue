<template>
  <view>
    <view @tap="handleClick">
      <view @tap.stop="handleBottom">点击</view>
      <button type="primary" @click="handleBtn">点击我</button>
    </view>
  </view>
</template>

<script>
export default {
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
      latitude: 22.543096,
      longitude: 114.057865,
      name: "深圳",
      address: "广东省深圳市南山区",
    };
  },

  methods: {
    handleClick(event) {
      console.log("最外层", event);
    },
    handleBottom(event) {
      event.stopPropagation();
      console.log("点击了底部按钮", event);
    },
    handleBtn(event) {
      event.stopPropagation();
      console.log("点击了button按钮", event);
      //   小程序使用微信内置地图查看位置
      uni.openLocation({
        longitude: this.longitude,
        latitude: this.latitude,
        name: this.name,
        address: this.address,
      });
    },
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
