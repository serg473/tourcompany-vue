<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CardsSlider from '@/components/CardsSlider.vue';
import TitlesSection from '@/components/TitlesSection.vue';
import TourSearch from '@/components/TourSearch.vue';
import { getImagePath } from '@/utils';
const width = ref(window.innerWidth)
const toursData = [
  { id: 1, country: "Италия", city: "Венеция", preview: '../assets/img/dana-andreea-gheorghe.webp', date: '12-18 октября', term: '9', price: '25000' },
  { id: 2, country: "Турция", city: "Каппадокия", preview: '../assets/img/bechir-kaddech.webp', date: '16-30 сентября', term: '14', price: '95000' },
  { id: 3, country: "Италия", city: "Рим", preview: '../assets/img/francesco-bianco.webp', date: '10-15 ноября', term: '5', price: '80000' },
  { id: 4, country: "ОАЭ", city: "Дубай", preview: '../assets/img/darcey-beau.webp', date: '12-18 октября', term: '9', price: '25000' },
]
const popularData = [
  {id:1, }
]
const handleResize = () => width.value = window.innerWidth;
onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
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
  <section class="pt-20 pb-[80px] bg-white text-center">
    <div class="container pr-0 min-[480px]:max-w-[928px] min-[1024px]:max-w-[1120px]">
      <TitlesSection>
        <template #named-section>Tours</template>
        <template #title>Горящие туры</template>
        <template #subtitle>Поймайте момент</template>
      </TitlesSection>
      <CardsSlider :sliderData="toursData">
        <template #default="{ sliderData }">
          <img class="rounded-[30px]" :src="getImagePath(sliderData?.preview)"
            :alt="`${sliderData?.country}-${sliderData?.city}`">
          <div class="absolute w-full h-full inset-0 pl-5 py-5">
            <div class="flex gap-[10px] font-light text-sm leading-[16.41px] text-[#FFFFFF]">
              <div class="border border-[#ffffff] rounded-[30px] p-[4px_10px_3px_10px]">
                <span>{{ sliderData?.term }} дней</span>
              </div>
              <div class="border border-[#ffffff] rounded-[30px] p-[4px_10px_3px_10px]">
                от {{ sliderData?.price }} ₽
              </div>
            </div>
            <div class="flex flex-col items-start mt-[219px] text-white font-medium text-sm leading-[16.41px]">
              <div class="flex gap-5  uppercase">
                <strong
                  class="relative after:content-[''] after:absolute after:size-[5px] after:bg-white after:top-[5px] after:right-[-12px] after:rounded-full">{{
                    sliderData?.country }}</strong>
                <strong>{{ sliderData?.city }}</strong>
              </div>
              <span class="my-[6px]">{{ sliderData?.date }}</span>
              <div class="flex gap-3">
                <span class="font-light inline-block">узнать подробнее</span>
                <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 7.5C0.723858 7.5 0.5 7.72386 0.5 8C0.5 8.27614 0.723858 8.5 1 8.5L1 7.5ZM31.3333 8C31.3333 9.47276 32.5272 10.6667 34 10.6667C35.4728 10.6667 36.6667 9.47276 36.6667 8C36.6667 6.52724 35.4728 5.33334 34 5.33334C32.5272 5.33334 31.3333 6.52724 31.3333 8ZM1 8.5L34 8.5L34 7.5L1 7.5L1 8.5Z"
                    fill="white" />
                  <circle cx="34" cy="8" r="7.5" transform="rotate(-90 34 8)" stroke="white" />
                </svg>

              </div>
            </div>
          </div>
        </template>
      </CardsSlider>
    </div>
  </section>
  <section class="py-20 bg-[#f8f8f8]">
    <TitlesSection class="text-center">
      <template #named-section>Hotels</template>
      <template #title>Популярные отели</template>
      <template #subtitle>уют и роскошь в лучших отелях мира</template>
    </TitlesSection>
    <div v-if="width < 480">
      <div class="flex flex-col" v-for="tourItem in toursData" :key="tourItem.id">
        <img :src="tourItem.preview" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="postcss"></style>