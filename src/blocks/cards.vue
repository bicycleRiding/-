<template>
  <el-row class="b-cards">
    <el-col :span="cardSpan" v-for="(card, i) in cards" :key="card.title">
      <el-card
        shadow="hover"
        class="b-card vivify popIn"
        :class="{ [`delay-${(i + 1) * 500}`]: true }"
      >
        <h3>{{ card.title }}</h3>
        <el-image :src="card.imgSrc" class="b-card-img" lazy>
          <template #placeholder>
            <LoadingOutlined class="b-card-load-icon" />
          </template>
        </el-image>

        <p>{{ card.text1 }}</p>
        <p>{{ card.text2 }}</p>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { ElRow, ElCol, ElCard } from "element-plus";
import { useIsMobileStatus } from "@u/mobile";
import { LoadingOutlined } from "@ant-design/icons-vue";

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
    LoadingOutlined,
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

.b-card-load-icon {
  font-size: 45px;
}
</style>