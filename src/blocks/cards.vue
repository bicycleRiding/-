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

export default {
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ElRow,
    ElCol,
    ElCard,
  },
  setup(props) {
    const cardSpan = Math.ceil(24 / props.cards.length);

    return {
      cardSpan,
    };
  },
};
</script>

<style scoped>
.b-cards {
  margin: 20px 0;
}

.b-card {
  margin: 0 10px;
  text-align: center;
}

.b-card-img {
  border-radius: 4px;
}
</style>