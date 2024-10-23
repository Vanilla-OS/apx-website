<template>
  <div
    class="relative flex h-[750px] w-screen items-center justify-center bg-cover bg-center"
    style="background-image: url(&quot;/assets/components/hero-bg.png&quot;)"
  >
    <div class="flex h-full flex-col items-center justify-between">
      <div
        class="relative z-10 flex h-full flex-col items-center justify-center gap-6 text-center"
      >
        <div
          class="terminal flex flex-col items-start rounded-md bg-black p-4 text-green-400"
        >
          <span ref="codeOutput" class="typing-effect font-mono text-lg"></span>
        </div>
        <div ref="textContainer" class="mt-4 flex flex-col items-center gap-4">
          <h1
            ref="typedText"
            class="max-w-[450px] text-4xl font-semibold leading-tight lg:text-6xl"
          ></h1>
          <a
            href="https://docs.vanillaos.org/apx/en/getting-started"
            class="mt-5 rounded-full bg-white px-7 py-2 text-base font-medium text-black opacity-0 transition duration-200 hover:bg-green-500 lg:text-lg"
            ref="gettingStartedButton"
            >Getting Started</a
          >
        </div>
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
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const typedText = ref(null);
const codeOutput = ref(null);
const textContainer = ref(null);
const gettingStartedButton = ref(null);

const finalText = "Develop\nthe way you like. Everywhere.";
const termCode = "$ ./init.sh";

function typeText(
  element: any,
  text: string,
  typingSpeed: number,
  callback?: () => void,
) {
  let index = 0;
  const splitText = text.split("");
  element.value.innerHTML = "";

  function type() {
    if (splitText[index] === "\n") {
      element.value.innerHTML += "<br>";
    } else if (index < 7 && element === typedText) {
      element.value.innerHTML += `<span class='text-green-400'>${splitText[index]}</span>`;
    } else {
      element.value.innerHTML += `<span class='text-white'>${splitText[index]}</span>`;
    }
    index++;

    if (index < splitText.length) {
      setTimeout(type, typingSpeed);
    } else if (callback) {
      setTimeout(callback, 500);
    }
  }
  type();
}

function typeCode() {
  typeText(codeOutput, termCode, 100, () =>
    typeText(typedText, finalText, 50, () => {
      gettingStartedButton.value.classList.add("slide-fade-in");
      gettingStartedButton.value.style.opacity = 1;
    }),
  );
}

onMounted(() => {
  typeCode();
});
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.cursor {
  animation: blink 1s step-end infinite;
}

.typing-effect::after {
  content: "|";
  animation: blink 1s step-end infinite;
}

@keyframes slide-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-fade-in {
  animation: slide-fade-in 1.5s ease-in-out;
}
</style>
