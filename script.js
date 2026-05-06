document.addEventListener("DOMContentLoaded", () => {

  // ─────────────────────────────────────
  // NAVBAR SCROLL EFFECT
  // ─────────────────────────────────────
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


  // ─────────────────────────────────────
  // MENU HAMBURGUESA
  // ─────────────────────────────────────
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });

  // cerrar menú al hacer click
  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("open");
    });
  });


  // ─────────────────────────────────────
  // REVEAL ON SCROLL (IntersectionObserver)
  // ─────────────────────────────────────
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.15
  });

  reveals.forEach(el => observer.observe(el));


  // ─────────────────────────────────────
  // CURSOR PERSONALIZADO
  // ─────────────────────────────────────
  const cursor = document.getElementById("cursor");
  const cursorTrail = document.getElementById("cursor-trail");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorTrail.style.left = e.clientX + "px";
    cursorTrail.style.top = e.clientY + "px";
  });

  // efecto hover
  const hoverables = document.querySelectorAll("a, button, .prod-card, .oferta-card");

  hoverables.forEach(el => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hovering");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hovering");
    });
  });


  // ─────────────────────────────────────
  // SCROLL SUAVE EXTRA (fallback)
  // ─────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });


  // ─────────────────────────────────────
  // HERO CANVAS (efecto fluido tipo resina)
  // ─────────────────────────────────────
  const canvas = document.createElement("canvas");
  const heroCanvas = document.getElementById("hero-canvas");

  if (heroCanvas) {
    heroCanvas.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    let w, h;

    function resize() {
      w = canvas.width = heroCanvas.offsetWidth;
      h = canvas.height = heroCanvas.offsetHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();

        let gradient = ctx.createLinearGradient(0, 0, w, h);
        gradient.addColorStop(0, `rgba(201,169,110,0.08)`);
        gradient.addColorStop(1, `rgba(200,180,150,0.03)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;

        for (let x = 0; x < w; x += 10) {
          let y = Math.sin((x * 0.002) + t + i) * 40 + h / 2;
          ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      t += 0.01;
      requestAnimationFrame(draw);
    }

    draw();
  }


  // ─────────────────────────────────────
  // MICROINTERACCIÓN BOTONES
  // ─────────────────────────────────────
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "translateY(-3px)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });


  // ─────────────────────────────────────
  // PARALLAX SUAVE EN HERO
  // ─────────────────────────────────────
  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (hero) {
      hero.style.backgroundPositionY = scrolled * 0.3 + "px";
    }
  });

});