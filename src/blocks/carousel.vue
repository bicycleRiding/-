<template>
  <el-carousel class="b-carousel" height="400px" direction="vertical">
    <el-carousel-item v-for="item in imgs" :key="item.src">
      <el-image
        style="height: 100%"
        class="b-carousel-load"
        fit="contain"
        :src="item.src"
      >
        <template #placeholder>
          <LoadingOutlined class="b-carousel-load-icon" />
        </template>
      </el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { ElCarousel, ElCarouselItem } from "element-plus";
import { LoadingOutlined } from "@ant-design/icons-vue";
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
    LoadingOutlined,
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
