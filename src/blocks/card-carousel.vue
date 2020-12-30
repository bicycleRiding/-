<template>
  <el-carousel
    :interval="2500"
    :type="carouselType"
    :height="carouselHeight"
    class="vivify pulsate"
  >
    <el-carousel-item
      v-for="item in imgs"
      :key="item.src"
      class="b-carousel-item"
    >
      <el-image style="height: 100%" :src="item.src" class="b-carousel-load">
        <template #placeholder>
          <LoadingOutlined class="b-carousel-load-icon" />
        </template>
      </el-image>
    </el-carousel-item>
  </el-carousel>
</template>


<script>
import { LoadingOutlined } from "@ant-design/icons-vue";
import { useIsMobileStatus } from "@u/mobile";
export default {
  components: {
    LoadingOutlined,
  },
  props: {
    imgs: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const isMobile = useIsMobileStatus();
    const carouselHeight = isMobile ? "280px" : "400px";
    const carouselType = isMobile ? "" : "card";
    return {
      carouselHeight,
      carouselType,
    };
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ffffff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ffffff;
}

.b-carousel-item {
  padding: 5px;
  border-radius: 5px;
  text-align: center;
}

.b-carousel-load {
  width: 100%;
  height: 100%;
  position: relative;
}

.b-carousel-load-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
}
</style>