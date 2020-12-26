<template>
  <div class="about">
    <section class="about-timeline">
      <a-alert type="info" class="about-alert">
        <template #message>
          <section>重大事件时间轴</section>
        </template>
      </a-alert>
      <b-timeline />
    </section>

    <section class="about-personnel-introduction">
      <a-alert type="success" class="about-alert">
        <template #message>
          <section>19营销5班3组 人员介绍</section>
        </template>
      </a-alert>
      <b-card :cards="cards" :spanNum="2" />
    </section>
  </div>
</template>

<script>
import bCard from "@b/cards.vue";
import bTimeline from "@b/timeline.vue";
import { aboutViewConfig } from "@vp/config.js";

export default {
  components: {
    bCard,
  },
  setup() {
    const { cards } = aboutViewConfig;
    return {
      cards,
      bTimeline,
    };
  },
};
</script>

<style scoped>
.about {
  padding: 10px;
}

.about > * {
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
}

.about-alert {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
}

.about-timeline {
  background-color: white;
}

.about-personnel-introduction {
  background-color: #81c784;
}
</style>