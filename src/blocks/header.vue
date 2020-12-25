<template>
  <a-page-header class="b-header" :showTransparent="showTransparent">
    <template #title>
      <h1 class="b-header-title vivify swoopInTop" @click="title.handle">
        <a-avatar :src="avatarSrc" />
        {{ title.text }}
      </h1>
    </template>

    <template #extra>
      <ul class="b-header-menu">
        <li v-for="item of menu" :key="item.name">
          <a-button :type="item.type" @click="item.handle">
            <component :is="item.icon.displayName"></component
            >{{ item.name }}</a-button
          >
        </li>
      </ul>
    </template>
  </a-page-header>
</template>

<script>
import { PageHeader } from "ant-design-vue";
import { useGlobalScorlledStatus } from "@u/event.js";
import { bHeaderConfig } from "@vp/config.js";
import { useDynamicComponents } from "@u/component.js";

const { menu, avatarSrc, title } = bHeaderConfig;
const bHeaderComponent = {
  components: {
    aPageHeader: PageHeader,
  },
  setup() {
    const showTransparent = useGlobalScorlledStatus();

    return {
      showTransparent,
      avatarSrc,
      menu,
      title,
    };
  },
};

const handleIcons = (item) => item.icon || (item.icon = {});
const IconComponents = menu.map(handleIcons);
useDynamicComponents(bHeaderComponent, IconComponents);

export default bHeaderComponent;
</script>

<style scoped>
.b-header {
  position: sticky;
  top: 0;
  padding: 5px 10px;
  z-index: 99;
  transition: all 0.3s ease-in-out;
}

.b-header:hover {
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
}

.b-header[showTransparent="true"] {
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
}

.b-header-title {
  font-size: 18px;
  padding: 3px 10px;
  border-radius: 2px;
  font-weight: 500;
  background-color: #f1f8e9;
  border: 2px solid #c8e6c9;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.b-header-title:hover {
  color: #fff;
  border: 2px solid #90a4ae;
  background-color: #c5e1a5;
  transition: all 0.5s ease-in-out;
}

.b-header-menu {
  display: flex;
  margin-top: 5px;
}

.b-header-menu > li {
  margin: 0 5px;
}
</style>