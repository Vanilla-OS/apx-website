<template>
    <div
        class="relative flex items-center justify-center h-[750px] w-screen bg-cover bg-center"
        style="
            background-image: url(&quot;/assets/components/hero-bg.png&quot;);
        "
    >
        <div class="flex flex-col justify-between items-center h-full">
            <div
                class="flex flex-col gap-6 justify-center items-center text-center h-full relative z-10"
            >
                <h1
                    class="text-4xl lg:text-6xl text-white font-semibold leading-tight max-w-[450px]"
                >
                    <span class="text-green-400">Develop</span><br />
                    the way you like. Everywhere.
                </h1>
                <a
                    href="#"
                    class="bg-white text-black px-8 py-3 rounded-full font-semibold text-base lg:text-lg hover:bg-green-500 transition duration-200"
                    >Get Started</a
                >
            </div>
            <a href="#about" class="mb-10 animate-bounce text-white">
                <span class="material-symbols-outlined text-4xl">
                    keyboard_arrow_down
                </span>
            </a>
        </div>
        <div class="absolute inset-0 bg-black opacity-40 z-0"></div>
    </div>
</template>
