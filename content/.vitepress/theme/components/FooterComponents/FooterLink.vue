<template>
  <a :href="props.href" class="text-opacity-40 text-white hover:underline">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  href: String,
});
</script>
