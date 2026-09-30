/* GESLITA demo — judesys. GSAP + ScrollTrigger (cdnjs), viskas paiso prefers-reduced-motion.
   Salient atitikmenys: eilučių „Animate on scroll", Column Parallax, Row BG Parallax, Fixed Header. */
(function () {
  "use strict";

  var header = document.querySelector(".site-head");
  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".nav-toggle");

  /* Mobilus meniu */
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Paslaugų puslapio šoninės navigacijos paryškinimas skrolinant */
  var svcNav = document.querySelector("[data-svc-nav]");
  if (svcNav && "IntersectionObserver" in window) {
    var navLinks = Array.prototype.slice.call(svcNav.querySelectorAll("a"));
    var navMap = {};
    navLinks.forEach(function (a) { navMap[a.getAttribute("href").slice(1)] = a; });
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && navMap[entry.target.id]) {
          navLinks.forEach(function (a) { a.classList.toggle("is-current", a === navMap[entry.target.id]); });
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll(".svc-block[id]").forEach(function (b) { navIO.observe(b); });
  }

  /* Demo forma — niekur nesiunčia */
  var form = document.querySelector("[data-demo-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = form.querySelector(".form-ok");
      if (ok) {
        ok.hidden = false;
        ok.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
      form.reset();
    });
  }

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

  /* Antraštės fonas — be GSAP taip pat veikia */
  function setHead() {
    if (header) header.classList.toggle("is-solid", window.scrollY > 24);
  }
  setHead();

  if (!hasGsap || reduced) {
    window.addEventListener("scroll", setHead, { passive: true });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({ start: 24, onUpdate: setHead, onToggle: setHead });

  /* Hero įėjimo seka (hierarchija: antraštė -> tekstas -> CTA -> vizualas).
     Gylio parallax kuriamas TIK intro animacijai pasibaigus, kad scrub
     bazine pozicija netaptų tarpinė intro reikšmė (foto „pasėsdavo" žemyn). */
  var hero = document.querySelector(".hero");
  var initHeroParallax = function () {
    if (!hero) return;
    gsap.set(hero.querySelectorAll(".hero-photo, .hero-panel, .chip"), { clearProps: "y,opacity" });
    gsap.to(hero.querySelectorAll(".hero-photo"), {
      y: -46, ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.6 }
    });
    gsap.to(hero.querySelectorAll(".hero-panel"), {
      y: 70, ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.6 }
    });
    gsap.to(hero.querySelectorAll(".chip"), {
      y: -90, ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.6 }
    });
  };
  if (hero && !document.hidden) {
    var tl = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: initHeroParallax });
    tl.from(hero.querySelectorAll(".hero-copy > *"), { y: 34, opacity: 0, duration: 0.9, stagger: 0.09 })
      .from(hero.querySelectorAll(".hero-photo"), { y: 80, opacity: 0, duration: 1.1 }, 0.35)
      .from(hero.querySelectorAll(".chip"), { y: 26, opacity: 0, duration: 0.8, stagger: 0.14 }, 0.8);
  } else if (hero) {
    initHeroParallax();
  }

  /* Fono parallax tamsioms juostoms (Salient: Row BG „Parallax") */
  document.querySelectorAll(".bg-layer img").forEach(function (img) {
    gsap.fromTo(img, { yPercent: -9 }, {
      yPercent: 9, ease: "none",
      scrollTrigger: { trigger: img.closest("section, header"), start: "top bottom", end: "bottom top", scrub: true }
    });
  });

  /* Evakuacijos plano „plūduriavimas" */
  var plan = document.querySelector(".evac-visual");
  if (plan) {
    gsap.to(plan, {
      y: -34, ease: "none",
      scrollTrigger: { trigger: plan.closest("section"), start: "top bottom", end: "bottom top", scrub: true }
    });
    var route = document.querySelector(".evac-route");
    if (route) {
      var len = route.getTotalLength();
      gsap.fromTo(route, { strokeDasharray: len, strokeDashoffset: len }, {
        strokeDashoffset: 0, duration: 2.4, ease: "power2.inOut",
        scrollTrigger: { trigger: plan, start: "top 75%" }
      });
    }
  }

  /* Proceso kreivės brėžimas skrolinant */
  var flowDraw = document.querySelector(".flow-path-draw");
  if (flowDraw) {
    var flowLen = flowDraw.getTotalLength();
    gsap.set(".flow-path .flow-arrow", { opacity: 0 });
    gsap.fromTo(flowDraw, { strokeDasharray: flowLen, strokeDashoffset: flowLen }, {
      strokeDashoffset: 0, ease: "none",
      scrollTrigger: { trigger: ".flow", start: "top 80%", end: "bottom 62%", scrub: true }
    });
    gsap.to(".flow-path .flow-arrow", {
      opacity: 1, duration: 0.3,
      scrollTrigger: { trigger: ".flow", start: "bottom 66%", toggleActions: "play none none reverse" }
    });
  }

  /* „12 mėnesių" ciklo žiedo brėžimas */
  var gauge = document.querySelector(".gauge-draw");
  if (gauge) {
    var gaugeLen = gauge.getTotalLength();
    gsap.fromTo(gauge, { strokeDasharray: gaugeLen, strokeDashoffset: gaugeLen }, {
      strokeDashoffset: gaugeLen * 0.02, duration: 2.2, ease: "power2.inOut",
      scrollTrigger: { trigger: ".cycle", start: "top 70%" }
    });
  }

  /* Atskleidimas slenkant (Salient: „Animate on scroll" / Fade In From Bottom) */
  gsap.utils.toArray(".reveal").forEach(function (el, i) {
    gsap.from(el, {
      y: 42, opacity: 0, duration: 0.9, ease: "power3.out",
      delay: (parseFloat(el.dataset.delay) || 0),
      scrollTrigger: { trigger: el, start: "top 86%", once: true }
    });
  });
})();
