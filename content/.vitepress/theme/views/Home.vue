<template>
    <div class="flex flex-col gap-32 mb-10 pb-44">
        <section
            id="what-is"
            class="flex flex-col gap-8 text-center justify-center items-center"
        >
            <img
                src="/assets/components/ellipse-3.png"
                alt="Blurry Circle"
                class="absolute left-0 w-[20rem] lg:w-[40rem] select-none"
            />
            <h2 class="text-3xl lg:text-5xl font-semibold">
                What is <span class="text-green-500">Apx</span>?
            </h2>
            <p class="text-xl lg:text-2xl font-normal lg:w-[35rem]">
                Apx is a platform that streamlines dev environments into
                portable, reproducible subsystems, seamlessly integrating them
                with the system.
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
            <img
                src="/assets/components/ellipse-1.png"
                alt="Blurry Circle"
                class="absolute left-0 w-[20rem] lg:w-[40rem] select-none"
            />
            <div class="flex flex-col gap-4 text-center lg:text-left">
                <h2 class="text-3xl lg:text-5xl font-semibold">
                    What are
                    <span class="text-green-500 dark:text-green-300"
                        >Subsystems</span
                    >?
                </h2>
                <p class="text-xl lg:text-2xl font-normal lg:w-[40rem]">
                    Apx subsystems are portable, reproducible dev environments
                    that can be shared and reused across projects.
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
                Apx integrates them with your system, providing that native
                feedback you're used to.
            </p>
        </section>
        <section
            id="stack"
            class="flex flex-row flex-wrap gap-12 justify-center items-center"
        >
            <img
                src="/assets/components/ellipse-2.png"
                alt="Blurry Circle"
                class="absolute left-0 w-[20rem] lg:w-[40rem] select-none mb-[20rem]"
            />
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
                        instructions that defines exactly what must be included
                        in your subsystem.
                    </p>
                    <p>
                        Got the best configuration for your project? Share it
                        with your colleagues so that they can replicate it!
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
                    Does not matter. Base your subsystems on top of any Linux
                    distribution, all you need is a Docker image, that’s all.
                </p>
            </div>
            <img
                src="/assets/components/ellipse-3.png"
                alt="Blurry Circle"
                class="absolute left-0 w-[20rem] lg:w-[40rem] select-none"
            />
            <div
                class="flex flex-row gap-6 lg:gap-20 text-center justify-center items-center"
            >
                <a
                    href="https://rockylinux.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/assets/components/rocky.svg"
                        alt="Rocky Linux"
                        class="w-16 lg:w-[10rem] hover:scale-110 transition-all duration-300 ease-in-out"
                        style="filter: drop-shadow(0 0 0px transparent)"
                        onmouseover="this.style.filter='drop-shadow(0 0 10px #10b981)'"
                        onmouseout="this.style.filter='drop-shadow(0 0 0px transparent)'"
                    />
                </a>
                <a
                    href="https://fedoraproject.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/assets/components/fedora.svg"
                        alt="Fedora"
                        class="w-16 lg:w-[10rem] hover:scale-110 transition-all duration-300 ease-in-out"
                        style="filter: drop-shadow(0 0 0px transparent)"
                        onmouseover="this.style.filter='drop-shadow(0 0 10px #3C6EB4)'"
                        onmouseout="this.style.filter='drop-shadow(0 0 0px transparent)'"
                    />
                </a>
                <a
                    href="https://vanillaos.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/assets/components/vanilla.svg"
                        alt="Vanilla OS"
                        class="w-16 lg:w-[10rem] hover:scale-110 all duration-300 ease-in-out"
                        style="filter: drop-shadow(0 0 0px transparent)"
                        onmouseover="this.style.filter='drop-shadow(0 0 10px #f9a932)'"
                        onmouseout="this.style.filter='drop-shadow(0 0 0px transparent)'"
                    />
                </a>
                <a
                    href="https://ubuntu.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/assets/components/ubuntu.svg"
                        alt="Ubuntu"
                        class="w-16 lg:w-[10rem] hover:scale-110 all duration-300 ease-in-out"
                        style="filter: drop-shadow(0 0 0px transparent)"
                        onmouseover="this.style.filter='drop-shadow(0 0 10px #E95420)'"
                        onmouseout="this.style.filter='drop-shadow(0 0 0px transparent)'"
                    />
                </a>
                <a
                    href="https://archlinux.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/assets/components/arch.svg"
                        alt="Arch Linux"
                        class="w-16 lg:w-[10rem] hover:scale-110 all duration-300 ease-in-out"
                        style="filter: drop-shadow(0 0 0px transparent)"
                        onmouseover="this.style.filter='drop-shadow(0 0 10px #1793D1)'"
                        onmouseout="this.style.filter='drop-shadow(0 0 0px transparent)'"
                    />
                </a>
            </div>
        </section>
    </div>
</template>
