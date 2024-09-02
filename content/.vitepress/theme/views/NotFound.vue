<template>
  <div
    class="container mx-auto flex flex-col items-center justify-center gap-1 px-4 py-[15rem] text-center print:text-black"
  >
    <h1 class="animate-pulse text-6xl font-extrabold tracking-tighter">404</h1>
    <h2 class="text-2xl font-semibold tracking-wide">Not Found</h2>
    <hr
      class="mx-auto my-5 w-56 rounded-full border border-black border-opacity-45 dark:border-white dark:border-opacity-20"
    />
    <div class="mt-4 opacity-60">
      <p>The page you are looking for does not exist.</p>
      <p>Maybe it was on the previous root?</p>
    </div>
    <a
      href="/"
      class="mt-6 rounded-full bg-green-500 px-4 py-2 font-bold text-black transition-colors hover:bg-green-600 sm:w-[50%] md:w-[30%] lg:w-[20%]"
      >Take me home</a
    >
  </div>
</template>
