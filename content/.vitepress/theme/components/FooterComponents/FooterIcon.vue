<template>
  <a
    :href="props.href"
    target="_blank"
    class="flex items-center justify-center"
  >
    <div
      class="icon transition-all duration-300 ease-in-out hover:scale-110"
      :style="{
        backgroundColor: isHovered ? props.hoverColor || '#727976' : '#727976',
        WebkitMask: `url(${props.src}) no-repeat center`,
        mask: `url(${props.src}) no-repeat center`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        width: `32px`,
        height: `32px`,
      }"
      @mouseover="isHovered = true"
      @mouseout="isHovered = false"
    ></div>
  </a>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  href: String,
  src: String,
  hoverColor: String,
});

const isHovered = ref(false);
</script>
