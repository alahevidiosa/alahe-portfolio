// Projects and their case studies. Media lives in media/<id>/ (listed in media.js); covers in media/covers/.
// vimeo: [video id, privacy hash] plays the full film in the case study. Leave it out to show the loops instead.
const projects = [
  // SaaS & Promo
  {
    id: "256826579", cat: "saas", year: 2026, title: "growX CRM Mobile App", kind: "SaaS explainer", client: "growX CRM", role: "Storyboard & design", studio: "VIDIOSA",
    cover: "0d3851256826579.Y3JvcCw4ODksNjk1LDI3NSwxODU.png", vimeo: ["1234028378", "da62cec971"], loop: "c7c24d256826579.6ac88d7585aff.webm",
    lead: "An explainer that shows growX CRM's whole platform living inside its mobile app.",
    sections: [
      ["Brief", "growX needed a SaaS explainer that proves everything the platform does fits in a phone. It had to feel quick and practical, not like a list of features."],
      ["Story", "One simple story: an owner is busy, a new lead arrives, and with a few taps and Ask AI the lead is answered, booked and confirmed. From there the film opens up the rest of the app."],
    ],
    credits: [["Team", "Nazmul Alahe, Riadul Islam, Abdullah Al Fahim, Md Mizanur Rahman, Arafat Miraz"], ["Studio", "VIDIOSA"]],
  },
  {
    id: "255684987", cat: "saas", year: 2026, title: "AI Studio for HighLevel", kind: "SaaS launch video", client: "HighLevel", role: "Storyboard design", studio: "VIDIOSA",
    cover: "7d7c92255684987.Y3JvcCwzMDIwLDIzNjIsOTcsMTU3.jpg", vimeo: ["1226507296", "da62cec971"],
    lead: "A short launch film for AI Studio, HighLevel's builder that turns one prompt into a working website, funnel, dashboard or app.",
    sections: [
      ["Brief", "Show in about a minute that AI Studio removes the drag-and-drop builder and the developer: describe what you want and it goes live with copy, forms and logic."],
      ["My part", "I storyboarded the film with Riadul Islam, planning each scene from the first typed prompt to the finished build before it went to motion."],
    ],
    credits: [["Storyboard", "Nazmul Alahe, Riadul Islam"], ["Motion", "Md Mizanur Rahman"], ["Coordinator", "Arafat Miraz"], ["Studio", "VIDIOSA"]],
  },
  {
    id: "255683319", cat: "saas", year: 2026, title: "growX Reputation", kind: "SaaS explainer", client: "growX CRM", role: "Design", studio: "VIDIOSA",
    cover: "c5e8a3255683319.Y3JvcCw2MTMxLDQ3OTYsMCww.jpg", vimeo: ["1226503664", ""],
    lead: "A product film about how reviews, responses and Google visibility build a local business's reputation.",
    sections: [
      ["Brief", "Show how reputation drives customer trust and local visibility. Keep it practical rather than technical: from customer feedback to review management, automated replies and a stronger search presence."],
      ["Story", "Customer interaction, review request, feedback, response, reputation growth and better Google visibility. Each scene hands off to the next with camera moves, UI transitions, kinetic type and depth."],
      ["Design", "Live-action business moments with clean SaaS interface on top. Soft glass panels, large type, generous spacing and subtle gradients keep it premium but approachable, and restrained enough that every element supports the message."],
    ],
    credits: [["Design", "Nazmul Alahe, Riadul Islam, Abdullah Al Fahim"], ["Motion", "Shakhawat Nazmul, Md Mizanur Rahman"], ["Coordinator", "Arafat Miraz"], ["Studio", "VIDIOSA"]],
  },
  {
    id: "231954093", cat: "saas", year: 2025, title: "Pagifye Promo", kind: "SaaS explainer", client: "Pagifye", role: "Design", studio: "VIDIOSA",
    cover: "18fd9d231954093.Y3JvcCwxNjE3LDEyNjQsMCww.jpg", vimeo: ["1121756904", ""],
    lead: "A short explainer for Pagifye, a web design and development toolkit with 2,500+ UI blocks.",
    sections: [
      ["Brief", "Show how Pagifye speeds up website design and development, using real product interactions instead of abstract claims."],
      ["Design", "Clean, minimal scenes built from the actual UI blocks, in Pagifye's fresh green, so the workflow is easy to follow and the product stays the hero."],
    ],
    credits: [["Design", "Nazmul Alahe, Dipto Malo"], ["Motion", "Shakhawat Nazmul, Muhammad Nahid, Arafat Miraz"], ["Coordinator", "Raisul Islam"], ["Studio", "VIDIOSA"]],
  },
  {
    id: "224917949", cat: "saas", year: 2025, title: "Playbook", kind: "SaaS explainer", client: "Playbook", role: "Design", studio: "VIDIOSA",
    cover: "c9e0e8224917949.Y3JvcCwxNjE2LDEyNjQsMCww.jpg", vimeo: ["1078643925", "bb12275403"],
    lead: "An explainer for Playbook, smart visual storage built for creatives.",
    sections: [
      ["Brief", "Show the daily frustrations creatives face, like scattered files, slow previews and lost work, and how AI tagging, auto-organisation and instant previews fix them."],
      ["Story", "The film starts in that chaos and shifts to relief and flow. It's less about organising files and more about respecting the creative process and making room for inspiration."],
    ],
    credits: [["Team", "Dipto Malo, Nazmul Alahe, Muhammad Nahid"], ["Studio", "VIDIOSA"]],
  },
  {
    id: "224111623", cat: "saas", year: 2025, title: "DealTrail", kind: "SaaS explainer", client: "DealTrail", role: "Design", studio: "VIDIOSA",
    cover: "398c41224111623.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
    lead: "An explainer for DealTrail, a real estate SaaS tool.",
    sections: [
      ["Brief", "Turn a detailed product into something clear and engaging, using clean visuals, text-based animation and simple storytelling."],
      ["Notes", "Making a feature-heavy SaaS product feel fluid and easy to digest was the fun part. The client trusted the process, and the result is one the whole team is proud of."],
    ],
    credits: [["Team", "Nazmul Alahe, Arafat Miraz, Dipto Malo"], ["Studio", "VIDIOSA"]],
  },
  {
    id: "214417543", cat: "saas", year: 2024, title: "VIDIOSA Promo", kind: "Brand promo", client: "VIDIOSA", role: "Design & illustration", studio: "VIDIOSA",
    cover: "1d3695214417543.Y3JvcCwxNjE2LDEyNjQsMCww.jpg", vimeo: ["1037770991", ""],
    lead: "VIDIOSA's own promo film: bold, fast and full of energy.",
    sections: [
      ["Brief", "Show how VIDIOSA helps SaaS and tech brands with launch videos, explainers, demos and onboarding content, and the studio's goal to lead explainer videos globally by 2027."],
      ["Change of pace", "The script began slow and story-driven. In design we saw the pacing would lose viewers, so we rebuilt the visual tone around speed, dynamic motion and bold energy."],
      ["Shapes & colour", "Trendy shapes and flowing lines set the rhythm: circles for inclusivity and possibility, angular forms for strength and stability. A dark, saturated palette makes every element pop."],
    ],
    credits: [["Concept", "Rakibul Kabbo, Shakhawat Nazmul"], ["Design & illustration", "Rakibul Kabbo, Nazmul Alahe, Dipto Malo"], ["Motion", "Shakhawat Nazmul, Muhammad Nahid"], ["Studio", "VIDIOSA"]],
  },

  // Branding
  {
    id: "254437673", cat: "branding", year: 2026, title: "Orva Smart Farming", kind: "Brand identity", client: "Orva", role: "Brand identity & creative direction", studio: "Freelance",
    cover: "0c88c5254437673.Y3JvcCwzMjMyLDI1MjgsMCww.jpg",
    lead: "A brand identity for Orva, an agro-tech company that makes farming simpler with smart technology.",
    sections: [
      ["Idea", "Natural elements meet a clean, modern visual language, to stand for growth, innovation and a smarter future for agriculture."],
      ["System", "The logo comes in dark and light versions with flexible colour variations, so it stays clear and consistent on any background, across digital, print and brand applications."],
      ["Social", "A set of launch posts carries the identity into social media."],
    ],
    credits: [["Brand identity & creative direction", "Nazmul Alahe"], ["Creative support & ideation", "Riadul Islam"]],
  },
  {
    id: "200056167", cat: "branding", year: 2024, title: "VIDIOSA Rebranding", kind: "Rebrand", client: "VIDIOSA", role: "Design", studio: "VIDIOSA",
    cover: "64f9c1200056167.Y3JvcCwyMDg2LDE2MzIsNDQ0LDc3.png", vimeo: ["952820636", ""],
    lead: "A new identity for VIDIOSA as it grew from a one-animator experiment into a SaaS video studio of 30+ people.",
    sections: [
      ["Why", "The old brand no longer matched VIDIOSA's ambition to help SaaS and tech businesses grow with video. The new identity had to speak to SaaS founders and decision-makers."],
      ["Logo", "A stylised play button sits at the core: bold and geometric for professionalism, with rounded edges for friendliness and approachability."],
      ["Colour & type", "Navy blue for trust and reliability, vibrant orange for energy and creativity. Aspekta and Sharp Grotesk keep the system modern, clean and readable everywhere."],
      ["Challenge", "Keep existing clients on board while attracting new international ones. Market research, client feedback and many rounds of refinement shaped the final system."],
    ],
    credits: [["Brand identity", "Tanvir Ahmed Saimon"], ["Creative direction", "Tanvir Prince"], ["Art direction", "Rakibul Kabbo"], ["Design", "Nazmul Alahe, Dipto Malo"], ["Animation", "Shakhawat Nazmul, Md Neon, Muhammad Nahid"], ["Studio", "VIDIOSA"]],
  },

  // Illustration
  {
    id: "190290783", cat: "illustration", year: 2024, title: "Alina's Digital Detox", kind: "Character illustration", client: "VIDIOSA", role: "Storyboard & illustration", studio: "VIDIOSA",
    cover: "6c0c1f190290783.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
    lead: "A day in the life of Alina, who trades screen time for yoga, family, play and the beach.",
    sections: [["Story", "Morning yoga, a nutritious breakfast, time with family, play with her dog, basketball, shopping and a calm day by the sea. Each frame is one moment of an active, screen-free life."]],
    credits: [["Storyboard & illustration", "Nazmul Alahe"], ["Concept & storytelling", "Rakibul Kabbo"], ["Studio", "VIDIOSA"]],
  },
  {
    id: "213753157", cat: "illustration", year: 2024, title: "Chillout 2024", kind: "Illustration", client: "VIDIOSA", role: "Illustration", studio: "VIDIOSA",
    cover: "39d295213753157.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg", vimeo: ["1035100291", ""],
    lead: "An illustrated key visual for VIDIOSA's Chillout 2024 trip.",
    sections: [],
    credits: [["Team", "Nazmul Alahe, Shakhawat Nazmul, Muhammad Nahid, Rakibul Kabbo"], ["Studio", "VIDIOSA"]],
  },
  {
    id: "211947143", cat: "illustration", year: 2024, title: "Retro Illustration", kind: "Illustration", client: "VIDIOSA", role: "Illustration", studio: "VIDIOSA",
    cover: "a553d2211947143.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg", vimeo: ["1027203797", ""],
    lead: "Bold retro-style scenes built from flat shapes and bright colour.",
    sections: [],
    credits: [["Team", "Nazmul Alahe, Rakibul Kabbo, Shakhawat Nazmul, Dipto Malo, Muhammad Nahid"], ["Studio", "VIDIOSA"]],
  },
  {
    id: "192963251", cat: "illustration", year: 2024, title: "Sow for Tomorrow", kind: "Illustration", client: "VIDIOSA", role: "Illustration", studio: "VIDIOSA",
    cover: "9d3901192963251.Y3JvcCwzMzY2LDI2MzMsMCww.jpg",
    lead: "How our world looks without trees, and with them.",
    sections: [],
    credits: [["Illustration", "Nazmul Alahe"], ["Storyboard", "Dipto Malo"], ["Concept & storytelling", "Rakibul Kabbo"], ["Studio", "VIDIOSA"]],
  },
  {
    id: "194083005", cat: "illustration", year: 2024, title: "Collaboration Made Easy", kind: "Explainer scenes", client: "VIDIOSA", role: "Illustration", studio: "VIDIOSA",
    cover: "e9e19f194083005.Y3JvcCwxNjE2LDEyNjQsMCww.jpg",
    lead: "Explainer scenes about teams working better together.",
    sections: [],
    credits: [["Illustration", "Nazmul Alahe"], ["Storyboard", "Dipto Malo"], ["Studio", "VIDIOSA"]],
  },
];

