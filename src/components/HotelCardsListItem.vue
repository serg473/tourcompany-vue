<template>
    <slot name="preview"></slot>
    <div class="absolute w-full h-full inset-0 pl-5 py-5">
        <div class="flex gap-[10px] font-light text-sm leading-[16.41px] text-[#FFFFFF]">
            <div class="border border-[#ffffff] rounded-[30px] p-[4px_10px_3px_10px]">
                <span>
                    <slot name="term"></slot> дней
                </span>
            </div>
            <div class="border border-[#ffffff] rounded-[30px] p-[4px_10px_3px_10px]">
                от <slot name="price"></slot> ₽
            </div>
        </div>
        <div class="flex flex-col items-start mt-[219px] text-white font-medium text-sm leading-[16.41px]">
            <div class="flex gap-5  uppercase">
                <strong
                    class="relative after:content-[''] after:absolute after:size-[5px] after:bg-white after:top-[5px] after:right-[-12px] after:rounded-full">
                    <slot name="country"></slot>
                </strong>
                <strong>
                    <slot name="city"></slot>
                </strong>
            </div>
            <span class="my-[6px]">
                <slot name="date"></slot>
            </span>
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
<style></style>