<template>
    <nav class="flex flex-col gap-0 bg-[#101010] w-full">
        <div
            class="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-16 py-5 border-b border-white border-opacity-20"
        >
            <a href="/">
                <img
                    src="/assets/logo.svg"
                    alt="Apx"
                    class="h-8 mb-4 sm:mb-0"
                />
            </a>
            <div
                class="flex flex-row items-center gap-4 sm:gap-8 font-light text-base opacity-80"
            >
                <a
                    v-for="link in theme.nav.links.first"
                    :key="link"
                    :href="link.url"
                    class="text-white"
                    >{{ link.text }}</a
                >
            </div>
        </div>
        <div
            class="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-16 py-2"
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
    </nav>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';

const { theme } = useData();
</script>