const catNames = { saas: "SaaS & Promo", branding: "Branding", illustration: "Illustration" };
const brands = [["growX CRM", "b1"], ["HighLevel", "b2"], ["DealTrail", "b3"], ["Playbook", "b1"], ["Pagifye", "b2"], ["Orva", "b3"], ["VIDIOSA", "b1"]];

// Storyboards first: that's the main work; the rest come alongside it
const services = [
  ["SaaS Explainer Storyboards", "Scripts turned into clear, scene-by-scene frames, ready for animation."],
  ["UI Design", "Product screens and interfaces that look clean on screen and on camera."],
  ["Posters & Carousels", "Social posts and campaign visuals that stop the scroll."],
  ["Branding", "Logos, colour and type that hold a brand together."],
  ["Illustration", "Characters and scenes that make a product story feel human."],
];

// From section 06 / My Creative Workflow
const steps = [
  ["Understand", "Learn about the product, audience and key message.", 20],
  ["Structure", "Break down the script and organize the story.", 40],
  ["Visualize", "Develop storyboard frames and product-focused visuals.", 60],
  ["Refine", "Improve clarity, composition and visual consistency using creative tools and AI-assisted workflows.", 80],
  ["Deliver", "Prepare clear visual sequences for the explainer video production process.", 100],
];

