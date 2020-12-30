<template>
  <a-page-header
    class="b-header will-change-contents"
    :showTransparent="showTransparent"
  >
    <template #title>
      <h1 class="b-header-title vivify swoopInTop" @click="title.handle">
        <a-avatar :src="avatarSrc" />
        {{ title.text }}
      </h1>
    </template>

    <template #subTitle>
      <ContainerTwoTone
        twoToneColor="#52c41a"
        class="b-mobile-icon vivify swoopInTop"
        v-if="isMobile"
        @click="shoMobileDrawer"
      />
    </template>

    <a-drawer
      title="目录导航"
      placement="right"
      :closable="false"
      width="200"
      v-model:visible="mobileDrawerVisible"
    >
      <ul>
        <li v-for="item of menu" :key="item.name">
          <a-button
            :type="item.type"
            @click="item.handle"
            block
            class="b-header-mobile-menu-item"
          >
            <component :is="item.icon.displayName"></component
            >{{ item.name }}</a-button
          >
        </li>
      </ul>
    </a-drawer>

    <template #extra>
      <ul class="b-header-menu" v-if="!isMobile">
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
import { PageHeader, Drawer } from "ant-design-vue";
import { AppstoreTwoTone, ContainerTwoTone } from "@ant-design/icons-vue";
import { useGlobalScorlledStatus } from "@u/event.js";
import { bHeaderConfig } from "@vp/config.js";
import { useDynamicComponents } from "@u/component.js";
import { useIsMobileStatus } from "@u/mobile";
import { ref } from "vue";

const { menu, avatarSrc, title } = bHeaderConfig;
const bHeaderComponent = {
  components: {
    aPageHeader: PageHeader,
    AppstoreTwoTone,
    aDrawer: Drawer,
    ContainerTwoTone,
  },
  setup() {
    const showTransparent = useGlobalScorlledStatus();
    const isMobile = useIsMobileStatus();

    const mobileDrawerVisible = ref(false);

    const shoMobileDrawer = () => (mobileDrawerVisible.value = true);

    return {
      showTransparent,
      avatarSrc,
      menu,
      title,
      isMobile,
      shoMobileDrawer,
      mobileDrawerVisible,
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

.b-header /deep/ .ant-page-header-content {
  padding: 0;
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

.b-mobile-icon {
  font-size: 35px;
  position: fixed;
  top: 10px;
  right: 10px;
}

.b-mobile-icon:hover {
  background-color: #80cbc4;
}

.b-header-menu {
  display: flex;
  margin-top: 5px;
}

.b-header-menu > li {
  margin: 0 5px;
}

.b-header-mobile-menu-item {
  margin: 8px 0;
}
</style>