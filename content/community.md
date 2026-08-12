---
title: Community Assets
description: Find the stack that best suits your need.
---

<div class="mb-10 flex flex-col pb-20" id="community" data-community-root>
  <section
    id="community-hero"
    class="flex flex-col items-center justify-center gap-4 py-16 text-center text-white"
    style="background-image: url('/assets/components/hero-bg.png')"
  >
    <h2 class="text-3xl font-semibold lg:text-5xl">
      <span class="text-green-500">Community</span> Assets
    </h2>
    <p class="lg:text-1xl text-lg font-normal md:text-xl lg:w-[35rem]">
      Find the stack that best suits your need.
    </p>
  </section>

<div
    class="align-center dark:border-opacity-20 sticky top-0 z-40 w-full border-b border-gray-300 bg-white px-4 dark:border-white dark:bg-[#161616]"
  >
    <div class="mx-auto flex max-w-6xl flex-col items-stretch sm:flex-row">
      <div class="relative mb-4 flex grow items-center gap-5 sm:mb-0">
        <div>
          <span
            class="material-symbols-outlined absolute top-1/2 left-4 -translate-y-1/2 transform text-gray-500"
          >
            search
          </span>
        </div>
        <div class="w-full">
          <input
            type="text"
            placeholder="Search stacks..."
            data-community-search
            class="w-full p-6 pl-10 focus:outline-none dark:bg-[#161616]"
          />
        </div>
      </div><section id="notebook-toggler" class="flex justify-center gap-4">
        <button
          data-community-kind="stacks"
          class="border-b-2 border-green-500 px-6 py-2 text-lg font-medium"
        >
          Stacks
        </button>
        <button
          data-community-kind="pkgmanagers"
          class="border-b-2 border-transparent px-6 py-2 text-lg font-medium"
        >
          Pkg Managers
        </button>
      </section>
    </div>
  </div>
  <div class="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
    <section
      id="cards"
      data-community-cards
      class="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        class="col-span-full row-span-full flex flex-col items-center justify-center text-center font-semibold opacity-60"
      >
        <p class="text-3xl">Loading...</p>
      </div>
    </section>
  </div>
</div>
<p class="text-opacity-45 my-10 text-center text-black dark:text-white">
  Check out the
  <a
    href="https://apx-community.vanillaos.org/feed.xml"
    target="_blank"
    class="text-green-500 hover:underline"
    >Atom Feed</a
  >
  to get every new stack and package manager in your feed reader.
</p>