const faqs = [
  ["Do you take freelance projects?", "Yes. I'm open to discussing freelance projects: SaaS storyboards, product visualization, explainer video visuals and brand identity."],
  ["What do you need from me to start a storyboard?", "A script or a rough idea of the story, access to the product or a set of screenshots, and any brand guidelines you already have."],
  ["What do I get at the end?", "A Figma file with every scene in order, layers named for animators, and exported frames you can review and share."],
  ["Can you work with my existing brand?", "Yes. I can design inside your current colours, type and illustration style, or help you refine them first."],
  ["How long does a project take?", "It depends on the length of the video or the size of the brand. We agree milestones before we start, so you always know what's next."],
];

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const cover = (p) => "media/covers/" + p.cover;
const mediaOf = (p) => (window.MEDIA && window.MEDIA[p.id]) || [];
const file = (p, f) => `media/${p.id}/${f}`;
const isVid = (f) => /\.webm$/i.test(f);
const poster = (p, f) => file(p, f.replace(/\.webm$/i, ".jpg"));
const firstLoop = (p) => p.loop || mediaOf(p).find(isVid); // `loop` picks a specific preview clip
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const canEmbed = !window.__PREVIEW__; // the Claude preview can't show Vimeo players, so it shows the loops instead
const playIcon = `<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M2 1l7 4-7 4z" fill="currentColor"/></svg>`;

// Pixel glyphs: filled cells solid, empty cells as tiny dots
const pixelSVG = (rows, step, size) => {
  const w = rows[0].length * step, h = rows.length * step;
  let cells = "";
  rows.forEach((r, y) => [...r].forEach((v, x) => {
    const on = v === "1";
    const s = on ? size : size * 0.42, o = (step - s) / 2;
    cells += `<rect x="${x * step + o}" y="${y * step + o}" width="${s}" height="${s}" rx="${on ? 0.4 : s / 2}" fill="currentColor" opacity="${on ? 1 : 0.28}"/>`;
  }));
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true">${cells}</svg>`;
};

