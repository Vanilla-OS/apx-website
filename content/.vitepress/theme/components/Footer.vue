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
          <FooterIcon
            href="https://go.dev"
            src="/assets/components/footer/icons/go.svg"
            hoverColor="#02ADD7"
          />
          <FooterIcon
            href="https://vanillaos.org"
            src="/assets/components/footer/icons/vanillaos.svg"
            hoverColor="#FCCB44"
          />
          <FooterIcon
            href="https://github.com"
            src="/assets/components/footer/icons/github.svg"
            hoverColor="#FFFFFF"
          />
          <FooterIcon
            href="https://docker.com"
            src="/assets/components/footer/icons/docker.svg"
            hoverColor="#2496ED"
          />
          <FooterIcon
            href="https://distrobox.it"
            src="/assets/components/footer/icons/distrobox.svg"
            hoverColor="#F1E1D1"
          />
        </div>
      </div>
      <div
        class="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16 lg:flex lg:flex-row lg:gap-48"
      >
        <FooterSection title="Help">
          <FooterLink href="https://docs.vanillaos.org/collections/apx"
            >Documentation</FooterLink
          >
          <FooterLink href="https://docs.vanillaos.org/apx/en/getting-started"
            >Getting Started</FooterLink
          >
          <FooterLink
            href="https://github.com/Vanilla-OS/apx?tab=readme-ov-file#community-packages"
            >Package for Your Distribution</FooterLink
          >
          <FooterLink href="/community">Sharing Stacks</FooterLink>
          <FooterLink href="https://docs.vanillaos.org/apx/en/working-w-stacks"
            >Creating Stacks</FooterLink
          >
        </FooterSection>
        <FooterSection title="Developers">
          <FooterLink href="https://github.com/Vanilla-OS/apx"
            >Source Code</FooterLink
          >
          <FooterLink href="https://github.com/Vanilla-OS/apx/issues"
            >Report a bug</FooterLink
          >
        </FooterSection>
        <FooterSection title="Get Apx">
          <FooterLink href="/install">Install</FooterLink>
          <FooterLink href="https://github.com/Vanilla-OS/apx"
            >Build From Source</FooterLink
          >
        </FooterSection>
        <FooterSection title="Community">
          <FooterLink href="https://github.com/orgs/Vanilla-OS/discussions"
            >GitHub</FooterLink
          >
          <FooterLink href="https://vanillaos.org/community"
            >Discord Community</FooterLink
          >
          <FooterLink href="/community">Community Assets</FooterLink>
          <FooterLink href="https://apx-community.vanillaos.org/feed.xml"
            >Community Assets Feed</FooterLink
          >
        </FooterSection>
      </div>
    </div>
    <div
      class="flex flex-col flex-wrap items-center justify-between gap-6 px-4 pt-10 sm:flex-row sm:px-10 lg:px-20"
    >
      <div class="flex flex-col items-center gap-5 sm:flex-row">
        <img src="/assets/components/footer/logo.svg" alt="Logo" />
        <div class="flex flex-col gap-2 text-center sm:text-left">
          <p class="text-opacity-40 text-white">
            All trademarks and logos are the property of their respective
            owners.
          </p>
          <p class="text-opacity-40 text-white">Apx, Copyright 2024</p>
        </div>
      </div>
      <div class="flex flex-col gap-1 lg:text-center">
        <p class="text-opacity-40 text-white">
          Made with coffee by
          <span class="text-green-500">&lt;developers&gt;</span>
        </p>
        <p class="text-opacity-40 text-white">
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

<script setup lang="ts">
import FooterIcon from "./FooterComponents/FooterIcon.vue";
import FooterLink from "./FooterComponents/FooterLink.vue";
import FooterSection from "./FooterComponents/FooterSection.vue";
</script>
