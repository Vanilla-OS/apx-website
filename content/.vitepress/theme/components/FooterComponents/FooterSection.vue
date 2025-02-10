<template>
  <div class="flex flex-col gap-2">
    <h3 class="text-opacity-70 text-base font-semibold text-white">
      {{ props.title }}
    </h3>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>
