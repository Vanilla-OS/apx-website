<template>
  <div
    class="relative flex h-[750px] w-screen items-center justify-center bg-cover bg-center"
    style="background-image: url(&quot;/assets/components/hero-bg.png&quot;)"
  >
    <div class="flex h-full flex-col items-center justify-between">
      <div
        class="relative z-10 flex h-full flex-col items-center justify-center gap-6 text-center"
      >
        <h1
          class="max-w-[450px] text-4xl font-semibold leading-tight text-white lg:text-6xl"
        >
          <span class="text-green-400">Develop</span><br />
          the way you like. Everywhere.
        </h1>
        <a
          href="#"
          class="rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition duration-200 hover:bg-green-500 lg:text-lg"
          >Get Started</a
        >
      </div>
      <a
        href="#what-is"
        class="z-10 mb-10 animate-bounce text-white text-opacity-40"
      >
        <span
          class="material-symbols-outlined text-4xl transition duration-200 hover:text-white"
        >
          keyboard_arrow_down
        </span>
      </a>
    </div>
    <div class="absolute inset-0 z-0 bg-black opacity-40"></div>
  </div>
</template>
