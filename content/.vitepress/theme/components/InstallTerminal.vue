<template>
  <div class="w-11/12 max-w-lg">
    <div class="mb-4 flex border-b border-gray-700">
      <button
        class="px-4 py-2"
        :class="tab === 'curl' ? 'bg-black text-white' : 'text-gray-400'"
        @click="tab = 'curl'"
      >
        curl
      </button>
      <button
        class="px-4 py-2"
        :class="tab === 'wget' ? 'bg-black text-white' : 'text-gray-400'"
        @click="tab = 'wget'"
      >
        wget
      </button>
    </div>
    <pre class="overflow-x-auto rounded-md bg-black p-4 text-green-400"><code>{{ command }}</code></pre>
    <button
      class="mt-4 w-full rounded-full bg-gray-100 p-2 text-black transition duration-200 hover:bg-green-500"
      @click="copy"
    >
      <span class="material-symbols-outlined align-middle" v-if="!copied">content_copy</span>
      <span class="material-symbols-outlined align-middle" v-else>check</span>
      {{ copied ? 'Copied!' : 'Copy Command' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const tab = ref<'curl' | 'wget'>('curl')
const copied = ref(false)

const command = computed(() =>
  tab.value === 'curl'
    ? 'curl -s https://apx.vanillaos.org/install.sh | bash'
    : 'wget -qO- https://apx.vanillaos.org/install.sh | bash'
)

function copy() {
  navigator.clipboard.writeText(command.value).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  })
}
</script>
