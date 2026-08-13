import type { StenoTheme } from "@steno/steno";

const landing = await Deno.readTextFile(
  new URL("./layouts/landing.tau", import.meta.url),
);
const page = await Deno.readTextFile(
  new URL("./layouts/page.tau", import.meta.url),
);
const notFound = await Deno.readTextFile(
  new URL("./layouts/not-found.tau", import.meta.url),
);
const header = await Deno.readTextFile(
  new URL("./components/Header.tau", import.meta.url),
);
const footer = await Deno.readTextFile(
  new URL("./components/Footer.tau", import.meta.url),
);

const theme: StenoTheme = {
  name: "apx-website",
  layouts: {
    default: page,
    layout: page,
    landing,
    page,
    "not-found": notFound,
  },
  components: { header, footer },
  assets: {
    "apx.css": new URL("./assets/apx.css", import.meta.url),
    "apx.js": new URL("./assets/apx.js", import.meta.url),
  },
};

export default theme;
