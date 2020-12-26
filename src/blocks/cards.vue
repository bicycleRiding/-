<template>
  <el-row class="b-cards">
    <el-col :span="cardSpan" v-for="card in cards" :key="card.title">
      <el-card shadow="hover" class="b-card">
        <h3>{{ card.title }}</h3>
        <el-image :src="card.imgSrc" class="b-card-img"></el-image>
        <p>{{ card.text1 }}</p>
        <p>{{ card.text2 }}</p>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { ElRow, ElCol, ElCard } from "element-plus";
import { useIsMobileStatus } from "@u/mobile";

export default {
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
    spanNum: {
      type: Number,
      default: 0,
    },
  },
  components: {
    ElRow,
    ElCol,
    ElCard,
  },
  setup(props) {
    const spanNum = props.spanNum || props.cards.length;
    let cardSpan = Math.ceil(24 / spanNum);
    if (useIsMobileStatus()) {
      cardSpan = 24;
    }
    return {
      cardSpan,
    };
  },
};
</script>

<style scoped>
.b-card {
  margin: 10px 10px;
  text-align: center;
}

.b-card-img {
  border-radius: 4px;
}
</style>