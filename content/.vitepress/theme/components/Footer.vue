<template>
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
                    <a href="https://fabricators.ltd" class="text-green-500">fabricators.ltd</a>
                </p>
            </div>
        </div>
    </footer>
</template>
