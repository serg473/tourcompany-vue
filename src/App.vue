<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
  <footer class="py-[52px] bg-[#222222]">
    <div class="container">
      <div class="pb-10 mb-10 border-b border-[#494949] w-full flex flex-col items-center">
        <img src="./assets/img/mob-logo.svg" alt="Anex">
      </div>
      <div class="text-center mb-10 pb-10 border-b border-[#494949]">
        <span class="font-light text-xs leading-[14.06px] traking-[0.2px] uppercase  text-white">Узнавайте о
          горящих турах
          первыми</span>
        <div class="mt-3">
          <form>
            <div class="relative">
              <label for="email"></label>
              <input placeholder="Введите почту" id="email" name="email" type="email">
              <button class="absolute top-[14px] right-[54px] text-white"><svg width="11" height="11"
                  viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.0001 1.17849L11.9999 11.8215" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M3.75 11.8213L12 11.8213" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M12 11.8213L12 4.23673" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
@import url('./assets/fonts/Roboto/stylesheet.css');
@import url('./assets//fonts/Chandra/Chandra.css');
@import url('./assets/fonts/rasfire/Rasfire.css');

footer {
  input {
    @apply w-[240px] bg-[url('./assets/img/mail.svg')] bg-[center_left_17.11px] bg-no-repeat bg-[length:22px_24px] bg-[#222222] p-[8px_20px_8px_48px] border rounded-[30px];

    &::placeholder {
      @apply font-light text-sm leading-[16.41px] text-[#737373];
    }
  }
}
</style>
