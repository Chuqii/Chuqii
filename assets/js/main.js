// Progressive enhancement: every link and section works without this script.
(() => {
  if (!("IntersectionObserver" in window)) return;
  const links = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const sections = links.map((link) => document.querySelector(link.hash)).filter(Boolean);
  const header = document.querySelector(".site-header");
  let observer;
  const setCurrent = (id) => {
    links.forEach((link) => {
      if (link.hash === `#${id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  const observe = () => {
    observer?.disconnect();
    const offset = Math.ceil(header.getBoundingClientRect().height) + 25;
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    }, { rootMargin: `-${offset}px 0px -40% 0px`, threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  };
  observe();
  // Recalculate the reading area when the responsive header changes height.
  if ("ResizeObserver" in window) new ResizeObserver(observe).observe(header);
})();
