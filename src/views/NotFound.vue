<template>
  <main class="not-found will-change-contents">
    <a-empty class="vivify swoopInTop">
      <template #description>
        <span> 无此页面 </span>
      </template>
      <a-button
        type="primary"
        @click="goHomePage"
        class="vivify spinIn delay-500"
      >
        回到首页
      </a-button>
    </a-empty>
  </main>
</template>

<script>
import { Empty } from "ant-design-vue";
import { useRouteNameToPage } from "@u/router.js";
export default {
  components: {
    aEmpty: Empty,
  },
  setup() {
    const goHomePage = useRouteNameToPage("首页");
    return {
      goHomePage,
    };
  },
};
</script>

<style scoped>
.not-found {
  margin: 20px;
  padding: 10px;
}
</style>