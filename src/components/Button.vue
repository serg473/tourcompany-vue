<script></script>
<template>
    <button class="button-default">
        <slot></slot>
        <svg width="11" height="11" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.0001 1.17849L11.9999 11.8215" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3.75 11.8214L12 11.8214" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <path d="M12 11.8214L12 4.23685" stroke="white" stroke-width="1.5" stroke-linecap="round" />
        </svg>

    </button>
</template>
<style scoped lang="postcss">
button.button-default {
    @apply rounded-[30px] bg-[#EC1C24] py-[11px] text-base uppercase leading-[18.75px] text-white flex justify-center items-baseline gap-2 cursor-pointer
}
</style>