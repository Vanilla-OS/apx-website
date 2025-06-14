<template>
  <div class="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 py-20">
    <h2 class="text-center text-3xl font-semibold lg:text-5xl">
      Install <span class="text-green-500">Apx</span>
    </h2>
    <p class="text-center text-xl lg:text-2xl">
      This script downloads and installs the latest release of Apx. You'll need
      <strong>curl</strong> or <strong>wget</strong> and a container engine like
      <strong>podman</strong> or <strong>docker</strong>.
    </p>
    <InstallTerminal />
    <p class="text-center text-sm text-gray-500 lg:text-base">
      The script sets up the required directories and fetches the most recent
      binaries. Inspect the
      <a
        href="https://apx.vanillaos.org/install.sh"
        class="text-green-500 hover:underline"
        >install.sh</a
      >
      file if you wish to see exactly what happens.
    </p>
  </div>
  <div class="mx-auto max-w-4xl px-4 pb-20">
    <h3 class="mb-4 text-center text-2xl font-semibold">
      Tested Distributions
    </h3>
    <table class="w-full table-auto border-collapse text-left">
      <thead class="border-b border-gray-300 dark:border-gray-600">
        <tr class="bg-gray-100 dark:bg-gray-700">
          <th class="p-2">Distribution</th>
          <th class="p-2">Installation</th>
          <th class="p-2">Notes</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-300 dark:divide-gray-600">
        <tr>
          <td class="p-2 font-medium">Vanilla OS 2 Orchid</td>
          <td class="p-2">Pre-installed</td>
          <td class="p-2">
            Development environment; most stable and supported
          </td>
        </tr>
        <tr>
          <td class="p-2 font-medium">Fedora</td>
          <td class="p-2">Install script</td>
          <td class="p-2">Working</td>
        </tr>
        <tr>
          <td class="p-2 font-medium">Chrome OS</td>
          <td class="p-2">Install script</td>
          <td class="p-2">
            Uses the built-in Linux subsystem; the script handles everything
          </td>
        </tr>
        <tr>
          <td class="p-2 font-medium">Arch Linux</td>
          <td class="p-2">Install script</td>
          <td class="p-2">Working</td>
        </tr>
        <tr>
          <td class="p-2 font-medium">Ubuntu</td>
          <td class="p-2">Install script</td>
          <td class="p-2">Working</td>
        </tr>
        <tr>
          <td class="p-2 font-medium">openSUSE</td>
          <td class="p-2">Install script</td>
          <td class="p-2">Working</td>
        </tr>
        <tr>
          <td class="p-2 font-medium">Debian</td>
          <td class="p-2">Install script</td>
          <td class="p-2">Working</td>
        </tr>
        <tr>
          <td class="p-2 font-medium">Other OS</td>
          <td class="p-2">Install script</td>
          <td class="p-2">Should work anywhere, but currently untested</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import InstallTerminal from "../components/InstallTerminal.vue";
</script>
