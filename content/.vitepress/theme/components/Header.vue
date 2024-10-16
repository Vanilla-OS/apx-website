<template>
  <a href="#main" aria-label="Skip to main content" class="skip-to-content"
    >Skip to main content</a
  >
  <nav>
    <div
      class="flex flex-row items-center justify-between border-b border-white border-opacity-20 bg-[#101010] px-4 py-5 text-black sm:px-16"
    >
      <a href="/">
        <img src="/assets/logo.svg" alt="Apx" class="h-8" />
      </a>
      <div
        class="flex flex-row items-center gap-4 text-base font-light opacity-80 sm:gap-8"
      >
        <button
          id="menu-button"
          @click="toggleMenu"
          class="ml-auto inline-flex rounded p-3 text-gray-300 outline-none hover:bg-gray-700 hover:text-white lg:hidden"
        >
          <span class="material-symbols-outlined">menu</span>
        </button>
        <a
          v-for="link in theme.nav.links.first"
          :key="link"
          :href="link.url"
          class="duration-20 hidden text-white transition-colors hover:text-opacity-80 lg:inline-flex"
          >{{ link.text }}</a
        >
      </div>
    </div>
    <div
      class="hidden flex-col items-center justify-between bg-[#101010] px-4 py-2 sm:flex-row sm:px-16 lg:flex"
    >
      <p class="mb-4 font-normal text-white opacity-40 sm:mb-0">
        {{ theme.nav.version }}
      </p>
      <div
        class="flex flex-col items-center gap-4 text-base font-light opacity-80 sm:flex-row sm:gap-8"
      >
        <div class="flex flex-row items-center gap-4">
          <a
            v-for="link in theme.nav.links.second"
            :key="link"
            :href="link.url"
            class="duration-20 text-white transition-colors hover:text-opacity-80"
            >{{ link.text }}</a
          >
        </div>
        <div
          class="mt-4 flex flex-row items-center justify-center gap-2 sm:mt-0 sm:flex-row"
        >
          <a
            href="https://github.com/Vanilla-OS/apx"
            class="rounded-full border border-white px-5 py-2 text-base text-white transition duration-200 hover:bg-white hover:text-black"
            >Source Code</a
          >
          <a
            href="https://github.com/Vanilla-OS/apx/releases/latest"
            class="rounded-full bg-[#24FF93] px-5 py-2 text-base font-medium text-black transition duration-200 hover:bg-green-500"
            >Download</a
          >
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-md"
        @click="toggleMenu"
      >
        <button
          class="absolute right-7 top-7 text-gray-300 mix-blend-difference"
        >
          <span class="material-symbols-outlined">close</span>
        </button>
        <div class="w-11/12 max-w-md rounded-lg bg-[#101010] p-6" @click.stop>
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
          <hr class="my-4 border border-white border-opacity-20" />
          <div class="flex flex-col items-center">
            <div class="flex flex-col items-center gap-4 text-base font-light">
              <a
                v-for="link in theme.nav.links.second"
                :key="link"
                :href="link.url"
                @click="toggleMenu"
                class="text-white"
                >{{ link.text }}</a
              >
            </div>
            <div class="mt-4 flex flex-col gap-2">
              <a
                href="https://github.com/Vanilla-OS/apx"
                class="rounded-full border border-white px-4 py-2 text-center text-base text-white transition duration-200 hover:bg-white hover:text-black"
                >Source Code</a
              >
              <a
                href="https://github.com/Vanilla-OS/apx/releases/latest"
                class="rounded-full bg-green-400 px-4 py-2 text-center text-base text-black transition duration-200 hover:bg-green-500"
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
