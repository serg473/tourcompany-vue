<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
const props = defineProps({
    sliderData: {
        type: Array,
        default: () => { }
    },
})
const modules = [Scrollbar, Navigation]
</script>
<template>
    <div class="swiper-container group">
        <swiper :modules="modules" navigation :scrollbar="{ draggable: true, }" :slidesPerView="1.2" space-between="12">
            <swiper-slide v-for="tourItem in sliderData" :key="tourItem?.id">
                <slot :sliderData="tourItem"></slot>
            </swiper-slide>
        </swiper>

    </div>
</template>
<style scoped lang="postcss">
.swiper-slide {
    @apply relative
}

.swiper-container {
    position: relative;

    .swiper-button-prev {
        @apply after:content-['prev']
    }

    .swiper-button-next {
        @apply after:content-['next']
    }
}


</style>