<template>
  <a
    :href="props.href"
    target="_blank"
    class="flex items-center justify-center"
  >
    <img
      :src="props.src"
      :alt="props.alt"
      class="w-8 transition-all duration-300 ease-in-out hover:scale-110"
      style="filter: none"
      @mouseover="applyFilter"
      @mouseout="removeFilter"
    />
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  href: String,
  src: String,
  alt: String,
  filter: String,
});

const applyFilter = (event: MouseEvent) => {
  (event.target as HTMLImageElement).style.filter = props.filter;
};

const removeFilter = (event: MouseEvent) => {
  (event.target as HTMLImageElement).style.filter = "none";
};
</script>
