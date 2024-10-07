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
        <swiper :modules="modules" navigation :scrollbar="{ draggable: true, el: '.custom-scrollbar' }"
            :slidesPerView="1.2" space-between="12">
            <swiper-slide v-for="tourItem in sliderData" :key="tourItem?.id">
                <slot :sliderData="tourItem"></slot>
            </swiper-slide>
        </swiper>
        <div class="custom-scrollbar group-[opacity-100]:"></div>
    </div>
</template>
<style scoped lang="postcss">
.swiper-slide {
    @apply relative
}

.swiper-container {
    position: relative;

    .custom-scrollbar {
        &.swiper-scrollbar-horizontal {
            height: 2px;
            background-color: #D4D4D4;
            margin-top: 40px;
        }

        .swiper-scrollbar-drag {
            background: #D4D4D4;

            &::after {
                content: "";
                width: 92px;


            }
        }
    }

    .swiper-button-prev,
    .swiper-button-next {
        @apply after:text-[#1c1c1c] rounded-full after:text-sm size-8 bg-white opacity-0;
    }

    .swiper-button-prev {
        @apply after:content-['prev']
    }

    .swiper-button-next {
        @apply after:content-['next']
    }
}
</style>