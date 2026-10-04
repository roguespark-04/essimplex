/* ESSIMPLEX site behaviour. Progressive enhancement only: every element is
   visible without this file. Motion respects prefers-reduced-motion. */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var hasIO = "IntersectionObserver" in window;
  var supports = function (q) { return window.CSS && CSS.supports && CSS.supports(q); };
  if (!supports("animation-timeline: view()")) root.classList.add("no-sda");

  /* ---------- Mobile navigation ---------- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Headline word split (hero only) ---------- */
  var wordIndex = 0;
  function splitNode(node) {
    Array.prototype.slice.call(node.childNodes).forEach(function (child) {
      if (child.nodeType === 3) {
        var parts = child.textContent.split(/(\s+)/);
        var frag = document.createDocumentFragment();
        parts.forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          var outer = document.createElement("span");
          var inner = document.createElement("span");
          outer.className = "w";
          inner.textContent = part;
          inner.style.setProperty("--wi", wordIndex++);
          outer.appendChild(inner);
          frag.appendChild(outer);
        });
        node.replaceChild(frag, child);
      } else if (child.nodeType === 1) {
        splitNode(child);
      }
    });
  }
  document.querySelectorAll("[data-split]").forEach(function (el) {
    if (reduce.matches) return;
    el.setAttribute("aria-label", el.textContent.replace(/\s+/g, " ").trim());
    wordIndex = 0;
    splitNode(el);
    Array.prototype.forEach.call(el.querySelectorAll(".w"), function (w) { w.setAttribute("aria-hidden", "true"); });
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { el.classList.add("is-in"); });
    });
  });

  /* ---------- Reveal on enter ---------- */
  var revealables = document.querySelectorAll("[data-reveal], .no-sda .pulse");
  if (!hasIO || reduce.matches) {
    revealables.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealIO.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    revealables.forEach(function (el) { revealIO.observe(el); });
  }

  /* ---------- Live heartbeat dot: animate only while visible ---------- */
  var live = document.querySelector(".live");
  if (live && hasIO) {
    new IntersectionObserver(function (entries) {
      live.classList.toggle("is-live", entries[0].isIntersecting);
    }).observe(live);
  }

  /* ---------- Phone-home sequence: steps advance as you scroll ---------- */
  var how = document.querySelector(".how");
  if (how && hasIO) {
    var steps = Array.prototype.slice.call(how.querySelectorAll(".step"));
    var nodes = Array.prototype.slice.call(how.querySelectorAll(".seq__node"));
    var last = steps.length - 1;
    var setStep = function (n) {
      steps.forEach(function (s, i) {
        s.classList.toggle("is-current", i === n);
        s.classList.toggle("is-done", i < n);
      });
      nodes.forEach(function (d, i) {
        d.classList.toggle("is-current", i === n);
        d.classList.toggle("is-done", i <= n);
      });
      how.style.setProperty("--seq", n <= 0 ? 0 : n / last);
    };
    setStep(-1);
    var stepIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setStep(steps.indexOf(entry.target));
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    steps.forEach(function (s) { stepIO.observe(s); });
  }

  /* ---------- Scroll progress fallback (no CSS scroll timelines) ---------- */
  var bar = document.querySelector(".progress");
  if (bar && !supports("animation-timeline: scroll()") && !reduce.matches) {
    var ticking = false;
    var update = function () {
      var max = root.scrollHeight - root.clientHeight;
      bar.style.transform = "scaleX(" + (max > 0 ? root.scrollTop / max : 0) + ")";
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }
})();
