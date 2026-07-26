"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollReveal — Global Intersection Observer
 * Auto-marks content elements and toggles .revealed on scroll up AND down.
 * Skips hero titles (h1 / .text-h1-b1g) and [data-no-reveal].
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const observed = new WeakSet<Element>();

    const shouldSkip = (el: HTMLElement) => {
      if (el.closest("header, nav, script, style, noscript")) return true;
      if (el.hasAttribute("data-no-reveal")) return true;
      if (el.closest("[data-no-reveal]")) return true;
      // Never animate hero titles
      if (el.matches("h1, .text-h1-b1g")) return true;
      if (el.closest("h1, .text-h1-b1g")) return true;
      return false;
    };

    const isContentCard = (el: HTMLElement) => {
      const c = el.getAttribute("class") || "";
      if (!c.includes("border")) return false;

      const rounded12 = c.includes("rounded-[12px]");
      const rounded2xl = c.includes("rounded-2xl");
      // Trust-row style full-width pill
      const trustPill =
        c.includes("rounded-full") &&
        c.includes("w-full") &&
        /\bp-[3-4]\b|\bsm:p-4\b/.test(c);

      if (!rounded12 && !rounded2xl && !trustPill) return false;

      // Skip tiny icon circles
      if (c.includes("rounded-full") && !trustPill) return false;

      // Content cards use padding
      return /\bp-[3-9]\b|\bp-\d{2}\b|\bsm:p-|\blg:p-/.test(c);
    };

    const mark = (
      el: HTMLElement,
      delay?: number,
      options?: { allowNested?: boolean }
    ) => {
      if (shouldSkip(el)) return;

      // Avoid double-animating blocks already marked; still allow
      // nested list items / buttons / cards for stagger inside cards.
      if (!options?.allowNested) {
        const ancestor = el.parentElement?.closest("[data-reveal]");
        if (ancestor) return;
      }

      if (!el.hasAttribute("data-reveal")) {
        el.setAttribute("data-reveal", "");
      }
      if (delay !== undefined && !el.hasAttribute("data-delay")) {
        const snapped =
          delay <= 0 ? null :
          delay <= 40 ? "40" :
          delay <= 80 ? "80" :
          delay <= 120 ? "120" :
          delay <= 160 ? "160" :
          "200";
        if (snapped) el.setAttribute("data-delay", snapped);
      }
    };

    const autoMark = () => {
      const root = document.body;

      // Content cards first so inner text can nest under them cleanly
      root.querySelectorAll<HTMLElement>("section div, [data-hero] div, footer div").forEach((el) => {
        if (isContentCard(el)) mark(el, undefined, { allowNested: true });
      });

      // Section + footer headings (allow nested for h3/h4 inside cards)
      root.querySelectorAll<HTMLElement>("section h2, section h3, section h4, footer h3, footer h4").forEach((el) => {
        const insideReveal = Boolean(el.parentElement?.closest("[data-reveal]"));
        mark(el, undefined, { allowNested: insideReveal });
      });

      // Paragraphs (nested OK when inside cards so body copy animates too)
      root.querySelectorAll<HTMLElement>("section p, footer p, [data-hero] p").forEach((el) => {
        const insideReveal = Boolean(el.parentElement?.closest("[data-reveal]"));
        mark(el, undefined, { allowNested: insideReveal });
      });

      // List items (bullets / points inside cards) — nested OK
      root.querySelectorAll<HTMLElement>("section li, footer li").forEach((el, i) => {
        mark(el, (i % 6) * 40, { allowNested: true });
      });

      // Buttons — nested OK
      root.querySelectorAll<HTMLElement>("section button, footer button, [data-hero] button").forEach((el, i) => {
        mark(el, (i % 4) * 40, { allowNested: true });
      });

      // Images / mockups in sections & hero
      root.querySelectorAll<HTMLElement>("section img, [data-hero] img").forEach((el) => {
        const wrap = el.parentElement;
        if (wrap instanceof HTMLElement) mark(wrap, 40, { allowNested: true });
      });

      // Footer links
      root.querySelectorAll<HTMLElement>("footer a").forEach((el) => {
        mark(el);
      });

      // Stagger siblings that share a parent (cards / list rows)
      root.querySelectorAll<HTMLElement>("section ul, section ol, section .grid, footer ul").forEach((parent) => {
        const kids = Array.from(parent.children).filter(
          (n): n is HTMLElement =>
            n instanceof HTMLElement && n.hasAttribute("data-reveal")
        );
        kids.forEach((kid, i) => {
          if (!kid.hasAttribute("data-delay")) {
            mark(kid, (i % 8) * 40, { allowNested: true });
          }
        });
      });
    };

    const observeAll = () => {
      if (!observer) return;
      const io = observer;
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (shouldSkip(el)) {
          el.classList.add("revealed");
          return;
        }
        if (observed.has(el)) return;
        observed.add(el);
        io.observe(el);
      });
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          } else {
            entry.target.classList.remove("revealed");
          }
        });
      },
      {
        // Trigger early so animation feels instant while scrolling fast
        threshold: 0.08,
        rootMargin: "40px 0px -8% 0px",
      }
    );

    autoMark();
    observeAll();

    // Catch client navigations / late-mounted content
    let debounce: ReturnType<typeof setTimeout> | null = null;
    const mo = new MutationObserver(() => {
      if (debounce) clearTimeout(debounce);
      debounce = setTimeout(() => {
        autoMark();
        observeAll();
      }, 50);
    });

    mo.observe(document.body, { childList: true, subtree: true });

    // Reveal anything already in view on load (no waiting for scroll)
    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 0;
        if (rect.top < vh * 0.92 && rect.bottom > 0) {
          el.classList.add("revealed");
        }
      });
    });

    return () => {
      if (debounce) clearTimeout(debounce);
      mo.disconnect();
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