// Hero curve: project cards on the inside of a curve, turning slowly like a wheel; the centre card glows.
// Drag it sideways to spin it: a harder flick spins faster, then it eases back to its slow drift.
(() => {
  const curve = document.getElementById("curve");
  const stage = document.getElementById("curve-stage");
  const small = innerWidth < 720;
  const GAP = small ? 24 : 17;                 // degrees between neighbouring cards
  const LIMIT = small ? 66 : 70;               // cards fade out past this angle
  const N = Math.ceil((LIMIT * 2) / GAP) + 2;
  const SPAN = N * GAP;
  const SPEED = reduceMotion ? 0 : 4.2;        // resting drift, degrees per second (cards move left)
  const MAX = 900;                             // fastest spin a flick can give, degrees per second
  let R = 700;
  const size = () => { R = Math.max(small ? 300 : 620, curve.clientWidth * (small ? 0.55 : 0.5)); };
  size();

  const cards = Array.from({ length: N }, (_, i) => {
    const p = projects[i % projects.length];
    const el = document.createElement("button");
    el.type = "button"; el.className = "curve-card"; el.dataset.open = p.id;
    el.innerHTML = `<img src="${cover(p)}" alt="${esc(p.title)}"><span class="curve-tag">${esc(p.title)}</span>`;
    stage.appendChild(el);
    return { el, p, a: -SPAN / 2 + i * GAP + GAP / 2 };
  });

  let centre = null;
  const place = () => {
    let best = null;
    cards.forEach((c) => {
      const rad = (c.a * Math.PI) / 180;
      const x = R * Math.sin(rad), z = R * (1 - Math.cos(rad));   // the sides come toward the viewer
      const op = Math.max(0, Math.min(1, (LIMIT - Math.abs(c.a)) / 16));
      c.el.style.transform = `translate3d(${x.toFixed(1)}px, 0, ${z.toFixed(1)}px) rotateY(${(-c.a).toFixed(2)}deg)`;
      c.el.style.opacity = op.toFixed(3);
      c.el.tabIndex = op > 0.5 ? 0 : -1;
      if (!best || Math.abs(c.a) < Math.abs(best.a)) best = c;
    });
    if (best !== centre) {
      if (centre) centre.el.classList.remove("center");
      centre = best;
      centre.el.classList.add("center");
    }
  };

  const show = (c, p) => {
    c.p = p; c.el.dataset.open = p.id;
    c.el.querySelector("img").src = cover(p);
    c.el.querySelector("img").alt = p.title;
    c.el.querySelector(".curve-tag").textContent = p.title;
  };
  // Turn the wheel by d degrees; cards leaving one end come back at the other with the next (or previous) project
  const turn = (d) => {
    cards.forEach((c) => {
      c.a += d;
      if (c.a < -SPAN / 2) { c.a += SPAN; show(c, projects[(projects.indexOf(c.p) + N) % projects.length]); }
      else if (c.a > SPAN / 2) { c.a -= SPAN; show(c, projects[(projects.indexOf(c.p) - N % projects.length + projects.length) % projects.length]); }
    });
    place();
  };

  place();
  addEventListener("resize", () => { size(); place(); });

  let raf = 0, last = 0, visible = true, slow = false;
  let v = -SPEED;                                // current spin, degrees per second
  let drag = null, moved = 0;
  const pxToDeg = (px) => (px / R) * (180 / Math.PI) * 1.15;

  const tick = (now) => {
    const dt = Math.min(0.05, (now - (last || now)) / 1000);
    last = now;
    if (!drag) {
      // a flick keeps spinning and slows like a heavy wheel until it's back to the resting drift
      const rest = -SPEED * (slow ? 0.25 : 1);
      v += (rest - v) * (1 - Math.exp(-dt * 1.4));
      turn(v * dt);
    }
    raf = visible ? requestAnimationFrame(tick) : 0;
  };
  const wake = () => { if (visible && !raf) { last = 0; raf = requestAnimationFrame(tick); } };

  curve.addEventListener("pointerenter", () => { slow = true; });
  curve.addEventListener("pointerleave", () => { slow = false; });
  curve.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    drag = { x: e.clientX, t: performance.now(), id: e.pointerId };
    moved = 0;
    v = 0;
    curve.classList.add("grabbing");
  });
  addEventListener("pointermove", (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const now = performance.now();
    const dx = e.clientX - drag.x;
    if (!dx) return;
    moved += Math.abs(dx);
    if (moved > 6 && !curve.hasPointerCapture(drag.id)) curve.setPointerCapture(drag.id);
    const d = pxToDeg(dx);
    turn(d);
    // smoothed release speed: how fast the hand was moving over the last few frames
    const dt = Math.max(8, now - drag.t) / 1000;
    v = v * 0.6 + Math.max(-MAX, Math.min(MAX, (d / dt) * 1.6)) * 0.4;
    drag.x = e.clientX; drag.t = now;
  });
  const release = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    if (performance.now() - drag.t > 90) v *= 0.2;  // held still before letting go: barely coasts
    drag = null;
    curve.classList.remove("grabbing");
    wake();
  };
  addEventListener("pointerup", release);
  addEventListener("pointercancel", release);
  // a drag isn't a click: don't open the card under the pointer
  curve.addEventListener("click", (e) => { if (moved > 6) { e.stopPropagation(); e.preventDefault(); } }, true);
  curve.addEventListener("dragstart", (e) => e.preventDefault());

  new IntersectionObserver(([en]) => { visible = en.isIntersecting; wake(); }).observe(curve);
})();

