<template>
  <footer class="bg-[#101010] py-10 text-white">
    <div
      class="flex flex-col items-center justify-center gap-8 px-4 sm:px-10 lg:px-20"
    >
      <div
        class="flex flex-col flex-wrap items-center justify-center gap-6 border-b border-[#333836] pb-10 sm:flex-row sm:px-10"
      >
        <p class="text-center text-[#727976] sm:text-left">
          Apx is made possible thanks to the following projects.
        </p>
        <div
          class="mt-4 flex flex-wrap items-center justify-center gap-6 sm:mt-0"
        >
          <a
            href="https://go.dev"
            target="_blank"
            class="flex items-center justify-center"
          >
            <img
              src="/assets/components/footer/icons/go.svg"
              alt="Go"
              class="h-6 transition-all duration-300 ease-in-out hover:scale-110"
              style="filter: none"
              onmouseover="this.style.filter = 'saturate(100%) invert(41%) sepia(56%) saturate(472%) hue-rotate(143deg) brightness(120%) contrast(88%)'"
              onmouseout="this.style.filter = 'none'"
            />
          </a>
          <a
            href="https://vanillaos.org"
            target="_blank"
            class="flex items-center justify-center"
          >
            <img
              src="/assets/components/footer/icons/vanillaos.svg"
              alt="Vanilla OS"
              class="w-8 transition-all duration-300 ease-in-out hover:scale-110"
              style="filter: none"
              onmouseover="this.style.filter = 'saturate(100%) invert(85%) sepia(100%) saturate(300%) hue-rotate(1deg) brightness(100%) contrast(90%)';"
              onmouseout="this.style.filter = 'none';"
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            class="flex items-center justify-center"
          >
            <img
              src="/assets/components/footer/icons/github.svg"
              alt="GitHub"
              class="w-8 transition-all duration-300 ease-in-out hover:scale-110"
              style="filter: none"
              onmouseover="this.style.filter = 'invert(100%) brightness(1000%)'"
              onmouseout="this.style.filter = 'none';"
            />
          </a>
          <a
            href="https://docker.com"
            target="_blank"
            class="flex items-center justify-center"
          >
            <img
              src="/assets/components/footer/icons/docker.svg"
              alt="Docker"
              class="w-8 transition-all duration-300 ease-in-out hover:scale-110"
              style="filter: none; transition: filter 0.3s ease-in-out"
              onmouseover="this.style.filter = 'brightness(0) saturate(100%) invert(32%) sepia(100%) saturate(1000%) hue-rotate(200deg) brightness(90%) contrast(100%)'"
              onmouseout="this.style.filter = 'none'"
            />
          </a>
          <a
            href="https://distrobox.it"
            target="_blank"
            class="flex items-center justify-center"
          >
            <img
              src="/assets/components/footer/icons/distrobox.svg"
              alt="Distrobox"
              class="w-8 transition-all duration-300 ease-in-out hover:scale-110"
              style="filter: none"
              onmouseover="this.style.filter = 'saturate(100%) invert(39%) sepia(49%) saturate(109%) hue-rotate(5deg) brightness(150%) contrast(93%)';"
              onmouseout="this.style.filter = 'none'"
            />
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-10 lg:flex-row lg:gap-48">
        <div class="flex flex-col gap-2">
          <h3 class="text-base font-semibold text-white text-opacity-70">
            Help
          </h3>
          <a
            href="https://docs.vanillaos.org/collections/apx"
            class="text-white text-opacity-40 hover:underline"
            >Documentation</a
          >
          <a
            href="https://docs.vanillaos.org/apx/en/getting-started"
            class="text-white text-opacity-40 hover:underline"
            >Getting Started</a
          >
          <a
            href="https://github.com/Vanilla-OS/apx?tab=readme-ov-file#community-packages"
            class="text-white text-opacity-40 hover:underline"
            >Package for Your Distribution</a
          >
          <a
            href="#"
            class="text-white text-opacity-40 hover:underline pointer-events-none"
            >Sharing Stacks (Coming Soon)</a
          >
          <a
            href="https://docs.vaillaos.org/apx/en/working-w-stacks"
            class="text-white text-opacity-40 hover:underline"
            >Creating Stacks</a
          >
        </div>
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <h3 class="text-base font-semibold text-white text-opacity-70">
              Developers
            </h3>
            <a
              href="https://github.com/Vanilla-OS/apx"
              class="text-white text-opacity-40 hover:underline"
              >Source Code</a
            >
            <a
              href="https://github.com/Vanilla-OS/apx/issues"
              class="text-white text-opacity-40 hover:underline"
              >Report a bug</a
            >
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-base font-semibold text-white text-opacity-70">
              Get Apx
            </h3>
            <a
              href="https://github.com/Vanilla-OS/apx/releases/latest"
              class="text-white text-opacity-40 hover:underline"
              >Download</a
            >
            <a
              href="https://github.com/Vanilla-OS/apx"
              class="text-white text-opacity-40 hover:underline"
              >Build From Source</a
            >
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-base font-semibold text-white text-opacity-70">
            Community
          </h3>
          <a
            href="https://github.com/orgs/Vanilla-OS/discussions"
            class="text-white text-opacity-40 hover:underline"
            >GitHub</a
          >
          <a
            href="https://vanillaos.org/community"
            class="text-white text-opacity-40 hover:underline"
            >Discord Community</a
          >
          <a href="#" class="text-white text-opacity-40 hover:underline pointer-events-none"
            >Community Stacks (Coming Soon)</a
          >
        </div>
      </div>
    </div>
    <div
      class="flex flex-col flex-wrap items-center justify-between gap-6 px-4 pt-10 sm:flex-row sm:gap-0 sm:px-10 lg:px-20"
    >
      <div class="flex flex-col flex-wrap items-center gap-5 sm:flex-row">
        <img src="/assets/components/footer/logo.svg" alt="Logo" />
        <div class="flex flex-col gap-2 text-center sm:text-left">
          <p class="text-white text-opacity-40">
            All trademarks and logos are the property of their respective
            owners.
          </p>
          <p class="text-white text-opacity-40">Apx, Copyright 2024</p>
        </div>
      </div>
      <div class="flex flex-col gap-1 text-center sm:text-right">
        <p class="text-white text-opacity-40">
          Made with coffee by
          <span class="text-green-500">&lt;developers&gt;</span>
        </p>
        <p class="text-white text-opacity-40">
          Sponsored by
          <a
            href="https://fabricators.ltd"
            class="text-green-500 hover:underline"
            >fabricators.ltd</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>
