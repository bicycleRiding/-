<template>
  <b-header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
  <a-back-top />
</template>

<script>
import bHeader from "@b/header.vue";
import { BackTop } from "ant-design-vue";
export default {
  components: {
    bHeader,
    aBackTop: BackTop,
  },
};
</script>

<style>
@import url("./css/style.css");
</style>