// Scroll-zoom: sharp stills from the design folder in an even grid; zooming in fades the scene
// out while the next section slides up over it
(() => {
  const zoomer = document.getElementById("zoomer");
  const sticky = zoomer.querySelector(".zoomer-sticky");
  const grid = document.getElementById("zoomer-grid");
  // media/zoom/zNN.jpg: each project's cover at full resolution (z08, Orva in the middle, is zoomed the most)
  const stills = ["255684987", "256826579", "231954093", "255683319", "200056167", "224917949", "190290783", "254437673",
    "224111623", "213753157", "214417543", "211947143", "192963251", "194083005", "255684987"];
  grid.innerHTML = stills.map((id, i) =>
    `<button type="button" data-open="${id}" tabindex="-1"><img src="media/zoom/z${String(i + 1).padStart(2, "0")}.jpg" alt="" decoding="async"></button>`
  ).join("");
  // starting scale: as big as possible while the whole grid (74vw tall at scale 1) still fits above the label
  const z0 = () => innerWidth < 720 ? 0.36 : Math.min(0.58, (innerHeight * 0.8) / (innerWidth * 0.74));
  if (reduceMotion) { grid.style.setProperty("--z", z0()); addEventListener("resize", () => grid.style.setProperty("--z", z0())); return; }
  const ease = (a, b, x) => { const k = Math.max(0, Math.min(1, (x - a) / (b - a))); return k * k * (3 - 2 * k); };
  let ticking = false;
  const update = () => {
    ticking = false;
    const r = zoomer.getBoundingClientRect();
    const total = r.height - innerHeight;
    const t = Math.max(0, Math.min(1, -r.top / total));
    const Z0 = z0();
    grid.style.setProperty("--z", (Z0 + ease(0, 1, t) * (3.4 - Z0)).toFixed(3)); // overview → the middle still fills the view
    sticky.style.opacity = (1 - ease(0.5, 0.92, t)).toFixed(3);             // fade out as it zooms in
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener("resize", update);
  update();
})();

// Products strip: names repeated so the left-to-right drift loops seamlessly
const brandRow = brands.map(([b]) => `<span>${b}</span><i aria-hidden="true">✦</i>`).join("");
document.getElementById("brands").innerHTML = brandRow + brandRow + brandRow + brandRow;

// Work: one stack of cards per discipline. Each card sticks a little lower than the one before, so as the
// next slides over it the earlier ones peek out above and shrink back (after the reference video).
// Soft tints from the palette, one per card in turn.
const tints = ["#e4ece6", "#f2e8de", "#e8e5f0", "#e0e8f2", "#e9ebee"];
document.querySelectorAll(".work").forEach((sec) => {
  const stack = sec.querySelector(".stack");
  const list = projects.filter((p) => p.cat === stack.dataset.cat);
  sec.querySelector(".count").textContent = `(${list.length})`;
  stack.innerHTML = list.map((p, i) => {
    const loop = firstLoop(p);
    return `
    <article class="pcard" data-open="${p.id}" style="--i:${i};--tint:${tints[i % tints.length]}">
      <div class="pcard-text">
        <span class="label">${esc(p.kind)} · ${p.year}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.lead)}</p>
        <dl class="pcard-facts">
          <div><dt>Client</dt><dd>${esc(p.client)}</dd></div>
          <div><dt>My role</dt><dd>${esc(p.role)}</dd></div>
        </dl>
        <button type="button" class="btn btn-black" data-open="${p.id}">${p.vimeo ? playIcon + " Play the film" : "View case study"}</button>
      </div>
      <div class="pcard-media">
        <img src="${cover(p)}" alt="${esc(p.title)}" loading="lazy">
        ${loop && !reduceMotion ? `<video muted loop playsinline preload="none" data-src="${file(p, loop)}"></video>` : ""}
      </div>
    </article>`;
  }).join("");
});

// Cards under the one on top shrink a little per card stacked above them
(() => {
  const cards = [...document.querySelectorAll(".pcard")];
  if (reduceMotion || !cards.length) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    cards.forEach((c) => {
      const stack = c.parentElement;
      const after = [...stack.children].slice([...stack.children].indexOf(c) + 1);
      const top = c.getBoundingClientRect().top;
      let depth = 0;
      after.forEach((n) => {
        const gap = n.getBoundingClientRect().top - top;   // how far the next card still has to climb
        depth += Math.max(0, Math.min(1, 1 - gap / c.offsetHeight));
      });
      c.style.setProperty("--depth", depth.toFixed(3));
    });
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener("resize", update);
  update();
})();

const cardVideos = new IntersectionObserver((entries) => {
  entries.forEach(({ target: v, isIntersecting }) => {
    if (isIntersecting) {
      if (!v.src) { v.src = v.dataset.src; v.addEventListener("playing", () => v.classList.add("ready"), { once: true }); }
      v.play().catch(() => {});
    } else v.pause();
  });
}, { rootMargin: "100px" });
document.querySelectorAll(".pcard video").forEach((v) => cardVideos.observe(v));

// Case study overlay
const caseView = document.getElementById("case");
const caseScroll = document.getElementById("case-scroll");
let current = -1, opener = null;

const caseVideo = (p) => {
  if (p.vimeo && canEmbed) {
    const [id, h] = p.vimeo;
    return `<iframe src="https://player.vimeo.com/video/${id}?${h ? "h=" + h + "&" : ""}autoplay=1&title=0&byline=0&portrait=0&dnt=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${esc(p.title)} film"></iframe>`;
  }
  const loop = firstLoop(p);
  const media = loop
    ? `<video src="${file(p, loop)}" poster="${poster(p, loop)}" autoplay muted loop playsinline></video>`
    : `<img src="${cover(p)}" alt="">`;
  const watch = p.vimeo ? `<a class="btn btn-black watch" href="https://vimeo.com/${p.vimeo[0]}${p.vimeo[1] ? "/" + p.vimeo[1] : ""}" target="_blank" rel="noopener">${playIcon} Watch the full film</a>` : "";
  return media + watch;
};

const gallery = (p) => {
  const all = mediaOf(p);
  const main = all.filter((x) => !x.startsWith("posts/"));
  const posts = all.filter((x) => x.startsWith("posts/"));
  const item = (x) => isVid(x)
    ? `<video data-src="${file(p, x)}" poster="${poster(p, x)}" muted loop playsinline preload="none"></video>`
    : `<img src="${file(p, x)}" alt="" loading="lazy">`;
  return `<div class="case-gallery">${main.map(item).join("")}</div>` +
    (posts.length ? `<span class="label case-sub">Social posts</span><div class="case-posts">${posts.map(item).join("")}</div>` : "");
};

const renderCase = (i) => {
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  document.getElementById("case-cat").textContent = `${catNames[p.cat]} — ${String(i + 1).padStart(2, "0")} / ${projects.length}`;
  caseScroll.innerHTML = `
    <article class="container case-body">
      <div class="case-video">${caseVideo(p)}</div>
      <header class="case-head">
        <div><span class="label">${esc(p.kind)} · ${p.year}</span><h1 id="case-title">${esc(p.title)}</h1><p class="lead">${esc(p.lead)}</p></div>
        <dl class="kv">
          <div><dt>Client</dt><dd>${esc(p.client)}</dd></div>
          <div><dt>Year</dt><dd>${p.year}</dd></div>
          <div><dt>My role</dt><dd>${esc(p.role)}</dd></div>
          <div><dt>Studio</dt><dd>${esc(p.studio)}</dd></div>
        </dl>
      </header>
      ${p.sections.length ? `<div class="case-text">${p.sections.map(([h, t]) => `<section><span class="label">${esc(h)}</span><p>${esc(t)}</p></section>`).join("")}</div>` : ""}
      ${gallery(p)}
      <div class="case-credits"><span class="label">Credits</span><ul>${p.credits.map(([r, n]) => `<li><b>${esc(r)}</b>${esc(n)}</li>`).join("")}</ul></div>
      <button type="button" class="case-next" data-goto="${(i + 1) % projects.length}">
        <span><span class="label">Next project · ${catNames[next.cat]}</span><strong>${esc(next.title)} →</strong></span>
        <img src="${cover(next)}" alt="">
      </button>
    </article>`;
  caseScroll.scrollTop = 0;
  caseScroll.querySelectorAll(".case-gallery video, .case-posts video").forEach((v) => galleryVideos.observe(v));
};

const galleryVideos = new IntersectionObserver((entries) => {
  entries.forEach(({ target: v, isIntersecting }) => {
    if (isIntersecting) { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); } else v.pause();
  });
}, { root: caseScroll, rootMargin: "200px" });

