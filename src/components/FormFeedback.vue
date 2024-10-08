<script setup>
import Button from '../components/Button.vue'
const handlerSubmit = () => {
    console.log('Нажал')
}
</script>
<template>
    <div class="py-[52px] bg-white rounded-[30px] px-10">
        <div class="text-[#1c1c1c] text-center">
            <h4 class="text-[23px] text-center leading-[26.95px] mb-4 uppercase">не определились с
                <i>выбором</i>?
            </h4>
            <p class="font-light text-base leading-[18.75px]">Оставьте свой номер и наш специалист поможет вам с
                подбором тура</p>
        </div>
        <form @submit.prevent="handlerSubmit">
            <div class="form">
                <div class="field-form">
                    <label for="name"></label>
                    <input class="placeholder-[#bdbdbd]" placeholder=" Имя" id="name" name="name" type="text" />
                </div>
                <div class="field-form">
                    <label for="phone"></label>
                    <input class="placeholder-[#bdbdbd]" placeholder="Телефон" name="phone" id="phone" type="tel" />
                </div>
            </div>
            <div class="mt-6">
                <Button>Отправить</Button>
            </div>
        </form>
    </div>
</template>
<style lang="postcss">
.form {
    @apply flex flex-col gap-[11px] mt-6;
    .field-form {
        @apply flex flex-col;

        input {
            @apply border-b border-[#848484] pb-[5px] text-xs leading-[14.06px];
        }
    }
}
</style>