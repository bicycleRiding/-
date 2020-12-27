<template>
  <main class="contact">
    <el-table :data="tableInfo" stripe border style="border-radius: 4px">
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        v-for="item of tableConfig"
        :key="item.prop"
      >
      </el-table-column>
    </el-table>
  </main>
</template>

<script>
import { ElTable, ElTableColumn } from "element-plus";
import { contactViewConfig } from "@vp/config.js";
export default {
  components: { ElTable, ElTableColumn },
  setup() {
    const { tableInfo, tableConfig } = contactViewConfig;

    return {
      tableInfo,
      tableConfig,
    };
  },
};
</script>

<style scoped>
.contact {
  padding: 10px;
  margin: 20px 0;
  background-color: #cfd8dc;
}
</style>
