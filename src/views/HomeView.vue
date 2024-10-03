<script setup>
import TitlesSection from '@/components/TitlesSection.vue';
import TourSearch from '@/components/TourSearch.vue';

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
    <TitlesSection>
      <template #named-section>Tours</template>
      <template #title>Горящие туры</template>
      <template #subtitle>Поймайте момент</template>
    </TitlesSection>
  </section>
</template>
