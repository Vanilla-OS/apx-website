<template>
  <div class="mb-10 flex flex-col pb-20" id="community">
    <section
      id="community-hero"
      class="flex flex-col items-center justify-center gap-4 py-16 text-center text-white"
      style="background-image: url(&quot;/assets/components/hero-bg.png&quot;)"
    >
      <h2 class="text-3xl font-semibold lg:text-5xl">
        <span class="text-green-500">Community</span> Assets
      </h2>
      <p class="lg:text-1xl text-xl font-normal lg:w-[35rem]">
        Find the stack that best suits your need.
      </p>
    </section>

    <div
      class="align-center sticky top-0 z-50 w-full border-b border-gray-300 bg-white px-4 dark:border-white dark:border-opacity-20 dark:bg-[#161616]"
    >
      <div class="mx-auto flex max-w-6xl items-stretch">
        <div class="relative flex grow items-center gap-5">
          <div>
            <span
              class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-500"
            >
              search
            </span>
          </div>
          <div class="w-full">
            <input
              type="text"
              placeholder="Search stacks..."
              v-model="searchQuery"
              class="w-full p-6 pl-10 focus:outline-none dark:bg-[#161616]"
            />
          </div>
        </div>

        <section id="notebook-toggler" class="flex justify-center gap-4">
          <button
            class="border-b-2 px-6 py-2 text-lg font-medium"
            :class="{
              'border-green-500': currentNotebook === 'stacks',
              'border-transparent': currentNotebook !== 'stacks',
            }"
            @click="currentNotebook = 'stacks'"
          >
            Stacks
          </button>
          <button
            class="border-b-2 px-6 py-2 text-lg font-medium"
            :class="{
              'border-green-500': currentNotebook === 'pkgmanagers',
              'border-transparent': currentNotebook !== 'pkgmanagers',
            }"
            @click="currentNotebook = 'pkgmanagers'"
          >
            Pkg Managers
          </button>
        </section>
      </div>
    </div>

    <div class="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
      <section
        id="cards"
        class="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-if="currentNotebook === 'stacks'"
          v-for="(stack, index) in filteredStacks"
          :key="index"
          class="flex h-full flex-col justify-between gap-4 rounded-xl bg-white p-6 shadow-md dark:bg-[#161616]"
        >
          <div>
            <h3 class="mb-2 flex items-center gap-2 text-2xl font-semibold">
              <span class="material-symbols-outlined text-green-500">dns</span>
              {{ stack.name }}
            </h3>
            <p
              class="mb-3 text-lg text-gray-600 dark:text-white dark:text-opacity-45"
            >
              {{ stack.description }}
            </p>
            <div
              v-for="(icon, key) in {
                layers: 'Base: ' + stack.base,
                inventory_2: 'Packages: ' + stack.packages.join(', '),
                settings: 'Package Manager: ' + stack.pkgmanager,
              }"
              :key="key"
              class="text-md mb-1 flex items-center gap-2 text-gray-500 dark:text-white dark:text-opacity-45"
            >
              <span class="material-symbols-outlined text-green-500">{{
                key
              }}</span>
              {{ icon }}
            </div>
          </div>
          <button
            class="mt-auto rounded-full bg-[#24FF93] px-5 py-2 text-base font-medium text-black transition duration-200 hover:bg-green-500 flex flex-row items-center justify-center gap-2"
            @click="copyYaml(stack)"
          >
            <span
              v-if="!stack.copied"
              class="material-symbols-outlined align-middle"
              >content_copy</span
            >
            <span
              v-if="stack.copied"
              class="material-symbols-outlined align-middle"
              >check</span
            >
            {{ stack.copied ? "Copied!" : "Copy YAML" }}
          </button>
        </div>
        <div
          v-if="currentNotebook === 'pkgmanagers'"
          v-for="(pkg, index) in filteredPkgs"
          :key="index"
          class="flex h-full flex-col justify-between gap-4 rounded-xl bg-white p-6 shadow-md dark:bg-[#161616]"
        >
          <div>
            <h3 class="mb-2 flex items-center gap-2 text-2xl font-semibold">
              <span class="material-symbols-outlined text-green-500"
                >terminal</span
              >
              {{ pkg.name }}
            </h3>
            <details class="mb-4">
              <summary class="cursor-pointer text-green-500">
                Show Mapping
              </summary>
              <ul class="mt-2 space-y-1">
                <li
                  v-for="(command, key) in pkg.commands"
                  :key="key"
                  class="flex items-center gap-2"
                >
                  <span class="material-symbols-outlined text-green-500"
                    >code</span
                  >
                  <span class="font-semibold">{{ key }}:</span> {{ command }}
                </li>
              </ul>
            </details>
          </div>
          <button
            class="mt-auto rounded-full bg-[#24FF93] px-5 py-2 text-base font-medium text-black transition duration-200 hover:bg-green-500"
            @click="copyYaml(pkg)"
          >
            <span
              v-if="!pkg.copied"
              class="material-symbols-outlined align-middle"
              >content_copy</span
            >
            <span
              v-if="pkg.copied"
              class="material-symbols-outlined align-middle"
              >check</span
            >
            {{ pkg.copied ? "Copied!" : "Copy YAML" }}
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentNotebook: "stacks",
      searchQuery: "",
      stacks: [
        {
          name: "vanilla-golang",
          description:
            "This stack provides a Golang environment for building and running Golang applications. It is based on the Vanilla OS Pico image.",
          base: "ghcr.io/vanilla-os/pico:main",
          packages: ["golang"],
          pkgmanager: "apt",
          builtin: false,
          copied: false,
        },
        {
          name: "fedora-nodejs",
          description:
            "This stack provides a Node.js environment for building and running Node applications. It is based on Fedora.",
          base: "docker.io/fedora:latest",
          packages: ["nodejs", "npm"],
          pkgmanager: "dnf",
          builtin: false,
          copied: false,
        },
        {
          name: "ubuntu-python",
          description:
            "This stack provides a Python environment for development. It is based on Ubuntu.",
          base: "docker.io/ubuntu:latest",
          packages: ["python3", "pip"],
          pkgmanager: "apt",
          builtin: true,
          copied: false,
        },
      ],
      pkgs: [
        {
          name: "apt",
          commands: {
            autoremove: "apt autoremove",
            clean: "apt clean",
            install: "apt install",
            list: "apt list",
            purge: "apt purge",
            remove: "apt remove",
            search: "apt search",
            show: "apt show",
            update: "apt update",
            upgrade: "apt upgrade",
          },
          copied: false,
        },
        {
          name: "dnf",
          commands: {
            autoremove: "dnf autoremove",
            clean: "dnf clean all",
            install: "dnf install",
            list: "dnf list",
            remove: "dnf remove",
            search: "dnf search",
            update: "dnf update",
            upgrade: "dnf upgrade",
          },
          copied: false,
        },
        {
          name: "pacman",
          commands: {
            autoremove: "pacman -Rns",
            clean: "pacman -Sc",
            install: "pacman -S",
            list: "pacman -Ql",
            remove: "pacman -R",
            search: "pacman -Ss",
            update: "pacman -Syu",
          },
          copied: false,
        },
      ],
    };
  },
  computed: {
    filteredStacks() {
      let filtered = this.stacks;
      if (this.searchQuery) {
        filtered = filtered.filter(
          (stack) =>
            stack.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            stack.description
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()),
        );
      }
      return filtered;
    },
    filteredPkgs() {
      if (this.searchQuery) {
        return this.pkgs.filter((pkg) =>
          pkg.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
        );
      }
      return this.pkgs;
    },
  },
  methods: {
    copyYaml(item) {
      item.copied = true;
      setTimeout(() => {
        item.copied = false;
      }, 2000);
    },
  },
};
</script>
