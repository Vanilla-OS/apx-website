const onReady = (fn) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn, { once: true });
  } else {
    fn();
  }
};

onReady(() => {
  const releaseTag = document.querySelector(".js-release-tag");
  if (releaseTag) {
    fetch("https://api.github.com/repos/Vanilla-OS/apx/releases/latest")
      .then((res) => res.json())
      .then(({ tag_name }) => {
        if (tag_name) releaseTag.textContent = tag_name;
      })
      .catch(() => {
        releaseTag.textContent = "Latest release";
      });
  }

  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeButton = document.querySelector(".js-menu-close");
  const mobileLinks = document.querySelectorAll(".js-mobile-link");
  const setMenu = (open) => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", String(open));
    mobileMenu.classList.toggle("hidden", !open);
    mobileMenu.classList.toggle("flex", open);
    mobileMenu.classList.toggle("fade-in", open);
  };
  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    setMenu(open);
  });
  closeButton?.addEventListener("click", () => setMenu(false));
  mobileMenu?.addEventListener("click", (event) => {
    if (event.target === mobileMenu) setMenu(false);
  });
  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => setMenu(false))
  );

  const codeOutput = document.querySelector("[data-apx-code]");
  const typedText = document.querySelector("[data-apx-typed]");
  const button = document.querySelector("[data-apx-cta]");
  const typeText = (element, text, speed, colorizeFirstSeven = false, done) => {
    if (!element) return done?.();
    let index = 0;
    element.innerHTML = "";
    const chars = [...text];
    const tick = () => {
      const char = chars[index];
      if (char === "\n") {
        element.innerHTML += "<br>";
      } else if (colorizeFirstSeven && index < 7) {
        element.innerHTML += `<span class="text-green-400">${char}</span>`;
      } else {
        element.innerHTML += `<span class="text-white">${char}</span>`;
      }
      index += 1;
      if (index < chars.length) {
        setTimeout(tick, speed);
      } else if (done) {
        setTimeout(done, 500);
      }
    };
    tick();
  };
  if (codeOutput && typedText && button) {
    typeText(codeOutput, "$ ./init.sh", 100, false, () => {
      typeText(
        typedText,
        "Develop\nthe way you like. Everywhere.",
        50,
        true,
        () => {
          button.classList.add("slide-fade-in");
          button.style.opacity = "1";
        },
      );
    });
  }

  const installTabs = document.querySelectorAll("[data-install-tab]");
  const installCode = document.querySelector("[data-install-command]");
  const installCopy = document.querySelector("[data-install-copy]");
  const installCommands = {
    curl: "curl -s https://apx.vanillaos.org/install.sh | bash",
    wget: "wget -qO- https://apx.vanillaos.org/install.sh | bash",
  };
  let activeInstallTab = "curl";
  const renderInstallTabs = () => {
    installTabs.forEach((tab) => {
      const active = tab.getAttribute("data-install-tab") === activeInstallTab;
      tab.className = active
        ? "bg-black text-white px-4 py-2"
        : "text-gray-400 px-4 py-2";
    });
    if (installCode) {
      installCode.textContent = installCommands[activeInstallTab];
    }
  };
  installTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeInstallTab = tab.getAttribute("data-install-tab") || "curl";
      renderInstallTabs();
    });
  });
  installCopy?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(installCommands[activeInstallTab]);
      installCopy.innerHTML =
        '<span class="material-symbols-outlined align-middle">check</span> Copied!';
      setTimeout(() => {
        installCopy.innerHTML =
          '<span class="material-symbols-outlined align-middle">content_copy</span> Copy Command';
      }, 2000);
    } catch {
      // noop
    }
  });
  renderInstallTabs();

  const communityRoot = document.querySelector("[data-community-root]");
  if (communityRoot) {
    const searchInput = document.querySelector("[data-community-search]");
    const cards = document.querySelector("[data-community-cards]");
    const stacksButton = document.querySelector(
      "[data-community-kind='stacks']",
    );
    const pkgButton = document.querySelector(
      "[data-community-kind='pkgmanagers']",
    );
    const feedUrl =
      "https://raw.githubusercontent.com/Vanilla-OS/apx-community/refs/heads/main/_index.json";
    let state = {
      currentNotebook: "stacks",
      searchQuery: "",
      stacks: [],
      pkgs: [],
    };

    const downloadYaml = (item) => {
      let yamlContent = "";
      if ("base" in item && "packages" in item && "pkgmanager" in item) {
        yamlContent =
          `- name: "${item.name}"\n  base: "${item.base}"\n  packages: ["${
            item.packages.join('", "')
          }"]\n  pkgmanager: "${item.pkgmanager}"\n  builtin: ${
            item.builtIn ?? false
          }`;
      } else {
        yamlContent =
          `- name: ${item.name}\n  model: 2\n  needSudo: ${item.needSudo}\n  cmdautoremove: ${item.cmdautoremove}\n  cmdclean: ${item.cmdclean}\n  cmdinstall: ${item.cmdinstall}\n  cmdlist: ${item.cmdlist}\n  cmdpurge: ${item.cmdpurge}\n  cmdremove: ${item.cmdremove}\n  cmdsearch: ${item.cmdsearch}\n  cmdshow: ${item.cmdshow}\n  cmdupdate: ${item.cmdupdate}\n  cmdupgrade: ${item.cmdupgrade}\n  builtin: ${item.builtIn}`;
      }
      const blob = new Blob([yamlContent], { type: "text/yaml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${item.name}.yml`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    const copyCommand = async (command) => {
      try {
        await navigator.clipboard.writeText(command);
      } catch {
        // noop
      }
    };

    const render = () => {
      const items = state.currentNotebook === "stacks"
        ? state.stacks
        : state.pkgs;
      const query = state.searchQuery.toLowerCase();
      const filtered = query
        ? items.filter((item) => item.name.toLowerCase().includes(query))
        : items;
      stacksButton?.classList.toggle(
        "border-green-500",
        state.currentNotebook === "stacks",
      );
      stacksButton?.classList.toggle(
        "border-transparent",
        state.currentNotebook !== "stacks",
      );
      pkgButton?.classList.toggle(
        "border-green-500",
        state.currentNotebook === "pkgmanagers",
      );
      pkgButton?.classList.toggle(
        "border-transparent",
        state.currentNotebook !== "pkgmanagers",
      );
      if (!cards) return;
      if (!filtered.length) {
        cards.innerHTML =
          '<div class="col-span-full row-span-full flex flex-col items-center justify-center text-center font-semibold opacity-60"><p class="text-3xl">Not Found</p></div>';
        return;
      }
      cards.innerHTML = "";
      filtered.forEach((item) => {
        const card = document.createElement("div");
        card.className =
          "flex h-full flex-col justify-between gap-4 rounded-xl bg-white p-6 shadow-md dark:bg-[#161616]";
        if (state.currentNotebook === "stacks") {
          card.innerHTML = `
            <div>
              <h3 class="mb-2 flex items-center gap-2 text-2xl font-semibold"><span class="material-symbols-outlined text-green-500">dns</span>${item.name}</h3>
              <div class="text-md dark:text-opacity-45 mb-1 flex items-center gap-2 text-gray-500 dark:text-white"><span class="material-symbols-outlined text-green-500">layers</span>Base: ${item.base}</div>
              <div class="text-md dark:text-opacity-45 mb-1 flex items-center gap-2 text-gray-500 dark:text-white"><span class="material-symbols-outlined text-green-500">inventory_2</span>Packages: ${
            item.packages.join(", ")
          }</div>
              <div class="text-md dark:text-opacity-45 mb-1 flex items-center gap-2 text-gray-500 dark:text-white"><span class="material-symbols-outlined text-green-500">settings</span>Package Manager: ${item.pkgmanager}</div>
            </div>
            <button class="js-download mt-auto flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full bg-[#24FF93] px-5 py-2 text-base font-medium text-black transition duration-200 hover:bg-green-500"><span class="material-symbols-outlined align-middle">download</span>Download YAML</button>
            <details>
              <summary class="cursor-pointer text-green-500">What’s next after downloading?</summary>
              <p class="dark:text-opacity-45 mt-2 text-gray-500 dark:text-white">After downloading the YAML file, run the following command to import the stack on your local machine.</p>
              <pre class="mt-2 overflow-y-auto rounded-md bg-gray-100 p-4 dark:bg-[#1E1E1E]"><code class="me-4">apx stacks import -i <span class="text-green-500">${item.name}.yml</span></code></pre>
              <button class="js-copy mt-5 flex w-full flex-row items-center justify-center gap-2 rounded-full bg-gray-100 p-4 px-5 py-2 text-base font-medium transition duration-200 hover:bg-green-500 dark:bg-[#1E1E1E] hover:dark:text-black"><span class="material-symbols-outlined align-middle">content_copy</span>Copy Command</button>
            </details>
          `;
          card
            .querySelector(".js-download")
            ?.addEventListener("click", () => downloadYaml(item));
          card
            .querySelector(".js-copy")
            ?.addEventListener(
              "click",
              () => copyCommand(`apx stacks import -i ${item.name}.yml`),
            );
        } else {
          card.innerHTML = `
            <div>
              <h3 class="mb-2 flex items-center gap-2 text-2xl font-semibold"><span class="material-symbols-outlined text-green-500">terminal</span>${item.name}</h3>
              <details class="mb-4">
                <summary class="cursor-pointer text-green-500">Show Mapping</summary>
                <ul class="mt-2 space-y-1">
                  ${
            [
              ["Auto Remove", item.cmdautoremove],
              ["Clean", item.cmdclean],
              ["Install", item.cmdinstall],
              ["List", item.cmdlist],
              ["Purge", item.cmdpurge],
              ["Remove", item.cmdremove],
              ["Search", item.cmdsearch],
              ["Show", item.cmdshow],
              ["Update", item.cmdupdate],
              ["Upgrade", item.cmdupgrade],
            ]
              .map(
                ([label, cmd]) =>
                  `<li class="flex items-center gap-2"><span class="material-symbols-outlined text-green-500">code</span><span class="font-semibold">${label}:</span> ${cmd}</li>`,
              )
              .join("")
          }
                </ul>
              </details>
            </div>
            <button class="js-download mt-auto rounded-full bg-[#24FF93] px-5 py-2 text-base font-medium text-black transition duration-200 hover:bg-green-500"><span class="material-symbols-outlined align-middle">download</span>Download YAML</button>
            <details>
              <summary class="cursor-pointer text-green-500">What’s next after downloading?</summary>
              <p class="dark:text-opacity-45 mt-2 text-gray-500 dark:text-white">After downloading the YAML file, run the following command to import the package manager on your local machine inside the directory where the YAML file is located.</p>
              <pre class="mt-2 overflow-y-auto rounded-md bg-gray-100 p-4 dark:bg-[#1E1E1E]"><code class="me-4">apx pkgmanagers import -i <span class="text-green-500">${item.name}.yml</span></code></pre>
              <button class="js-copy mt-5 flex w-full flex-row items-center justify-center gap-2 rounded-full bg-gray-100 p-4 px-5 py-2 text-base font-medium transition duration-200 hover:bg-green-500 dark:bg-[#1E1E1E]"><span class="material-symbols-outlined align-middle">content_copy</span>Copy Command</button>
            </details>
          `;
          card
            .querySelector(".js-download")
            ?.addEventListener("click", () => downloadYaml(item));
          card
            .querySelector(".js-copy")
            ?.addEventListener(
              "click",
              () => copyCommand(`apx pkgmanagers import -i ${item.name}.yml`),
            );
        }
        cards.appendChild(card);
      });
    };

    searchInput?.addEventListener("input", (event) => {
      state.searchQuery = event.target.value;
      render();
    });
    stacksButton?.addEventListener("click", () => {
      state.currentNotebook = "stacks";
      render();
    });
    pkgButton?.addEventListener("click", () => {
      state.currentNotebook = "pkgmanagers";
      render();
    });

    fetch(feedUrl)
      .then((response) => response.json())
      .then((data) => {
        state.stacks = data.stacks ?? [];
        state.pkgs = data.pkgManagers ?? [];
        render();
      })
      .catch(() => {
        if (cards) {
          cards.innerHTML =
            '<div class="col-span-full row-span-full flex flex-col items-center justify-center text-center font-semibold opacity-60"><p class="text-3xl">Not Found</p></div>';
        }
      });
  }
});
