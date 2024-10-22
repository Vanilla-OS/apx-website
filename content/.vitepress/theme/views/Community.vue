<template>
    <div class="mb-10 flex flex-col pb-20" id="community">
        <section id="community-hero"
            class="flex flex-col items-center justify-center gap-4 text-center py-16 bg-gray-100">
            <h2 class="text-3xl font-semibold lg:text-5xl">
                Community Assets
            </h2>
            <p class="text-xl font-normal lg:w-[35rem] lg:text-2xl">
                Find the stack that best suits your need.
            </p>
        </section>

        <div class="sticky top-0 w-full align-center bg-white z-50 px-4 border-b border-gray-300">
            <div class="flex items-stretch max-w-6xl mx-auto">
                <div class="relative flex items-center grow">
                    <span
                        class="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                        search
                    </span>
                    <input type="text" placeholder="Search stacks..." v-model="searchQuery"
                        class="w-full p-6 pl-10 focus:outline-none" />
                </div>

                <section id="notebook-toggler" class="flex justify-center gap-4">
                    <button class="px-6 py-2 text-xl font-semibold border-b-2"
                        :class="{ 'border-green-500': currentNotebook === 'stacks', 'border-transparent': currentNotebook !== 'stacks' }"
                        @click="currentNotebook = 'stacks'">
                        Stacks
                    </button>
                    <button class="px-6 py-2 text-xl font-semibold border-b-2"
                        :class="{ 'border-green-500': currentNotebook === 'pkgmanagers', 'border-transparent': currentNotebook !== 'pkgmanagers' }"
                        @click="currentNotebook = 'pkgmanagers'">
                        Pkg Managers
                    </button>
                </section>
            </div>
        </div>

        <div class="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
            <section id="cards" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-2">
                <div v-if="currentNotebook === 'stacks'" v-for="(stack, index) in filteredStacks" :key="index"
                    class="p-4 bg-white shadow-md rounded-lg flex flex-col justify-between h-full">
                    <div>
                        <h3 class="text-2xl font-semibold mb-2 flex items-center gap-2">
                            <span class="material-symbols-outlined text-green-500">dns</span>
                            {{ stack.name }}
                        </h3>
                        <p class="text-lg text-gray-600 mb-3">{{ stack.description }}</p>
                        <div class="flex items-center gap-2 text-md text-gray-500 mb-1">
                            <span class="material-symbols-outlined text-green-500">layers</span>
                            Base: {{ stack.base }}
                        </div>
                        <div class="flex items-center gap-2 text-md text-gray-500 mb-1">
                            <span class="material-symbols-outlined text-green-500">inventory_2</span>
                            Packages: {{ stack.packages.join(', ') }}
                        </div>
                        <div class="flex items-center gap-2 text-md text-gray-500 mb-2">
                            <span class="material-symbols-outlined text-green-500">settings</span>
                            Package Manager: {{ stack.pkgmanager }}
                        </div>
                    </div>
                    <button
                        class="mt-auto px-5 py-2 bg-[#24FF93] text-black rounded-full font-medium text-base transition duration-200 hover:bg-green-500"
                        @click="copyYaml(stack)">
                        <span v-if="!stack.copied" class="material-symbols-outlined align-middle">content_copy</span>
                        <span v-if="stack.copied" class="material-symbols-outlined align-middle">check</span>
                        {{ stack.copied ? 'Copied!' : 'Copy YAML' }}
                    </button>
                </div>
                <div v-if="currentNotebook === 'pkgmanagers'" v-for="(pkg, index) in filteredPkgs" :key="index"
                    class="p-4 bg-white shadow-md rounded-lg flex flex-col justify-between h-full">
                    <div>
                        <h3 class="text-2xl font-semibold mb-2 flex items-center gap-2">
                            <span class="material-symbols-outlined text-green-500">terminal</span>
                            {{ pkg.name }}
                        </h3>
                        <details class="mb-4">
                            <summary class="cursor-pointer text-green-500">Show Mapping</summary>
                            <ul class="mt-2 space-y-1">
                                <li v-for="(command, key) in pkg.commands" :key="key" class="flex items-center gap-2">
                                    <span class="material-symbols-outlined text-green-500">code</span>
                                    <span class="font-semibold">{{ key }}:</span> {{ command }}
                                </li>
                            </ul>
                        </details>
                    </div>
                    <button
                        class="mt-auto px-5 py-2 bg-[#24FF93] text-black rounded-full font-medium text-base transition duration-200 hover:bg-green-500"
                        @click="copyYaml(pkg)">
                        <span v-if="!pkg.copied" class="material-symbols-outlined align-middle">content_copy</span>
                        <span v-if="pkg.copied" class="material-symbols-outlined align-middle">check</span>
                        {{ pkg.copied ? 'Copied!' : 'Copy YAML' }}
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
            currentNotebook: 'stacks',
            searchQuery: '',
            stacks: [
                {
                    name: 'vanilla-golang',
                    description: 'This stack provides a Golang environment for building and running Golang applications. It is based on the Vanilla OS Pico image.',
                    base: 'ghcr.io/vanilla-os/pico:main',
                    packages: ['golang'],
                    pkgmanager: 'apt',
                    builtin: false,
                    copied: false,
                },
                {
                    name: 'fedora-nodejs',
                    description: 'This stack provides a Node.js environment for building and running Node applications. It is based on Fedora.',
                    base: 'docker.io/fedora:latest',
                    packages: ['nodejs', 'npm'],
                    pkgmanager: 'dnf',
                    builtin: false,
                    copied: false,
                },
                {
                    name: 'ubuntu-python',
                    description: 'This stack provides a Python environment for development. It is based on Ubuntu.',
                    base: 'docker.io/ubuntu:latest',
                    packages: ['python3', 'pip'],
                    pkgmanager: 'apt',
                    builtin: true,
                    copied: false,
                },
            ],
            pkgs: [
                {
                    name: 'apt',
                    commands: {
                        autoremove: 'apt autoremove',
                        clean: 'apt clean',
                        install: 'apt install',
                        list: 'apt list',
                        purge: 'apt purge',
                        remove: 'apt remove',
                        search: 'apt search',
                        show: 'apt show',
                        update: 'apt update',
                        upgrade: 'apt upgrade',
                    },
                    copied: false,
                },
                {
                    name: 'dnf',
                    commands: {
                        autoremove: 'dnf autoremove',
                        clean: 'dnf clean all',
                        install: 'dnf install',
                        list: 'dnf list',
                        remove: 'dnf remove',
                        search: 'dnf search',
                        update: 'dnf update',
                        upgrade: 'dnf upgrade',
                    },
                    copied: false,
                },
                {
                    name: 'pacman',
                    commands: {
                        autoremove: 'pacman -Rns',
                        clean: 'pacman -Sc',
                        install: 'pacman -S',
                        list: 'pacman -Ql',
                        remove: 'pacman -R',
                        search: 'pacman -Ss',
                        update: 'pacman -Syu',
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
                filtered = filtered.filter(stack => stack.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    stack.description.toLowerCase().includes(this.searchQuery.toLowerCase()));
            }
            return filtered;
        },
        filteredPkgs() {
            if (this.searchQuery) {
                return this.pkgs.filter(pkg => pkg.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
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