const openCase = (id, from) => {
  const i = projects.findIndex((p) => p.id === id);
  if (i < 0) return;
  if (current < 0) opener = from || document.activeElement;
  current = i;
  renderCase(i);
  caseView.hidden = false;
  document.body.classList.add("locked");
  document.querySelectorAll(".pcard video").forEach((v) => v.pause());
  history.replaceState(null, "", "#p-" + id);
  document.getElementById("case-close").focus({ preventScroll: true });
};
const closeCase = () => {
  if (current < 0) return;
  caseView.hidden = true;
  caseScroll.innerHTML = ""; // stops the Vimeo player
  document.body.classList.remove("locked");
  history.replaceState(null, "", location.pathname + location.search);
  current = -1;
  if (opener && opener.focus) opener.focus({ preventScroll: true });
};
const step = (d) => { current = (current + d + projects.length) % projects.length; renderCase(current); history.replaceState(null, "", "#p-" + projects[current].id); };

document.addEventListener("click", (e) => {
  const o = e.target.closest("[data-open]");
  if (o) { openCase(o.dataset.open, o); return; }
  const g = e.target.closest("[data-goto]");
  if (g) { current = +g.dataset.goto; step(0); }
});
document.getElementById("case-close").addEventListener("click", closeCase);
document.getElementById("case-prev").addEventListener("click", () => step(-1));
document.getElementById("case-next").addEventListener("click", () => step(1));
document.addEventListener("keydown", (e) => {
  if (current < 0) return;
  if (e.key === "Escape") closeCase();
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
});
if (location.hash.startsWith("#p-")) openCase(location.hash.slice(3));

// Experience cards: key VIDIOSA projects from each role's years, as chips that open the case study
document.querySelectorAll(".role-chips").forEach((box) => {
  const years = box.dataset.years.split(",").map(Number);
  box.innerHTML = projects
    .filter((p) => p.studio === "VIDIOSA" && years.includes(p.year))
    .slice(0, 5)
    .map((p) => `<button type="button" data-open="${p.id}"><img src="${cover(p)}" alt="" loading="lazy">${esc(p.title)}</button>`)
    .join("");
});

// Services as a short list
document.getElementById("service-list").innerHTML = services
  .map(([t, d], i) => `<li><span class="label num">0${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`)
  .join("");

// FAQ accordion
const faqList = document.getElementById("faq-list");
faqList.innerHTML = faqs.map(([q, a], i) => `
  <div class="acc${i === 0 ? " open" : ""}">
    <button type="button" class="acc-btn" aria-expanded="${i === 0}"><h3>${q}</h3><span class="acc-ic" aria-hidden="true"></span></button>
    <div class="acc-panel"><div class="acc-inner"><div class="acc-content"><p>${a}</p></div></div></div>
  </div>`).join("");
faqList.addEventListener("click", (e) => {
  const btn = e.target.closest(".acc-btn");
  if (!btn) return;
  const acc = btn.parentElement, open = !acc.classList.contains("open");
  acc.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", open);
});

// Flow: staircase of steps with progress bars; step 2 gets a pixel frame icon
const frameIcon = ["11111", "10001", "10101", "10001", "11111"];
document.getElementById("flow").innerHTML = steps
  .map(([t, d, p], i) => `
    <li class="reveal">
      ${i === 1 ? `<span class="px">${pixelSVG(frameIcon, 10.4, 9)}</span>` : ""}
      <h3>${t}</h3><p>${d}</p>
      <span class="bar">${p}%<i style="--p:${p}%"></i></span>
    </li>`)
  .join("");

