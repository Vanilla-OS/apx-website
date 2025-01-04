<template>
  <a :href="props.href" class="text-white text-opacity-40 hover:underline">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  href: String,
});
</script>
