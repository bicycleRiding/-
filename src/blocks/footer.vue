<template>
  <footer>
    <el-alert :title="title" center :closable="false"> </el-alert>
  </footer>
</template>

<script>
import { ElAlert } from "element-plus";
export default {
  props: {
    title: String,
  },
  components: {
    ElAlert,
  },
};
</script>