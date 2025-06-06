<template>
  <div class="mx-auto max-w-6xl px-4 pt-20 sm:px-6 lg:px-8">
    <div class="mb-10 flex flex-col gap-32 pb-44" id="main">
      <section
        id="what-is"
        class="flex flex-col items-center justify-center gap-8 text-center"
      >
        <img
          src="/assets/components/decorations/ellipse-3.png"
          alt="Blurry Circle"
          class="absolute left-0 w-[20rem] select-none lg:w-[40rem]"
        />
        <h2 class="text-3xl font-semibold lg:text-5xl">
          What is <span class="text-green-500">Apx</span>?
        </h2>
        <p class="text-xl font-normal lg:w-[35rem] lg:text-2xl">
          Apx is a platform that streamlines dev environments into portable,
          reproducible subsystems, seamlessly integrating them with the system.
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
            alt="A diagram showing how Apx works"
            src="/assets/components/what-is.svg"
            class="lg:w-[50rem]"
          />
        </picture>
      </section>
      <section
        id="subsystems"
        class="flex flex-col flex-wrap items-center justify-center gap-12 lg:flex-row"
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
            alt="A diagram showing how Apx subsystems work"
            class="w-[10rem] lg:w-[25rem]"
          />
        </picture>
        <img
          src="/assets/components/decorations/ellipse-1.png"
          alt="Blurry Circle, decorative element"
          class="absolute left-0 w-[20rem] select-none lg:w-[40rem]"
        />
        <div class="flex flex-col gap-4 text-center lg:text-left">
          <h2 class="text-3xl font-semibold lg:text-5xl">
            What are
            <span class="text-green-500">Subsystems</span>?
          </h2>
          <p class="text-xl font-normal lg:w-[40rem] lg:text-2xl">
            Apx subsystems are portable, reproducible dev environments that can
            be shared and reused across projects.
          </p>
        </div>
      </section>
      <section
        id="vscode"
        class="flex flex-col flex-wrap items-center justify-center gap-12 text-center"
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
          <img
            src="/assets/components/vscode.svg"
            alt="An illustration of VSCode, which inside the window it has a demo Go code"
          />
        </picture>
        <p class="text-xl lg:w-[35rem] lg:text-2xl">
          Apx integrates them with your system, providing that native feedback
          you're used to.
        </p>
      </section>
      <section
        id="stack"
        class="flex flex-row flex-wrap items-center justify-center gap-12 lg:mb-64"
      >
        <img
          src="/assets/components/decorations/ellipse-2.png"
          alt="Blurry Circle, decorative element"
          class="absolute left-0 mb-[20rem] w-[20rem] select-none lg:w-[40rem]"
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
            alt="A diagram with a few icons of different technologies, like VSCode, Python, Go, and React, all being stacks"
            class="w-[10rem] lg:w-[25rem]"
          />
        </picture>
        <div class="flex flex-col gap-4 text-center lg:text-left">
          <h2 class="text-2xl font-semibold lg:text-5xl">
            Share the perfect
            <span class="text-green-500">Stack</span>
          </h2>
          <div
            class="flex flex-col gap-12 text-xl font-normal lg:w-[40rem] lg:text-2xl"
          >
            <p>
              Subsystems are created using stacks, a set of instructions that
              defines exactly what must be included in your subsystem.
            </p>
            <p>
              Got the best configuration for your project? Share it with your
              colleagues so that they can replicate it!
            </p>
          </div>
        </div>
      </section>
      <section
        id="what-is"
        class="flex flex-col items-center justify-center gap-40 text-center"
      >
        <div
          class="flex flex-col items-center justify-center gap-8 text-center"
        >
          <h2 class="text-2xl font-semibold lg:text-6xl">
            What is your
            <span class="text-green-500">distribution</span>?
          </h2>
          <p class="text-xl font-normal lg:w-2xl lg:text-2xl">
            Does not matter. Base your subsystems on top of any Linux
            distribution, all you need is a Docker image, that’s all.
          </p>
        </div>
        <img
          src="/assets/components/decorations/ellipse-3.png"
          alt="Blurry Circle, decorative element"
          class="absolute left-0 w-80 select-none lg:w-2xl"
        />
        <div
          class="flex flex-col items-center justify-center gap-12 text-center md:flex-row lg:gap-20"
        >
          <a
            v-for="(distro, index) in distributions"
            :key="index"
            :href="distro.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="distro.imgSrc"
              :alt="distro.alt"
              class="w-24 transition-all duration-300 ease-in-out hover:scale-110 active:scale-90 md:w-24 lg:w-40"
              style="filter: drop-shadow(0 0 0px transparent)"
              @mouseover="applyShadow($event, distro.shadowColor)"
              @mouseout="removeShadow($event)"
            />
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const distributions = ref([
  {
    link: "https://rockylinux.org/",
    imgSrc: "/assets/components/distributions/rocky.svg",
    alt: "Rocky Linux",
    shadowColor: "#10b981",
  },
  {
    link: "https://fedoraproject.org/",
    imgSrc: "/assets/components/distributions/fedora.svg",
    alt: "Fedora",
    shadowColor: "#3C6EB4",
  },
  {
    link: "https://vanillaos.org/",
    imgSrc: "/assets/components/distributions/vanilla.svg",
    alt: "Vanilla OS",
    shadowColor: "#f9a932",
  },
  {
    link: "https://ubuntu.com/",
    imgSrc: "/assets/components/distributions/ubuntu.svg",
    alt: "Ubuntu",
    shadowColor: "#E95420",
  },
  {
    link: "https://archlinux.org/",
    imgSrc: "/assets/components/distributions/arch.svg",
    alt: "Arch Linux",
    shadowColor: "#1793D1",
  },
]);

const applyShadow = (event: Event, color: string) => {
  const target = event.target as HTMLElement;
  target.style.filter = `drop-shadow(0 0 10px ${color})`;
};

const removeShadow = (event: Event) => {
  const target = event.target as HTMLElement;
  target.style.filter = "drop-shadow(0 0 0px transparent)";
};
</script>
