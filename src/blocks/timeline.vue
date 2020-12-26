<template>
  <section class="b-timeline">
    <el-timeline>
      <el-timeline-item color="#4FC3F7" timestamp="2018/4/12" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item color="#4DD0E1" timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item color="#4DB6AC" timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </section>
</template>

<script>
import { ElTimeline, ElTimelineItem } from "element-plus";
export default {
  components: {
    ElTimeline,
    ElTimelineItem,
  },
};
</script>

<style scoped>
.b-timeline {
  width: 80%;
  margin: 10px auto;
}
</style>