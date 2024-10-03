<script setup>
const onSubmit = () => {
    console.log('Click!')
}
</script>
<template>
    <div class="w-[300px] rounded-[30px] bg-white p-[16px_24px]">
        <form @submit.prevent="onSubmit" class="flex flex-col gap-[22px]">
            <div>
                <span>Откуда</span>
                <button class="btn-select uppercase">Москва</button>
            </div>
            <div>
                <span>Куда</span>
                <button class="btn-select uppercase">Турция</button>
            </div>
            <div>
                <span>Вылет</span>
                <button class="btn-select uppercase"></button>
            </div>
            <div class="flex justify-between border-b border-[#D4D4D4];">
                <div class="form-how-much">
                    <span>На сколько</span>
                    <button>9 - 12 ночей</button>
                </div>
                <div class="form-tourists">
                    <span>Туристы</span>
                    <button>2 + 0</button>
                </div>
            </div>
            <div>
                <button>Подобрать</button>
            </div>
        </form>
    </div>
</template>
<style scoped lang="postcss">
$black: #1C1C1C;
$gray: #A1A1A1;

form {
    &>div {
        @apply h-[40px]
    }


}

span {
    @apply text-base leading-[14.06px] text-[#A1A1A1] uppercase transition-all duration-300;
}

button {
    @apply w-full font-medium text-base leading-[18.75px] text-[#212121] text-left p-[5px_0px_12px_0px];

    &.btn-select {
        @apply border-b border-[#D4D4D4];
    }
}

input:focus form>div>label {
    @apply text-[12px]
}

.form-how-much {
    @apply relative;

    &::after {
        content: '';
        position: absolute;
        width: 1px;
        right: 20%;
        top: 10%;
        height: 38px;
        background-color: #D4D4D4;
    }
}
</style>