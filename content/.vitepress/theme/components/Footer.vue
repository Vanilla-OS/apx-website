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
            alt="Go"
            filter="saturate(100%) invert(41%) sepia(56%) saturate(472%) hue-rotate(143deg) brightness(120%) contrast(88%)"
          />
          <FooterIcon
            href="https://vanillaos.org"
            src="/assets/components/footer/icons/vanillaos.svg"
            alt="Vanilla OS"
            filter="saturate(100%) invert(85%) sepia(100%) saturate(300%) hue-rotate(1deg) brightness(100%) contrast(90%)"
          />
          <FooterIcon
            href="https://github.com"
            src="/assets/components/footer/icons/github.svg"
            alt="GitHub"
            filter="invert(100%) brightness(1000%)"
          />
          <FooterIcon
            href="https://docker.com"
            src="/assets/components/footer/icons/docker.svg"
            alt="Docker"
            filter="brightness(0) saturate(100%) invert(32%) sepia(100%) saturate(100%) hue-rotate(240deg) brightness(90%) contrast(100%)"
          />
          <FooterIcon
            href="https://distrobox.it"
            src="/assets/components/footer/icons/distrobox.svg"
            alt="Distrobox"
            filter="saturate(100%) invert(39%) sepia(49%) saturate(109%) hue-rotate(5deg) brightness(150%) contrast(93%)"
          />
        </div>
      </div>
      <div class="flex flex-col gap-10 lg:flex-row lg:gap-48">
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
        <div class="flex flex-col gap-5">
          <FooterSection title="Developers">
            <FooterLink href="https://github.com/Vanilla-OS/apx"
              >Source Code</FooterLink
            >
            <FooterLink href="https://github.com/Vanilla-OS/apx/issues"
              >Report a bug</FooterLink
            >
          </FooterSection>
          <FooterSection title="Get Apx">
            <FooterLink
              href="https:c//github.com/Vanilla-OS/apx/releases/latest"
              >Download</FooterLink
            >
            <FooterLink href="https://github.com/Vanilla-OS/apx"
              >Build From Source</FooterLink
            >
          </FooterSection>
        </div>
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
      class="flex flex-col flex-wrap items-center justify-between gap-6 px-4 pt-10 sm:flex-row sm:gap-0 sm:px-10 lg:px-20"
    >
      <div class="flex flex-col flex-wrap items-center gap-5 sm:flex-row">
        <img src="/assets/components/footer/logo.svg" alt="Logo" />
        <div class="flex flex-col gap-2 text-center sm:text-left">
          <p class="text-opacity-40 text-white">
            All trademarks and logos are the property of their respective
            owners.
          </p>
          <p class="text-opacity-40 text-white">Apx, Copyright 2024</p>
        </div>
      </div>
      <div class="flex flex-col gap-1 text-center sm:text-right">
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
