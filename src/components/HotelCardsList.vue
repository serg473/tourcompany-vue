<script setup>
import HotelCardsListItem from '@/components/HotelCardsListItem.vue'
import { getImagePath } from '@/utils';
defineProps({
    cardsList: [Object, Array],
    required: false
})
</script>
<template>

    <HotelCardsListItem >
        <template #preview>
            <img class="rounded-[30px]" :src="getImagePath(cardsList?.preview)"
                :alt="`${cardsList?.country}-${cardsList?.city}`">
        </template>
        <template #term>{{ cardsList?.term }}</template>
        <template #price>{{ cardsList?.price }}</template>
        <template #country>{{ cardsList?.country }}</template>
        <template #city>{{ cardsList?.city }}</template>
        <template #date>{{ cardsList?.date }}</template>
    </HotelCardsListItem>
</template>
<style lang="postcss" scoped></style>