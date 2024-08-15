<script setup lang="ts">
import { useData } from "vitepress";
import Hero from "./components/Hero.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter, page } = useData();
</script>

<template>
    <Header />
    <div v-if="frontmatter.home">
        <Hero />
    </div>
    <div class="mx-auto max-w-6xl px-4 pt-20 sm:px-6 lg:px-8">
        <div v-if="frontmatter.home">
            <Home />
        </div>
        <div v-if="page.isNotFound">
            <NotFound />
        </div>
    </div>
    <Footer />
</template>
