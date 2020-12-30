<template>
  <div class="about">
    <section class="about-timeline">
      <a-alert
        type="info"
        class="about-alert vivify unfold"
        :isMobile="isMobile"
        @click="timeLineInfoHandle"
      >
        <template #message>
          <section>{{ timeLineInfoTitle }}</section>
        </template>
      </a-alert>
      <b-timeline :timeLineInfo="timeLineInfo" />
    </section>

    <section class="about-personnel-introduction">
      <a-alert
        type="success"
        class="about-alert"
        :isMobile="isMobile"
        @click="personnelIntroductionHandle"
      >
        <template #message>
          <section>{{ personnelIntroduction }}</section>
        </template>
      </a-alert>
      <b-card :cards="cards" :spanNum="4" />
    </section>
  </div>
</template>

<script>
import bCard from "@b/cards.vue";
import bTimeline from "@b/timeline.vue";
import { aboutViewConfig } from "@vp/config.js";
import { useIsMobileStatus } from "@u/mobile";

export default {
  components: {
    bCard,
  },
  setup() {
    const {
      cards,
      timeLineInfo,
      timeLineInfoTitle,
      personnelIntroduction,
      timeLineInfoHandle = () => {},
      personnelIntroductionHandle = () => {},
    } = aboutViewConfig;
    const isMobile = useIsMobileStatus();
    return {
      timeLineInfoHandle,
      personnelIntroductionHandle,
      cards,
      bTimeline,
      isMobile,
      timeLineInfo,
      timeLineInfoTitle,
      personnelIntroduction,
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
  padding: 10px;
  border-radius: 4px;
}

.about-alert {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
}

.about-alert[isMobile="true"] {
  font-size: 18px;
  width: 80% !important;
  margin: 15px auto;
}

.about-timeline {
  background-color: white;
}

.about-personnel-introduction {
  background-color: #81c784;
}
.about-alert {
  transition: all 0.5s ease-in-out;
}

.about-alert:hover {
  background-color: #cfd8dc;
  transition: all 0.5s ease-in-out;
}
</style>