// Count-up stats
const countUp = (el) => {
  const end = +el.dataset.count;
  if (reduceMotion) { el.textContent = end; return; }
  const t0 = performance.now();
  const tick = (now) => {
    const k = Math.min(1, (now - t0) / 1200);
    el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

// Copy email
// Contact form: opens the visitor's email app with the inquiry filled in
const form = document.getElementById("inquiry");
const note = document.getElementById("form-note");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  ["f-name", "f-email", "f-details"].forEach((id) => {
    const el = document.getElementById(id);
    const bad = !el.value.trim() || (el.type === "email" && !/^\S+@\S+\.\S+$/.test(el.value));
    el.setAttribute("aria-invalid", bad);
    if (bad) ok = false;
  });
  if (!ok) { note.textContent = "Please add your name, a valid email and a few words about the project."; return; }
  const v = (id) => document.getElementById(id).value.trim();
  const subject = `Project inquiry: ${v("f-type")}`;
  const body = `Name: ${v("f-name")}\nEmail: ${v("f-email")}\nProject type: ${v("f-type")}\n\n${v("f-details")}`;
  location.href = `mailto:nazmulelahe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  note.textContent = "Your email app should open with the inquiry ready to send. If it doesn't, email nazmulelahe@gmail.com directly.";
});

const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", async () => {
  let ok = true;
  try { await navigator.clipboard.writeText("nazmulelahe@gmail.com"); } catch (_) {
    ok = false;
    const r = document.createRange();
    r.selectNodeContents(copyBtn.querySelector("span"));
    getSelection().removeAllRanges(); getSelection().addRange(r);
  }
  copyBtn.classList.add("done");
  copyBtn.querySelector("b").textContent = ok ? "Copied" : "Selected";
  setTimeout(() => { copyBtn.classList.remove("done"); copyBtn.querySelector("b").textContent = "Copy"; }, 1800);
});

// Dhaka clock + year
const clock = () => {
  const t = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Dhaka" });
  document.querySelectorAll(".clock").forEach((el) => { el.textContent = t; });
};
clock(); setInterval(clock, 30000);
document.getElementById("year").textContent = new Date().getFullYear();

const finePointer = matchMedia("(pointer: fine)").matches;

// Custom cursor: a dark chrome arrow, or a white pixel arrow. Shaking the mouse swaps them.
if (finePointer) {
  const svgCursor = (svg, x, y) => `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${x} ${y}, auto`;

  // Both cursors share one 21 × 31 frame with an 18 × 28 arrow, so they read as the same size
  const chrome = svgCursor(`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="31" viewBox="0 0 21 31">
    <defs>
      <linearGradient id="f" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a4150"/><stop offset="1" stop-color="#0c0f14"/></linearGradient>
      <linearGradient id="s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".45" stop-color="#aab2c0"/><stop offset=".8" stop-color="#e9ecf1"/><stop offset="1" stop-color="#ff9a5a"/></linearGradient>
    </defs>
    <path d="M1 1 L1 25.6 L6.8 19.6 L10.7 29 L15 26.9 L11.2 17.7 L19 17.7 Z" fill="url(#f)" stroke="url(#s)" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>`, 1, 1);

  // Classic pixel arrow, 9 × 14 cells of 2px: B = outline, W = fill (plus a grey drop shade)
  const PIX = [
    "B........", "BB.......", "BWB......", "BWWB.....", "BWWWB....", "BWWWWB...", "BWWWWWB..",
    "BWWWWWWB.", "BWWWWBBBB", "BWBWWB...", "BB.BWWB..", "B..BWWB..", "....BWWB.", "....BBB..",
  ];
  const P = 2;
  let rects = "";
  PIX.forEach((row, y) => [...row].forEach((ch, x) => {
    if (ch === "B") rects += `<rect x="${x * P + 1}" y="${y * P + 1}" width="${P}" height="${P}" fill="#8b919b"/>`;
  }));
  PIX.forEach((row, y) => [...row].forEach((ch, x) => {
    if (ch !== ".") rects += `<rect x="${x * P}" y="${y * P}" width="${P}" height="${P}" fill="${ch === "B" ? "#0d1017" : "#ffffff"}"/>`;
  }));
  const pixel = svgCursor(`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="31" viewBox="0 0 21 31" shape-rendering="crispEdges">${rects}</svg>`, 1, 1);

  const cursors = [chrome, pixel];
  let which = 0;
  const root = document.documentElement;
  root.classList.add("custom-cursor");
  root.style.setProperty("--cursor", cursors[which]);

  // Shake = several quick left-right reversals with real distance in a short window
  let lastX = null, lastDir = 0, flips = [], travel = 0, cooldown = 0;
  addEventListener("pointermove", (e) => {
    const now = performance.now();
    if (lastX !== null) {
      const dx = e.clientX - lastX;
      travel += Math.abs(dx);
      const dir = Math.sign(dx);
      if (dir && Math.abs(dx) > 3 && dir !== lastDir) { if (lastDir) flips.push(now); lastDir = dir; }
    }
    lastX = e.clientX;
    flips = flips.filter((t) => now - t < 650);
    if (flips.length >= 4 && travel > 260 && now > cooldown) {
      which = 1 - which;
      root.style.setProperty("--cursor", cursors[which]);
      cooldown = now + 900; flips = []; travel = 0;
      if (!reduceMotion) {
        const pop = document.createElement("span");
        pop.className = "cursor-pop";
        pop.style.left = e.clientX + "px"; pop.style.top = e.clientY + "px";
        document.body.appendChild(pop);
        pop.addEventListener("animationend", () => pop.remove());
      }
    }
    if (!flips.length) travel = Math.min(travel, 120);
  });
}

