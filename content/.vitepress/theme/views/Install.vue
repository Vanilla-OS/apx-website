<template>
  <div class="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 py-20">
    <h2 class="text-3xl font-semibold text-center lg:text-5xl">
      Install <span class="text-green-500">Apx</span>
    </h2>
    <p class="text-center text-xl lg:text-2xl">
      This script downloads and installs the latest release of Apx.
      You'll need <strong>curl</strong> or <strong>wget</strong> and a
      container engine like <strong>podman</strong> or <strong>docker</strong>.
    </p>
    <InstallTerminal />
    <p class="text-center text-sm text-gray-500 lg:text-base">
      The script sets up the required directories and fetches the most recent
      binaries. Inspect the
      <a href="https://apx.vanillaos.org/install.sh" class="text-green-500 hover:underline">install.sh</a>
      file if you wish to see exactly what happens.
    </p>
  </div>
</template>

<script setup lang="ts">
import InstallTerminal from '../components/InstallTerminal.vue'
</script>
