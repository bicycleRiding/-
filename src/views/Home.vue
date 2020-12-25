<template>
  <div class="home">
    <header class="home-header vivify swoopInTop">
      <h2 class="home-title vivify unfold delay-500">时间路口相册</h2>
      <h3 class="home-slogan vivify unfold delay-1000" @click="slogan.handle">
        {{ slogan.text }}
      </h3>
      <p class="home-tags">
        <a-tag
          class="home-tag vivify unfold delay-1500"
          v-for="tag of tags"
          :key="tag.name"
          :color="tag.color"
          @click="tag.handle"
        >
          <template #icon>
            <component :is="tag.icon.displayName"></component>
          </template>
          {{ tag.name }}</a-tag
        >
      </p>
    </header>

    <b-carousel :imgs="imgs" />
    <b-cards :cards="cards" />

    <b-footer :title="footer.title" />
  </div>
</template>

<script>
import { homeViewConfig } from "@vp/config.js";
import { useDynamicComponents } from "@u/component.js";
import bCarousel from "@b/carousel.vue";
import bCards from "@b/cards.vue";
import bFooter from "@b/footer.vue";

const { tags, slogan, imgs, cards, footer } = homeViewConfig;

const homeView = {
  components: {
    bCarousel,
    bCards,
    bFooter,
  },
  setup() {
    return {
      tags,
      slogan,
      imgs,
      cards,
      footer,
    };
  },
};

const iconComponents = tags.map((tag) => tag.icon || (tag.icon = {}));
useDynamicComponents(homeView, iconComponents);
export default homeView;
</script>

<style scoped>
.home {
  padding: 10px;
  user-select: none;
}

.home-header {
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.5s ease-in-out;
}

.home-header:hover {
  transition: all 0.5s ease-in-out;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
}

.home-title {
  font-size: 35px;
  width: 30%;
  margin: 5px auto;
  padding: 3px 10px;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
}

.home-slogan {
  font-size: 20px;
  width: 50%;
  margin: 10px auto;
  padding: 3px 10px;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
  border: 2px solid #c8e6c9;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.home-slogan:hover {
  color: #fff;
  border: 2px solid #90a4ae;
  background-color: #c5e1a5;
  transition: all 0.5s ease-in-out;
}

.home-tags {
  width: 50%;
  margin: auto;
  padding: 3px 10px;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
}

.home-tag {
  cursor: pointer;
}
</style>
