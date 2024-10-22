<script setup lang="ts">
import { useData } from "vitepress";
import Hero from "./components/Hero.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./views/Home.vue";
import Community from "./views/Community.vue";
import NotFound from "./views/NotFound.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter, page } = useData();
</script>

<template>
  <Header />

  <div v-if="frontmatter.home">
    <Hero />
  </div>

  <div v-if="frontmatter.home">
    <Home />
  </div>
  <div v-if="frontmatter.communityAssets">
    <Community />
  </div>
  <div v-if="page.isNotFound">
    <NotFound />
  </div>

  <Footer />
</template>
