<template>
  <el-row class="b-cards" :class="useGlobalAnimation()">
    <el-col :span="cardSpan" v-for="(card, i) in cards" :key="card.title">
      <el-card :shadow="shadow" class="b-card" :class="useLocalAnimation(i)">
        <h3>{{ card.title }}</h3>
        <el-image :src="card.imgSrc" class="b-card-img" :lazy="lazy">
          <template #placeholder>
            <LoadingOutlined class="b-card-load-icon" />
          </template>
        </el-image>

        <p>
          <el-tag
            v-for="tag of card.tags"
            :key="tag"
            :type="tag.type"
            :color="tag.color"
            style="margin-right: 10px; cursor: pointer"
            class="card-tag"
            :style="tag.style"
            @click="tag.handle"
            >{{ tag.text }}</el-tag
          >
        </p>

        <p>{{ card.text1 }}</p>
        <p :style="card.text2Style">{{ card.text2 }}</p>
        <p :style="card.text3Style">{{ card.text3 }}</p>
        <el-button
          :size="card.buttonSize || 'medium'"
          v-if="!!card.buttonText"
          :type="card.buttonType || 'danger'"
          :plain="card.buttonPlain || true"
          @click="card.handle"
          :icon="card.icon"
          >{{ card.buttonText }}</el-button
        >
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { ElRow, ElCol, ElCard, ElButton } from "element-plus";
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
    mobileSpanNum: {
      type: Number,
      default: 0,
    },
    shadow: {
      type: String,
      default: "hover",
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    localAnimation: {
      type: Boolean,
      default: true,
    },
    globalAnimation: {
      type: Boolean,
      default: false,
    },
    hasSpaceDelay: {
      type: Boolean,
      default: true,
    },
    animationType: {
      type: String,
      default: "popIn",
    },
  },
  components: {
    ElRow,
    ElCol,
    ElCard,
    LoadingOutlined,
    ElButton,
  },
  setup(props) {
    const spanNum = props.spanNum || props.cards.length;
    let cardSpan = Math.ceil(24 / spanNum);
    if (useIsMobileStatus()) {
      const mobileSpanNum = props.mobileSpanNum || 1;
      cardSpan = Math.ceil(24 / mobileSpanNum);
    }

    const useLocalAnimation = (i) => {
      const isApply = props.localAnimation;
      const isDelay = props.hasSpaceDelay;
      const animationType = props.animationType;
      return {
        [`delay-${(i + 1) * 500}`]: isApply && isDelay,
        [`delay-100`]: isApply && !isDelay,
        vivify: isApply,
        [animationType]: isApply,
      };
    };

    const useGlobalAnimation = () => {
      const isApply = props.globalAnimation;
      const animationType = props.animationType;
      return {
        vivify: isApply,
        [animationType]: isApply,
      };
    };

    return {
      cardSpan,
      useLocalAnimation,
      useGlobalAnimation,
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

.card-tag {
  transition: all 0.4s ease-in-out;
}

.card-tag:hover {
  background-color: #fff !important;
  transition: all 0.4s ease-in-out;
}
</style>