<template>
  <main class="product">
    <b-card-carousel :imgs="carouselImgs" />
    <el-divider />
    <section class="product-introduction">
      <el-tabs type="border-card">
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-goods"></i> 热销产品</span>
          </template>
          <b-cards
            :cards="productCards"
            :span-num="3"
            :mobile-span-num="1"
            shadow="always"
            :lazy="false"
            :hasSpaceDelay="false"
            animationType="unfold"
          />
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-collection-tag"></i> 服务</span>
          </template>
          <b-cards
            :cards="serviceCards"
            :span-num="3"
            :mobile-span-num="1"
            shadow="always"
            :lazy="false"
            :hasSpaceDelay="false"
            animationType="unfold"
          />
        </el-tab-pane>
      </el-tabs>
    </section>
  </main>
</template>

<script>
import bCardCarousel from "@b/card-carousel.vue";
import bCards from "@b/cards.vue";
import { ElDivider, ElTabPane, ElTabs } from "element-plus";

import { productViewConfig } from "@vp/config.js";
export default {
  components: {
    bCardCarousel,
    ElDivider,
    bCards,
    ElTabPane,
    ElTabs,
  },
  setup() {
    const { carouselImgs, productCards, serviceCards } = productViewConfig;
    return {
      carouselImgs,
      productCards,
      serviceCards,
    };
  },
};
</script>

<style>
.product {
  padding: 10px;
  margin: 10px 0;
}

.product-introduction {
  border-radius: 4px;
  background-color: #ffffff;
}
</style>