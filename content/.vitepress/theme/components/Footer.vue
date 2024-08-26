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
        <div
          class="mt-4 sm:mt-0 flex flex-wrap gap-6 items-center justify-center"
        >
          <a
            href="https://go.dev"
            target="_blank"
            class="flex justify-center items-center"
          >
            <img
              src="/assets/components/footer/icons/go.svg"
              alt="Go"
              class="h-6 hover:scale-110 transition-all duration-300 ease-in-out"
              style="filter: none"
              onmouseover="this.style.filter = 'saturate(100%) invert(41%) sepia(56%) saturate(472%) hue-rotate(143deg) brightness(96%) contrast(88%)'"
              onmouseout="this.style.filter = 'none'"
            />
          </a>
          <a
            href="https://vanillaos.org"
            target="_blank"
            class="flex justify-center items-center"
          >
            <img
              src="/assets/components/footer/icons/vanillaos.svg"
              alt="Vanilla OS"
              class="w-8 hover:scale-110 transition-all duration-300 ease-in-out"
              style="filter: none"
              onmouseover="this.style.filter = 'saturate(100%) invert(85%) sepia(100%) saturate(300%) hue-rotate(1deg) brightness(100%) contrast(90%)';"
              onmouseout="this.style.filter = 'none';"
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            class="flex justify-center items-center"
          >
            <img
              src="/assets/components/footer/icons/github.svg"
              alt="GitHub"
              class="w-8 hover:scale-110 transition-all duration-300 ease-in-out"
              style="filter: none"
              onmouseover="this.style.filter = 'invert(100%) brightness(100%) saturate(100%)'"
              onmouseout="this.style.filter = 'none';"
            />
          </a>
          <a
            href="https://docker.com"
            target="_blank"
            class="flex justify-center items-center"
          >
            <img
              src="/assets/components/footer/icons/docker.svg"
              alt="Docker"
              class="w-8 hover:scale-110 transition-all duration-300 ease-in-out"
              style="filter: none"
              onmouseover="this.style.filter = 'brightness(100%) saturate(100%) invert(100%) sepia(100%) saturate(472%) hue-rotate(143deg) brightness(100%) contrast(100%)'"
              onmouseout="this.style.filter = 'none'"
            />
          </a>
          <a
            href="https://distrobox.it"
            target="_blank"
            class="flex justify-center items-center"
          >
            <img
              src="/assets/components/footer/icons/distrobox.svg"
              alt="Distrobox"
              class="w-8 hover:scale-110 transition-all duration-300 ease-in-out"
              style="filter: none"
              onmouseover="this.style.filter = 'saturate(100%) invert(39%) sepia(49%) saturate(749%) hue-rotate(5deg) brightness(100%) contrast(93%)';"
              onmouseout="this.style.filter = 'none';"
            />
          </a>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-48">
        <div class="flex flex-col gap-2">
          <h3 class="text-white text-opacity-70 text-base font-semibold">
            Help
          </h3>
          <a href="/docs" class="text-white text-opacity-40 hover:underline"
            >Documentation</a
          >
          <a
            href="/getting-started"
            class="text-white text-opacity-40 hover:underline"
            >Getting Started</a
          >
          <a href="/package" class="text-white text-opacity-40 hover:underline"
            >Package for Your Distribution</a
          >
          <a
            href="/share/stacks"
            class="text-white text-opacity-40 hover:underline"
            >Sharing Stacks</a
          >
          <a
            href="/create/stacks"
            class="text-white text-opacity-40 hover:underline"
            >Creating Stacks</a
          >
        </div>
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <h3 class="text-white text-opacity-70 text-base font-semibold">
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
            <h3 class="text-white text-opacity-70 text-base font-semibold">
              Get Apx
            </h3>
            <a
              href="/download"
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
          <h3 class="text-white text-opacity-70 text-base font-semibold">
            Community
          </h3>
          <a
            href="https://github.com/"
            class="text-white text-opacity-40 hover:underline"
            >GitHub</a
          >
          <a
            href="https://vanillaos.org/community"
            class="text-white text-opacity-40 hover:underline"
            >Discord Community</a
          >
          <a href="/package" class="text-white text-opacity-40 hover:underline"
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
