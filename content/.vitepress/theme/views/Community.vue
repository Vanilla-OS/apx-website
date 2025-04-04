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
      <p class="lg:text-1xl text-lg font-normal md:text-xl lg:w-[35rem]">
        Find the stack that best suits your need.
      </p>
    </section>

    <div
      class="align-center dark:border-opacity-20 sticky top-0 z-40 w-full border-b border-gray-300 bg-white px-4 dark:border-white dark:bg-[#161616]"
    >
      <div class="mx-auto flex max-w-6xl flex-col items-stretch sm:flex-row">
        <div class="relative mb-4 flex grow items-center gap-5 sm:mb-0">
          <div>
            <span
              class="material-symbols-outlined absolute top-1/2 left-4 -translate-y-1/2 transform text-gray-500"
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
          v-if="loading"
          class="col-span-full row-span-full flex flex-col items-center justify-center text-center font-semibold opacity-60"
        >
          <p class="text-3xl">Loading...</p>
        </div>
        <div
          v-else-if="
            currentNotebook === 'stacks' && filteredStacks.length === 0
          "
          class="col-span-full row-span-full flex flex-col items-center justify-center text-center font-semibold opacity-60"
        >
          <p class="text-3xl">Not Found</p>
        </div>
        <div
          v-else-if="currentNotebook === 'stacks'"
          v-for="(stack, index) in filteredStacks"
          :key="index"
          class="flex h-full flex-col justify-between gap-4 rounded-xl bg-white p-6 shadow-md dark:bg-[#161616]"
        >
          <div>
            <h3 class="mb-2 flex items-center gap-2 text-2xl font-semibold">
              <span class="material-symbols-outlined text-green-500">dns</span>
              {{ stack.name }}
            </h3>
            <div
              v-for="(icon, key) in {
                layers: 'Base: ' + stack.base,
                inventory_2: 'Packages: ' + stack.packages.join(', '),
                settings: 'Package Manager: ' + stack.pkgmanager,
              }"
              :key="key"
              class="text-md dark:text-opacity-45 mb-1 flex items-center gap-2 text-gray-500 dark:text-white"
            >
              <span class="material-symbols-outlined text-green-500">{{
                key
              }}</span>
              {{ icon }}
            </div>
          </div>
          <button
            class="mt-auto flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full bg-[#24FF93] px-5 py-2 text-base font-medium text-black transition duration-200 hover:bg-green-500"
            @click="downloadYaml(stack)"
          >
            <span
              v-if="!stack.downloaded"
              class="material-symbols-outlined align-middle"
              >download</span
            >
            <span
              v-if="stack.downloaded"
              class="material-symbols-outlined align-middle"
              >check</span
            >
            {{ stack.downloaded ? "Downloading!" : "Download YAML" }}
          </button>
          <details>
            <summary class="cursor-pointer text-green-500">
              What’s next after downloading?
            </summary>
            <p class="dark:text-opacity-45 mt-2 text-gray-500 dark:text-white">
              After downloading the YAML file, run the following command to
              import the stack on your local machine.
            </p>

            <pre
              class="mt-2 overflow-y-auto rounded-md bg-gray-100 p-4 dark:bg-[#1E1E1E]"
            ><code class="me-4">apx stacks import -i <span class="text-green-500">{{ stack.name }}.yml</span></code></pre>

            <button
              class="mt-5 flex w-full flex-row items-center justify-center gap-2 rounded-full bg-gray-100 p-4 px-5 py-2 text-base font-medium transition duration-200 hover:bg-green-500 dark:bg-[#1E1E1E] hover:dark:text-black"
              @click="
                copyToClipboard('apx stacks import -i', stack.name, '.yml')
              "
            >
              <span
                class="material-symbols-outlined align-middle"
                v-if="!copied"
                >content_copy</span
              >
              <span class="material-symbols-outlined align-middle" v-if="copied"
                >check</span
              >
              {{ copied ? "Copied!" : "Copy Command" }}
            </button>
          </details>
        </div>
        <div
          v-else-if="
            currentNotebook === 'pkgmanagers' && filteredPkgs.length === 0
          "
          class="col-span-full row-span-full flex flex-col items-center justify-center text-center font-semibold opacity-60"
        >
          <p class="text-3xl">Not Found</p>
        </div>
        <div
          v-else-if="currentNotebook === 'pkgmanagers'"
          v-for="(pkg, index) in filteredPkgs"
          :key="`pkgmanager-${index}`"
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
                  v-for="(cmd, label) in {
                    'Auto Remove': pkg.cmdautoremove,
                    Clean: pkg.cmdclean,
                    Install: pkg.cmdinstall,
                    List: pkg.cmdlist,
                    Purge: pkg.cmdpurge,
                    Remove: pkg.cmdremove,
                    Search: pkg.cmdsearch,
                    Show: pkg.cmdshow,
                    Update: pkg.cmdupdate,
                    Upgrade: pkg.cmdupgrade,
                  }"
                  :key="label"
                  class="flex items-center gap-2"
                >
                  <span class="material-symbols-outlined text-green-500"
                    >code</span
                  >
                  <span class="font-semibold">{{ label }}:</span> {{ cmd }}
                </li>
              </ul>
            </details>
          </div>
          <button
            class="mt-auto rounded-full bg-[#24FF93] px-5 py-2 text-base font-medium text-black transition duration-200 hover:bg-green-500"
            @click="downloadYaml(pkg)"
          >
            <span
              v-if="!pkg.downloaded"
              class="material-symbols-outlined align-middle"
              >download</span
            >
            <span
              v-if="pkg.downloaded"
              class="material-symbols-outlined align-middle"
              >check</span
            >
            {{ pkg.downloaded ? "Downloading!" : "Download YAML" }}
          </button>
          <details>
            <summary class="cursor-pointer text-green-500">
              What’s next after downloading?
            </summary>
            <p class="dark:text-opacity-45 mt-2 text-gray-500 dark:text-white">
              After downloading the YAML file, run the following command to
              import the package manager on your local machine inside the
              directory where the YAML file is located.
            </p>

            <pre
              class="mt-2 overflow-y-auto rounded-md bg-gray-100 p-4 dark:bg-[#1E1E1E]"
            ><code class="me-4">apx pkgmanagers import -i <span class="text-green-500">{{ pkg.name }}.yml</span></code></pre>

            <button
              class="mt-5 flex w-full flex-row items-center justify-center gap-2 rounded-full bg-gray-100 p-4 px-5 py-2 text-base font-medium transition duration-200 hover:bg-green-500 dark:bg-[#1E1E1E]"
              @click="
                copyToClipboard('apx pkgmanagers import -i', pkg.name, '.yml')
              "
            >
              <span
                class="material-symbols-outlined align-middle"
                v-if="!copied"
                >content_copy</span
              >
              <span class="material-symbols-outlined align-middle" v-if="copied"
                >check</span
              >
              {{ copied ? "Copied!" : "Copy Command" }}
            </button>
          </details>
        </div>
      </section>
    </div>
  </div>
  <p class="text-opacity-45 my-10 text-center text-black dark:text-white">
    Check out the
    <a
      href="https://apx-community.vanillaos.org/feed.xml"
      target="_blank"
      class="text-green-500 hover:underline"
      >Atom Feed</a
    >
    to get every new stack and package manager in your feed reader.
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Stack {
  name: string;
  base: string;
  packages: string[];
  pkgmanager: string;
  builtIn?: boolean;
  downloaded: boolean;
}

