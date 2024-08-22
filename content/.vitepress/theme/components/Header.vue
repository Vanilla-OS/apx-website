<template>
  <nav class="flex flex-col gap-0 bg-[#101010] w-full">
    <div
      class="flex flex-row items-center justify-between px-4 sm:px-16 py-5 border-b border-white border-opacity-20"
    >
      <a href="/">
        <img src="/assets/logo.svg" alt="Apx" class="h-8" />
      </a>
      <div
        class="flex flex-row items-center gap-4 sm:gap-8 font-light text-base opacity-80"
      >
        <button
          id="menu-button"
          @click="toggleMenu"
          class="text-gray-300 inline-flex p-3 hover:bg-gray-700 rounded lg:hidden ml-auto hover:text-white outline-none"
        >
          <span class="material-symbols-outlined">menu</span>
        </button>
        <a
          v-for="link in theme.nav.links.first"
          :key="link"
          :href="link.url"
          class="text-white hidden lg:inline-flex"
          >{{ link.text }}</a
        >
      </div>
    </div>
    <div
      class="hidden lg:flex flex-col sm:flex-row items-center justify-between px-4 sm:px-16 py-2"
    >
      <p class="text-white opacity-40 font-normal mb-4 sm:mb-0">
        {{ theme.nav.version }}
      </p>
      <div
        class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 font-light opacity-80 text-base"
      >
        <div class="flex flex-row items-center gap-4">
          <a
            v-for="link in theme.nav.links.second"
            :key="link"
            :href="link.url"
            class="text-white"
            >{{ link.text }}</a
          >
        </div>
        <div
          class="flex flex-row sm:flex-row gap-2 justify-center items-center mt-4 sm:mt-0"
        >
          <a
            href="https://github.com/Vanilla-OS/apx"
            class="border border-white text-white px-4 py-2 rounded-full text-base hover:bg-white hover:text-black transition duration-200"
            >Source Code</a
          >
          <a
            href="https://github.com/Vanilla-OS/apx/releases/latest"
            class="bg-green-400 text-black px-4 py-2 rounded-full text-base hover:bg-green-500 transition duration-200"
            >Download</a
          >
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-md z-50 flex items-center justify-center"
        @click="toggleMenu"
      >
        <button
          class="absolute top-7 right-7 text-gray-300 mix-blend-difference"
        >
          <span class="material-symbols-outlined">close</span>
        </button>
        <div class="bg-[#101010] p-6 rounded-lg w-11/12 max-w-md" @click.stop>
          <div class="flex flex-col items-center gap-4">
            <a
              v-for="link in theme.nav.links.first"
              :key="link"
              :href="link.url"
              @click="toggleMenu"
              class="text-white"
              >{{ link.text }}</a
            >
          </div>
          <hr class="border border-white border-opacity-20 my-4" />
          <div class="flex flex-col items-center">
            <div class="flex flex-col items-center gap-4 font-light text-base">
              <a
                v-for="link in theme.nav.links.second"
                :key="link"
                :href="link.url"
                @click="toggleMenu"
                class="text-white"
                >{{ link.text }}</a
              >
            </div>
            <div class="flex flex-col gap-2 mt-4">
              <a
                href="https://github.com/Vanilla-OS/apx"
                class="border border-white text-white px-4 py-2 rounded-full text-base hover:bg-white hover:text-black transition duration-200 text-center"
                >Source Code</a
              >
              <a
                href="https://github.com/Vanilla-OS/apx/releases/latest"
                class="bg-green-400 text-black px-4 py-2 rounded-full text-base hover:bg-green-500 transition duration-200 text-center"
                >Download</a
              >
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useData } from "vitepress";

const { theme } = useData();
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
