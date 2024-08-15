<script setup lang="ts">
import { useData } from "vitepress";
import Hero from "./components/Hero.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { page, frontmatter } = useData();
</script>

<template>
    <nav class="flex flex-col gap-0 bg-[#101010] w-full">
        <div
            class="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-16 py-5 border-b border-white border-opacity-20"
        >
            <img src="/assets/logo.svg" alt="Logo" class="h-8 mb-4 sm:mb-0" />
            <div
                class="flex flex-row items-center gap-4 sm:gap-8 font-light text-base opacity-80"
            >
                <a href="#" class="text-white">Getting Started</a>
                <a href="#" class="text-white">Documentation</a>
                <a href="#" class="text-white">Support</a>
            </div>
        </div>
        <div
            class="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-16 py-2"
        >
            <p class="text-white opacity-40 font-normal mb-4 sm:mb-0">v2.4.3</p>
            <div
                class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 font-light opacity-80 text-base"
            >
                <div class="flex flex-row items-center gap-4">
                    <a href="#" class="text-white">Subsystems</a>
                    <a href="#" class="text-white">Stacks</a>
                    <a href="#" class="text-white">Package Managers</a>
                </div>
                <div
                    class="flex flex-row sm:flex-row gap-2 justify-center items-center mt-4 sm:mt-0"
                >
                    <a
                        href="#"
                        class="border border-white text-white px-4 py-2 rounded-full text-base hover:bg-white hover:text-black transition duration-200"
                        >Source Code</a
                    >
                    <a
                        href="#"
                        class="bg-green-400 text-black px-4 py-2 rounded-full text-base hover:bg-green-500 transition duration-200"
                        >Download</a
                    >
                </div>
            </div>
        </div>
    </nav>
    <div v-if="frontmatter.home">
        <Hero />
    </div>
    <div class="mx-auto max-w-6xl px-4 pt-20 sm:px-6 lg:px-8">
        <div v-if="frontmatter.home">
            <div class="flex flex-col gap-32 mb-10 pb-44">
                <section
                    id="what-is"
                    class="flex flex-col gap-8 text-center justify-center items-center"
                >
                    <h2 class="text-3xl lg:text-5xl font-semibold">
                        What is <span class="text-green-500">Apx</span>?
                    </h2>
                    <p class="text-xl lg:text-2xl font-normal lg:w-[35rem]">
                        Apx is a platform that streamlines dev environments into
                        portable, reproducible subsystems, seamlessly
                        integrating them with the system.
                    </p>
                    <picture>
                        <source
                            media="(prefers-color-scheme: dark)"
                            srcset="/assets/components/what-is-dark.svg"
                        />
                        <source
                            media="(prefers-color-scheme: light)"
                            srcset="/assets/components/what-is.svg"
                        />
                        <img
                            alt="What is Apx?"
                            src="/assets/components/what-is.svg"
                            class="lg:w-[50rem]"
                        />
                    </picture>
                </section>
                <section
                    id="subsystems"
                    class="flex flex-col lg:flex-row flex-wrap gap-12 justify-center items-center"
                >
                    <picture>
                        <source
                            media="(prefers-color-scheme: dark)"
                            srcset="/assets/components/subsystems-dark.svg"
                        />
                        <source
                            media="(prefers-color-scheme: light)"
                            srcset="/assets/components/subsystems.svg"
                        />
                        <img
                            src="/assets/components/subsystems.svg"
                            alt="Subsystems"
                            class="w-[10rem] lg:w-[25rem]"
                        />
                    </picture>
                    <div class="flex flex-col gap-4 text-center lg:text-left">
                        <h2 class="text-3xl lg:text-5xl font-semibold">
                            What are
                            <span class="text-green-500 dark:text-green-300"
                                >Subsystems</span
                            >?
                        </h2>
                        <p class="text-xl lg:text-2xl font-normal lg:w-[40rem]">
                            Apx subsystems are portable, reproducible dev
                            environments that can be shared and reused across
                            projects.
                        </p>
                    </div>
                </section>
                <section
                    id="vscode"
                    class="flex flex-col flex-wrap gap-12 justify-center items-center text-center"
                >
                    <picture>
                        <source
                            media="(prefers-color-scheme: dark)"
                            srcset="/assets/components/vscode-dark.svg"
                        />
                        <source
                            media="(prefers-color-scheme: light)"
                            srcset="/assets/components/vscode.svg"
                        />
                        <img src="/assets/components/vscode.svg" alt="VSCode" />
                    </picture>
                    <p class="text-xl lg:text-2xl lg:w-[35rem]">
                        Apx integrates them with your system, providing that
                        native feedback you're used to.
                    </p>
                </section>
                <section
                    id="stack"
                    class="flex flex-row flex-wrap gap-12 justify-center items-center"
                >
                    <picture>
                        <source
                            media="(prefers-color-scheme: dark)"
                            srcset="/assets/components/stack-dark.png"
                        />
                        <source
                            media="(prefers-color-scheme: light)"
                            srcset="/assets/components/stack.png"
                        />
                        <img
                            src="/assets/components/stack.png"
                            alt="Stack"
                            class="w-[10rem] lg:w-[25rem]"
                        />
                    </picture>
                    <div class="flex flex-col gap-4 text-center lg:text-left">
                        <h2 class="text-2xl lg:text-5xl font-semibold">
                            Share the perfect
                            <span class="text-green-500">Stack</span>
                        </h2>
                        <div
                            class="flex flex-col gap-12 text-xl lg:text-2xl font-normal lg:w-[40rem]"
                        >
                            <p>
                                Subsystems area created using stacks, a set of
                                instructions that defines exactly what must be
                                included in your subsystem.
                            </p>
                            <p>
                                Got the best configuration for your project?
                                Share it with your colleagues so that they can
                                replicate it!
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    id="what-is"
                    class="flex flex-col gap-40 text-center justify-center items-center"
                >
                    <div
                        class="flex flex-col gap-8 text-center justify-center items-center"
                    >
                        <h2 class="text-2xl lg:text-6xl font-semibold">
                            What is your
                            <span class="text-green-500">distribution</span>?
                        </h2>
                        <p class="text-xl lg:text-2xl font-normal lg:w-[40rem]">
                            Does not matter. Base your subsystems on top of any
                            Linux distribution, all you need is a Docker image,
                            that’s all.
                        </p>
                    </div>
                    <img
                        src="/assets/components/distributions.svg"
                        alt="Multiple distributions"
                        class="w-[100rem]"
                    />
                </section>
            </div>
        </div>
    </div>
    <footer class="bg-[#101010] text-white py-10">
        <div
            class="flex flex-col gap-8 justify-center items-center px-4 sm:px-10 lg:px-20"
        >
            <div
                class="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center pb-10 sm:px-10 border-b border-[#333836]"
            >
                <p class="text-[#727976] text-center sm:text-left">
                    Apx is made possible thanks to the following projects.
                </p>
                <img
                    src="/assets/components/footer/projects.svg"
                    alt="Projects"
                    class="mt-4 sm:mt-0"
                />
            </div>
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-48">
                <div class="flex flex-col gap-2">
                    <h3
                        class="text-white text-opacity-70 text-base font-semibold"
                    >
                        Help
                    </h3>
                    <a href="/docs" class="text-white text-opacity-40"
                        >Documentation</a
                    >
                    <a
                        href="/getting-started"
                        class="text-white text-opacity-40"
                        >Getting Started</a
                    >
                    <a href="/package" class="text-white text-opacity-40"
                        >Package for Your Distribution</a
                    >
                    <a href="/share/stacks" class="text-white text-opacity-40"
                        >Sharing Stacks</a
                    >
                    <a href="/create/stacks" class="text-white text-opacity-40"
                        >Creating Stacks</a
                    >
                </div>
                <div class="flex flex-col gap-5">
                    <div class="flex flex-col gap-2">
                        <h3
                            class="text-white text-opacity-70 text-base font-semibold"
                        >
                            Developers
                        </h3>
                        <a href="/docs" class="text-white text-opacity-40"
                            >Source Code</a
                        >
                        <a
                            href="/getting-started"
                            class="text-white text-opacity-40"
                            >Report a bug</a
                        >
                    </div>
                    <div class="flex flex-col gap-2">
                        <h3
                            class="text-white text-opacity-70 text-base font-semibold"
                        >
                            Get Apx
                        </h3>
                        <a href="/download" class="text-white text-opacity-40"
                            >Download</a
                        >
                        <a
                            href="https://github.com/"
                            class="text-white text-opacity-40"
                            >Build From Source</a
                        >
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <h3
                        class="text-white text-opacity-70 text-base font-semibold"
                    >
                        Community
                    </h3>
                    <a href="/docs" class="text-white text-opacity-40"
                        >GitHub</a
                    >
                    <a
                        href="/getting-started"
                        class="text-white text-opacity-40"
                        >Discord Community</a
                    >
                    <a href="/package" class="text-white text-opacity-40"
                        >Community Stacks</a
                    >
                </div>
            </div>
        </div>
        <div
            class="flex flex-col sm:flex-row flex-wrap justify-between items-center pt-10 px-4 sm:px-10 lg:px-20 gap-6 sm:gap-0"
        >
            <div class="flex flex-col sm:flex-row flex-wrap gap-5 items-center">
                <img src="/assets/components/footer/logo.svg" alt="Logo" />
                <div class="flex flex-col gap-2 text-center sm:text-left">
                    <p class="text-white text-opacity-40">
                        All trademarks and logos are the property of their
                        respective owners.
                    </p>
                    <p class="text-white text-opacity-40">
                        Apx, Copyright 2024
                    </p>
                </div>
            </div>
            <div class="flex flex-col gap-1 text-center sm:text-right">
                <p class="text-white text-opacity-40">
                    Made with coffee by
                    <span class="text-green-500">&lt;developers&gt;</span>
                </p>
                <p class="text-white text-opacity-40">
                    Sponsored by
                    <span class="text-green-500">fabricators.ltd</span>
                </p>
            </div>
        </div>
    </footer>
</template>