// Cursor trail: a soft silver line that glides after the mouse and tapers away
if (!reduceMotion && finePointer) {
  const c = document.getElementById("trail");
  const ctx = c.getContext("2d");
  const LIFE = 650;
  const head = { x: 0, y: 0 }, target = { x: 0, y: 0 };
  let pts = [], raf = 0, started = false;
  const size = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    c.width = innerWidth * dpr; c.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const draw = (now) => {
    // the head eases toward the mouse, so the line flows instead of jumping between events
    head.x += (target.x - head.x) * 0.32;
    head.y += (target.y - head.y) * 0.32;
    const last = pts[pts.length - 1];
    if (!last || Math.hypot(head.x - last.x, head.y - last.y) > 0.6) pts.push({ x: head.x, y: head.y, t: now });
    pts = pts.filter((p) => now - p.t < LIFE);

    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    for (let i = 1; i < pts.length - 1; i++) {
      const a = pts[i - 1], b = pts[i], n = pts[i + 1];
      const life = 1 - (now - b.t) / LIFE;
      const ease = life * life * (3 - 2 * life); // smoothstep fade
      ctx.strokeStyle = `rgba(120,127,140,${(ease * 0.6).toFixed(3)})`;
      ctx.lineWidth = 0.3 + ease * 1.6;
      ctx.beginPath();
      ctx.moveTo((a.x + b.x) / 2, (a.y + b.y) / 2);
      ctx.quadraticCurveTo(b.x, b.y, (b.x + n.x) / 2, (b.y + n.y) / 2);
      ctx.stroke();
    }
    const settled = Math.hypot(target.x - head.x, target.y - head.y) < 0.3;
    raf = pts.length > 1 || !settled ? requestAnimationFrame(draw) : 0;
    if (!raf) ctx.clearRect(0, 0, innerWidth, innerHeight);
  };
  size();
  addEventListener("resize", size);
  addEventListener("pointermove", (e) => {
    if (current >= 0) return;
    target.x = e.clientX; target.y = e.clientY;
    if (!started) { head.x = target.x; head.y = target.y; started = true; }
    if (!raf) raf = requestAnimationFrame(draw);
  });
}

// Footer wordmark as dots that swirl away from the cursor and glow blue
(() => {
  const wrap = document.querySelector(".giant");
  const c = document.getElementById("dots");
  const ctx = c.getContext("2d");
  const TEXT = "NAZMUL ALAHE";
  let dots = [], W = 0, H = 0, raf = 0, visible = false;
  const mouse = { x: -1e4, y: -1e4 };

  const build = () => {
    W = wrap.clientWidth; H = wrap.clientHeight;
    if (!W || !H) { dots = []; return; } // not laid out yet (hidden or zero-width)
    const dpr = Math.min(devicePixelRatio || 1, 2);
    c.width = W * dpr; c.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const off = document.createElement("canvas");
    off.width = W; off.height = H;
    const o = off.getContext("2d");
    let fs = H * 1.1;
    const font = () => `500 ${fs}px Outfit, system-ui, sans-serif`;
    o.font = font();
    const w = o.measureText(TEXT).width;
    if (w > W) { fs *= W / w; o.font = font(); }
    o.textAlign = "center"; o.textBaseline = "middle"; o.fillStyle = "#000";
    o.fillText(TEXT, W / 2, H / 2 + fs * 0.04);
    const data = o.getImageData(0, 0, W, H).data;
    const gap = W < 600 ? 3 : 4;
    dots = [];
    for (let y = 0; y < H; y += gap)
      for (let x = 0; x < W; x += gap)
        if (data[(y * W + x) * 4 + 3] > 128) dots.push({ hx: x, hy: y, x, y, vx: 0, vy: 0 });
  };

  const frame = () => {
    ctx.clearRect(0, 0, W, H);
    const R = W < 600 ? 50 : 100;
    const moved = [];
    ctx.fillStyle = "rgba(10,10,10,0.9)";
    for (const d of dots) {
      if (!reduceMotion) {
        const dx = d.x - mouse.x, dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < R) {
          const k = 1 - dist / R, nx = dx / dist, ny = dy / dist;
          d.vx += (nx * 2.2 - ny * 1.7) * k;
          d.vy += (ny * 2.2 + nx * 1.7) * k;
        }
        d.vx = (d.vx + (d.hx - d.x) * 0.06) * 0.82;
        d.vy = (d.vy + (d.hy - d.y) * 0.06) * 0.82;
        d.x += d.vx; d.y += d.vy;
      }
      const away = Math.hypot(d.x - d.hx, d.y - d.hy);
      if (away > 1) moved.push([d, Math.min(1, away / 18)]);
      else ctx.fillRect(d.x, d.y, 2.2, 2.2);
    }
    for (const [d, k] of moved) {
      ctx.fillStyle = `rgba(${(10 + 33 * k) | 0},${(10 + 101 * k) | 0},${(10 + 230 * k) | 0},${(0.9 - 0.2 * k).toFixed(2)})`;
      ctx.fillRect(d.x, d.y, 2.2 + k, 2.2 + k);
    }
    raf = visible && !reduceMotion ? requestAnimationFrame(frame) : 0;
  };

  const start = () => { if (!raf) raf = requestAnimationFrame(frame); };
  wrap.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  wrap.addEventListener("pointerleave", () => { mouse.x = mouse.y = -1e4; });
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) start(); }).observe(wrap);
  let t;
  addEventListener("resize", () => { clearTimeout(t); t = setTimeout(() => { build(); start(); }, 150); });
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => { build(); start(); });
})();

// Reveal on scroll (+ start counters when stats appear)
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    en.target.querySelectorAll("[data-count]").forEach(countUp);
    io.unobserve(en.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
