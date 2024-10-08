<script setup>
import CardsSlider from '@/components/CardsSlider.vue';
import TitlesSection from '@/components/TitlesSection.vue';
import TourSearch from '@/components/TourSearch.vue';
import ButtonMore from '@/components/ButtonMore.vue';
import FormFeedback from '@/components/FormFeedback.vue';
import { getImagePath } from '@/utils';
import { useTourStore } from '@/stores/tours';
const tourStore = useTourStore();
</script>

<template>
  <section class="bg-[url('../assets/img/travel-mob.png')] bg-no-repeat bg-cover p-[56px_0px_80px_0px]">
    <div class="container mb-11 flex flex-col items-center relative">
      <h1>Путешествия мечты</h1>
      <h2>Выбери свою</h2>
      <div class="mb-[43px]">
        <img width="16" height="51" src="../assets/img/title-line.svg" alt="Line Title">
      </div>
      <TourSearch />
    </div>
  </section>
  <section class="pt-20 pb-[80px] bg-white text-center">
    <div class="container pr-0">
      <TitlesSection>
        <template #named-section>Tours</template>
        <template #title>Горящие туры</template>
        <template #subtitle>Поймайте момент</template>
      </TitlesSection>
      <CardsSlider :sliderData="tourStore.toursData">
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
    <div class="container">
      <TitlesSection class="text-center">
        <template #named-section>Hotels</template>
        <template #title>Популярные отели</template>
        <template #subtitle>уют и роскошь в лучших отелях мира</template>
      </TitlesSection>
      <div class="min-[480px]:hidden flex flex-col gap-8">
        <div class="relative" v-for="tourItem in tourStore.favouriteTour" :key="tourItem.id">
          <img class="rounded-[30px]" :src="getImagePath(tourItem.preview)" :alt="tourItem.name">
          <div class="p-[31px_40px_30px_35px] flex flex-col justify-between absolute inset-0">
            <div class="self-end flex flex-col relative">
              <svg class="self-end translate-x-5 translate-y-3" width="21" height="21" viewBox="0 0 21 21" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 7.72111L13.3738 7.21957L10.5 0L7.62616 7.21961L0 7.72115L5.85121 12.6812L3.93159 20.2149L10.5 16.0635L17.0684 20.2149L15.1489 12.6815L21 7.72111ZM10.5 14.6078L5.88722 17.5232L7.23364 12.2391L3.11017 8.74933L8.48203 8.39647L10.5 3.32702L12.518 8.39651L17.8961 8.74933L13.7663 12.2388L15.1128 17.5232L10.5 14.6078Z"
                  fill="white" />
              </svg>
              <span class="font-['Chandra'] text-5xl leading-[48px]  text-white">{{ tourItem.raiting }}</span>
            </div>
            <div class="text-white justify-end flex flex-col gap-3">
              <h3 class="font-medium text-xl leading-[23.44px] uppercase">{{ tourItem.name }}</h3>
              <div class="flex items-center gap-3">
                <button class="text-sm leading-[14.61px] font-light">узнать подробнее</button>
                <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 7.5C0.723858 7.5 0.5 7.72386 0.5 8C0.5 8.27614 0.723858 8.5 1 8.5L1 7.5ZM31.3333 8C31.3333 9.47276 32.5272 10.6667 34 10.6667C35.4728 10.6667 36.6667 9.47276 36.6667 8C36.6667 6.52724 35.4728 5.33334 34 5.33334C32.5272 5.33334 31.3333 6.52724 31.3333 8ZM1 8.5L34 8.5L34 7.5L1 7.5L1 8.5Z"
                    fill="white" />
                  <circle cx="34" cy="8" r="7.5" transform="rotate(-90 34 8)" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <ButtonMore>Больше отелей</ButtonMore>
        </div>
      </div>
    </div>
  </section>
  <section class="p-[30px] bg-[url('../assets/img/valeria-andersson.webp')] bg-no-repeat bg-cover">
    <FormFeedback />
  </section>
  <div class="container pr-0">
    <section class="p-[75px_0_80px_0] text-center">
      <TitlesSection>
        <template #named-section>Reviews</template>
        <template #title>отзывы</template>
        <template #subtitle>Впечатления наших путешественников</template>
      </TitlesSection>
      <CardsSlider :sliderData="tourStore.comments">
        <template #default="{ sliderData }">
          <div class="p-[27px_24px_32px_24px] flex flex-col items-center bg-[#F8F8F8] rounded-[30px]">
            <img class="rounded-full" :src="getImagePath(sliderData.avatar)" :alt="sliderData.from">
            <div class="mt-[18px] flex flex-col items-center">
              <div class="flex items-center gap-[6px] mb-[9px]">
                <img v-for="item in 5" :key="item" src="../assets/img/StarComments.svg" :alt="`RaitingHotel_${item}`">
              </div>
              <div class="text-[#6B6B6B] text-xs font-light leading-[14.06px]">
                <div class="mb-[5px]">{{ sliderData.from }}</div>
                <div class="mb-[20px]">{{ sliderData.where }}</div>
                <p class="text-base leading-[22px]">{{ sliderData.description }}</p>
              </div>
            </div>
          </div>
        </template>
      </CardsSlider>
    </section>
  </div>
</template>

<style lang="postcss">
div.swiper-scrollbar.swiper-scrollbar-horizontal {
  @apply mt-11 static;
}
</style>