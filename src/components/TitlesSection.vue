<template>
    <div class="flex flex-col">
        <h3>
            <slot name="named-section"></slot>
        </h3>
        <h4>
            <slot name="title"></slot>
        </h4>
        <h5>
            <slot name="subtitle"></slot>
        </h5>
    </div>
</template>
<style scoped lang="postcss">
@import url('../assets/fonts/millanova/Millanova.css');

h3 {
    @apply font-['Millanova'] text-[36px] text-[#D4D4D4]
}

h4 {
    @apply font-medium text-[28px] leading-[32.81px] text-[#1C1C1C] uppercase mb-[6px];

}

h5 {
    @apply font-light text-base leading-[18.75px] uppercase text-[#1C1C1C] mb-8;

}
</style>