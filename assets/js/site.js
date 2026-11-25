// Shared behavior for every page: the top nav and the fade-in-on-scroll effect.
// Each page sets <body data-root="./" or "../"> so links work from subfolders.

const root = document.body.dataset.root || "./";

const NAV_LINKS = [
  { label: "Photos", href: "" },
  { label: "Projects", href: "projects/" },
  { label: "About", href: "about/" },
];

export function renderNav() {
  const here = location.pathname.replace(/index\.html$/, "");
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="header-inner">
    <a class="brand" href="${root}">Carolyn Ruan</a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav">
      ${NAV_LINKS.map((l) => {
        const url = new URL(root + l.href, location.href).pathname;
        const current = url === here ? ' aria-current="page"' : "";
        return `<a href="${root}${l.href}"${current}>${l.label}</a>`;
      }).join("")}
    </nav>
    </div>`;
  document.body.prepend(header);

  // Mobile: toggle the menu open/closed.
  const btn = header.querySelector(".menu-toggle");
  btn.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });

  // Add a subtle border once the page has scrolled.
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 4);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Fade + slide in any element with class "reveal" as it enters the viewport.
export function revealOnScroll(selector = ".reveal") {
  const els = document.querySelectorAll(selector);
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  // Fade in only once the element's image has loaded, so a photo never pops
  // in halfway through its fade.
  const whenLoaded = (el) => {
    const img = el.querySelector("img");
    if (!img || img.complete) return Promise.resolve();
    return new Promise((res) => {
      img.addEventListener("load", res, { once: true });
      img.addEventListener("error", res, { once: true });
    });
  };

  const io = new IntersectionObserver(
    (entries) => {
      // Elements arriving in the same batch fade in one after another.
      let i = 0;
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target;
        io.unobserve(el);
        el.style.setProperty("--reveal-delay", `${Math.min(i++, 4) * 150}ms`);
        whenLoaded(el).then(() => requestAnimationFrame(() => el.classList.add("visible")));
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
  );
  els.forEach((el) => io.observe(el));
}

export { root };