interface PkgManager {
  name: string;
  cmdautoremove: string;
  cmdclean: string;
  cmdinstall: string;
  cmdlist: string;
  cmdpurge: string;
  cmdremove: string;
  cmdsearch: string;
  cmdshow: string;
  cmdupdate: string;
  cmdupgrade: string;
  builtIn?: boolean;
  needSudo?: boolean;
  downloaded: boolean;
}

export default defineComponent({
  data() {
    return {
      currentNotebook: "stacks" as string,
      searchQuery: "" as string,
      stacks: [] as Stack[],
      pkgs: [] as PkgManager[],
      copied: false as boolean,
      loading: true as boolean,
    };
  },
  computed: {
    filteredStacks(): Stack[] {
      return this.searchQuery
        ? this.stacks.filter((stack: Stack) =>
            stack.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
          )
        : this.stacks;
    },
    filteredPkgs(): PkgManager[] {
      return this.searchQuery
        ? this.pkgs.filter((pkg: PkgManager) =>
            pkg.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
          )
        : this.pkgs;
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Vanilla-OS/apx-community/refs/heads/main/_index.json",
        );
        const data = await response.json();
        this.stacks = data.stacks;
        this.pkgs = data.pkgManagers;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
    downloadYaml(item: Stack | PkgManager) {
      let yamlContent = "";
      if ("base" in item && "packages" in item && "pkgmanager" in item) {
        yamlContent = `- name: "${item.name}"
  base: "${item.base}"
  packages: ["${(item.packages as string[]).join('", "')}"]
  pkgmanager: "${item.pkgmanager}"
  builtin: ${item.builtIn ?? false}`;
      } else if ("cmdinstall" in item && "cmdupdate" in item) {
        yamlContent = `- name: ${item.name}
  model: 2
  needSudo: ${item.needSudo}
  cmdautoremove: ${item.cmdautoremove}
  cmdclean: ${item.cmdclean}
  cmdinstall: ${item.cmdinstall}
  cmdlist: ${item.cmdlist}
  cmdpurge: ${item.cmdpurge}
  cmdremove: ${item.cmdremove}
  cmdsearch: ${item.cmdsearch}
  cmdshow: ${item.cmdshow}
  cmdupdate: ${item.cmdupdate}
  cmdupgrade: ${item.cmdupgrade}
  builtin: ${item.builtIn}`;
      } else {
        yamlContent = `name: ${(item as Stack | PkgManager).name}`;
      }

      const blob = new Blob([yamlContent], { type: "text/yaml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${item.name}.yml`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      item.downloaded = true;
      setTimeout(() => {
        item.downloaded = false;
      }, 2000);
    },
    copyToClipboard(command: string, name: string, extension: string) {
      const fullCommand = `${command} ${name}${extension}`;
      navigator.clipboard.writeText(fullCommand).then(() => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      });
    },
  },
  created() {
    this.fetchData();
  },
});
</script>
