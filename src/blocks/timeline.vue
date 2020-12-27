<template>
  <section class="b-timeline">
    <el-timeline>
      <el-timeline-item
        :color="item.color || '#4FC3F7'"
        :timestamp="item.time"
        placement="top"
        v-for="(item, i) of timeLineInfo"
        :key="i"
      >
        <el-card
          class="vivify popIn"
          :class="{ [`delay-${(i + 1) * 500}`]: true }"
        >
          <a-collapse
            default-active-key="0"
            expandIconPosition="right"
            :bordered="false"
          >
            <a-collapse-panel
              key="1"
              :header="item.title"
              :show-arrow="!!item.text"
              class="collapse-panel"
              :style="customStyle"
            >
              <p>{{ item.text }}</p>
            </a-collapse-panel>
          </a-collapse>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </section>
</template>

<script>
import { ElTimeline, ElTimelineItem } from "element-plus";
import { Collapse } from "ant-design-vue";
export default {
  components: {
    ElTimeline,
    ElTimelineItem,
    aCollapse: Collapse,
    aCollapsePanel: Collapse.Panel,
  },
  props: {
    timeLineInfo: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {
      customStyle:
        "background: #ECEFF1;border-radius: 4px;border: 0;overflow: hidden;",
    };
  },
};
</script>

<style scoped>
.b-timeline {
  width: 80%;
  margin: 5px auto;
}

.b-timeline-text {
  color: #546e7a;
}
</style>