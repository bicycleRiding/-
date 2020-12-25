<template>
  <el-carousel class="b-carousel" height="400px" direction="vertical">
    <el-carousel-item v-for="item in imgs" :key="item.src">
      <el-image style="height: 100%" fit="contain" :src="item.src"> </el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { ElCarousel, ElCarouselItem } from "element-plus";

export default {
  props: {
    imgs: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ElCarousel,
    ElCarouselItem,
  },
};
</script>
<style scoped>
.b-carousel {
  margin: 10px 0;
}

.el-carousel__item {
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
