<script setup>
import TitlesSection from '@/components/TitlesSection.vue';
import TourSearch from '@/components/TourSearch.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
const modules = [Scrollbar]
</script>

<template>
  <section class="bg-[url('../assets/img/travel-mob.png')] bg-no-repeat bg-cover p-[56px_0px_80px_0px]">
    <div
      class="container mb-11 flex flex-col items-center min-[360px]:max-w-[928px] min-[1024px]:max-w-[1120px] relative">
      <h1>Путешествия мечты</h1>
      <h2>Выбери свою</h2>
      <div class="mb-[43px]">
        <img width="16" height="51" src="../assets/img/title-line.svg" alt="Line Title">
      </div>
      <TourSearch />
    </div>
  </section>
  <section class="py-20 bg-white text-center">
    <div class="container pr-0">
      <TitlesSection>
        <template #named-section>Tours</template>
        <template #title>Горящие туры</template>
        <template #subtitle>Поймайте момент</template>
      </TitlesSection>
      <div class="swiper-container">
        <swiper :modules="modules" :scrollbar="{ draggable: true, el: '.custom-scrollbar' }" :slidesPerView="1.2"
          :slideToClickedSlide="true" space-between="12" :loop="true" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide><img class="rounded-[30px]" src="../assets/img/dana-andreea-gheorghe.webp"
              alt=""></swiper-slide>
          <swiper-slide><img class="rounded-[30px]" src="../assets/img/bechir-kaddech.webp" alt=""></swiper-slide>
          <swiper-slide><img class="rounded-[30px]" src="../assets/img/francesco-bianco.webp" alt=""></swiper-slide>
          <swiper-slide><img class="rounded-[30px]" src="../assets/img/francesco-bianco.webp" alt=""></swiper-slide>
          <swiper-slide><img class="rounded-[30px]" src="../assets/img/francesco-bianco.webp" alt=""></swiper-slide>
        </swiper>
        <div class="custom-scrollbar"></div>
      </div>
    </div>
  </section>
</template>

<style>
.swiper-container {
  position: relative;
}

.custom-scrollbar.swiper-scrollbar-horizontal {
  bottom: 0;
  height: 1px;
}

.swiper-scrollbar-drag {
  background: #D4D4D4;
}

.swiper-scrollbar-drag:after {
  content: "";
  width: 92px;
  height: 2px;
  background: #1C1C1C;
  position: absolute;
  top: 40px;
  left: 15%;
  margin: 0 0 0 -20px;
}
</style>
