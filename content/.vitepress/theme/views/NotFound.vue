<template>
  <div
    class="container flex flex-col gap-1 justify-center items-center mx-auto py-[15rem] px-4 text-center print:text-black"
  >
    <h1 class="text-6xl font-extrabold animate-pulse tracking-tighter">404</h1>
    <h2 class="text-2xl font-semibold tracking-wide">Not Found</h2>
    <hr
      class="border border-black border-opacity-45 dark:border-white dark:border-opacity-20 mx-auto my-5 w-56 rounded-full"
    />
    <div class="mt-4 opacity-60">
      <p>The page you are looking for does not exist.</p>
      <p>Maybe it was on the previous root?</p>
    </div>
    <a
      href="/"
      class="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 mt-6 sm:w-[50%] md:w-[30%] lg:w-[20%] rounded-full"
      >Take me home</a
    >
  </div>
</template>
