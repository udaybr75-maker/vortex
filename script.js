/**
 * ============================================================================
 * YADHU // DEEP SPACE UNIVERSE — CONTINUOUS FULL-VIEWPORT SCI-FI ENGINE
 * 1. Stationary Ultra-Crisp Holographic Portal Icons (Zero rotation on icons)
 * 2. 3D Cylindrical App Sites Engine: The WHOLE app sites rotate in 3D 360°
 *    along with the Breach Blade sword animation!
 * 3. Continuous Fullscreen Background Canvas (k2 -> k3 -> k1: 720 frames)
 * 4. Interactive Mouse / Touch Drag anywhere on page + Smooth Scroll Sync
 * 5. Critically Damped Spring Smoothing (60-120 FPS lerp)
 * 6. Background Cosmic Starfield & Synthesized Web Audio FX
 * 7. Category Filter, Live Search, & 3D Cylinder / Matrix Grid View Toggle
 * ============================================================================
 */

// ============================================================================
// 1. STATIONARY HOLOGRAPHIC ICONS (CRISP, NON-ROTATING SCI-FI RETICLES)
// ============================================================================
function createStationaryPortalIcon(id, primaryColor, secondaryColor, glyphContent) {
  return `
    <svg viewBox="0 0 64 64" class="scifi-portal-svg" fill="none">
      <defs>
        <linearGradient id="pgrad_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
          <stop offset="35%" stop-color="${primaryColor}" stop-opacity="1"/>
          <stop offset="75%" stop-color="${secondaryColor}" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#00ff9d" stop-opacity="0.6"/>
        </linearGradient>
      </defs>

      <!-- Stationary Futuristic Tech Reticle Ring -->
      <circle cx="32" cy="32" r="26" stroke="rgba(0, 229, 255, 0.16)" stroke-width="1.2" stroke-dasharray="3 4"/>
      <circle cx="32" cy="32" r="22" stroke="url(#pgrad_${id})" stroke-width="2" stroke-dasharray="24 6 10 6"/>
      <circle cx="32" cy="32" r="18" stroke="rgba(138, 92, 255, 0.25)" stroke-width="1"/>

      <!-- Corner Telemetry Crosshairs -->
      <path d="M32 6V9M32 55V58M6 32H9M55 32H58" stroke="var(--neon-cyan)" stroke-width="1.4" opacity="0.65"/>

      <!-- Stationary Core Vector Glyph (Crisp, High-Tech, No Rotation) -->
      <g class="static-core-glyph" filter="drop-shadow(0 0 6px ${primaryColor})">
        ${glyphContent}
      </g>
    </svg>
  `;
}

const AI_TOOLS = [
  {
    id: "crackone",
    name: "CrackOne Inbox",
    category: "privacy",
    badge: "TEMP SMTP RELAY",
    desc: "Encrypted burner mailbox and disposable darknet relay protecting your primary email from tracking.",
    url: "https://inbox.crackone.org/login",
    latency: "0.14ms · Zero Trace",
    color: "#00e5ff",
    icon: createStationaryPortalIcon("crackone", "#00e5ff", "#8a5cff", `
      <rect x="18" y="22" width="28" height="20" rx="3" stroke="#00e5ff" stroke-width="2" fill="rgba(0, 229, 255, 0.12)"/>
      <path d="M19 24L32 33L45 24" stroke="#00e5ff" stroke-width="2" stroke-linecap="round"/>
      <rect x="28" y="32" width="8" height="8" rx="1.5" fill="#05070f" stroke="#00ff9d" stroke-width="1.5"/>
      <circle cx="32" cy="35" r="1.2" fill="#00ff9d"/>
      <path d="M32 36V38" stroke="#00ff9d" stroke-width="1.2"/>
    `)
  },
  {
    id: "33mail",
    name: "33Mail Relay",
    category: "privacy",
    badge: "BURNER ALIAS",
    desc: "Autonomous forwarding alias shield that generates instant disposable addresses on the fly.",
    url: "https://www.33mail.com/",
    latency: "0.22ms · Active Shield",
    color: "#00e5ff",
    icon: createStationaryPortalIcon("33mail", "#00e5ff", "#8a5cff", `
      <path d="M32 16L44 21.5V30.5C44 38 38.8 44.5 32 46.5C25.2 44.5 20 38 20 30.5V21.5L32 16Z" stroke="#00e5ff" stroke-width="2" fill="rgba(0, 229, 255, 0.12)"/>
      <path d="M27 31L31 35L37 27" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="32" cy="22" r="1.8" fill="#00ff9d"/>
    `)
  },
  {
    id: "byteplus",
    name: "BytePlus Playground",
    category: "ai",
    badge: "LLM KERNEL SANDBOX",
    desc: "High-performance enterprise AI model playground for rapid inference, testing, and multimodal workflows.",
    url: "https://ai.byteplus.com/en/playground",
    latency: "0.19ms · Cloud Node",
    color: "#8a5cff",
    icon: createStationaryPortalIcon("byteplus", "#8a5cff", "#00e5ff", `
      <polygon points="32 15 46 23 46 39 32 47 18 39 18 23" stroke="#8a5cff" stroke-width="2" fill="rgba(138, 92, 255, 0.12)"/>
      <line x1="32" y1="15" x2="32" y2="47" stroke="#00e5ff" stroke-width="1.5"/>
      <line x1="18" y1="23" x2="46" y2="39" stroke="#00e5ff" stroke-width="1.5"/>
      <line x1="46" y1="23" x2="18" y2="39" stroke="#00e5ff" stroke-width="1.5"/>
      <circle cx="32" cy="31" r="3.5" fill="#00e5ff" stroke="#ffffff" stroke-width="1.2"/>
    `)
  },
  {
    id: "simplelogin",
    name: "SimpleLogin Cloak",
    category: "privacy",
    badge: "IDENTITY GUARD",
    desc: "Open-source email aliasing suite preventing identity correlation and phishing attacks.",
    url: "https://simplelogin.io/",
    latency: "0.28ms · Open PGP",
    color: "#00ff9d",
    icon: createStationaryPortalIcon("simplelogin", "#00ff9d", "#00e5ff", `
      <path d="M17 32C17 32 22.5 21 32 21C41.5 21 47 32 47 32C47 32 41.5 43 32 43C22.5 43 17 32 17 32Z" stroke="#00ff9d" stroke-width="2" fill="rgba(0, 255, 157, 0.12)"/>
      <circle cx="32" cy="32" r="6" stroke="#00e5ff" stroke-width="2"/>
      <circle cx="32" cy="32" r="2.5" fill="#ffffff"/>
      <line x1="32" y1="21" x2="32" y2="26" stroke="#00ff9d" stroke-width="1.5"/>
      <line x1="32" y1="38" x2="32" y2="43" stroke="#00ff9d" stroke-width="1.5"/>
    `)
  },
  {
    id: "videocutter",
    name: "Video Logo Eraser",
    category: "media",
    badge: "OPTICAL SCRUBBER",
    desc: "Browser-based intelligent optical scrubber to seamlessly remove watermarks, logos, and artifacts from video.",
    url: "https://online-video-cutter.com/remove-logo",
    latency: "0.35ms · GPU Render",
    color: "#ffb800",
    icon: createStationaryPortalIcon("videocutter", "#ffb800", "#ff3366", `
      <rect x="18" y="20" width="28" height="24" rx="3" stroke="#ffb800" stroke-width="2" fill="rgba(255, 184, 0, 0.12)"/>
      <polygon points="28 26 39 32 28 38" fill="#ffb800" stroke="#ffffff" stroke-width="1"/>
      <line x1="21" y1="32" x2="43" y2="32" stroke="#00e5ff" stroke-width="1.5" stroke-dasharray="3 2"/>
      <path d="M38 24L42 28M42 24L38 28" stroke="#ff3366" stroke-width="1.8" stroke-linecap="round"/>
    `)
  },
  {
    id: "deepseek",
    name: "DeepSeek Perchance",
    category: "ai",
    badge: "REASONING ENGINE",
    desc: "Unrestricted deep reasoning model for intricate code synthesis, mathematical analysis, and prompt generation.",
    url: "https://perchance.org/deepseek",
    latency: "0.18ms · Zero Filter",
    color: "#00e5ff",
    icon: createStationaryPortalIcon("deepseek", "#00e5ff", "#8a5cff", `
      <circle cx="32" cy="32" r="14" stroke="#00e5ff" stroke-width="1.8" fill="rgba(0, 229, 255, 0.08)"/>
      <circle cx="32" cy="32" r="6" stroke="#8a5cff" stroke-width="2" fill="rgba(138, 92, 255, 0.2)"/>
      <circle cx="32" cy="32" r="2.5" fill="#ffffff"/>
      <line x1="32" y1="14" x2="32" y2="50" stroke="#00e5ff" stroke-width="1.2" stroke-dasharray="2 3"/>
      <line x1="14" y1="32" x2="50" y2="32" stroke="#00e5ff" stroke-width="1.2" stroke-dasharray="2 3"/>
    `)
  },
  {
    id: "raphael",
    name: "Raphael AI Forge",
    category: "media",
    badge: "IMAGE SYNTHESIZER",
    desc: "Cutting-edge neural image generation workspace tailored for artists, designers, and creative directors.",
    url: "https://raphael.app/",
    latency: "0.25ms · 4K Neural",
    color: "#8a5cff",
    icon: createStationaryPortalIcon("raphael", "#8a5cff", "#ff3366", `
      <circle cx="32" cy="32" r="9" stroke="#8a5cff" stroke-width="2" fill="rgba(138, 92, 255, 0.15)"/>
      <line x1="32" y1="16" x2="32" y2="22" stroke="#00e5ff" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="32" y1="42" x2="32" y2="48" stroke="#00e5ff" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="16" y1="32" x2="22" y2="32" stroke="#00e5ff" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="42" y1="32" x2="48" y2="32" stroke="#00e5ff" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="32" cy="32" r="3.5" fill="#ff3366" stroke="#ffffff" stroke-width="1.2"/>
    `)
  },
  {
    id: "proton",
    name: "Proton Mail Vault",
    category: "privacy",
    badge: "SWISS PGP VAULT",
    desc: "Swiss zero-access encrypted email, calendar, and drive ecosystem with end-to-end cryptographic defense.",
    url: "https://proton.me/mail/pricing?ref=mailheropricing",
    latency: "0.12ms · Quantum Safe",
    color: "#00e5ff",
    icon: createStationaryPortalIcon("proton", "#00e5ff", "#8a5cff", `
      <rect x="19" y="25" width="26" height="22" rx="4" stroke="#00e5ff" stroke-width="2" fill="rgba(0, 229, 255, 0.12)"/>
      <path d="M25 25V20C25 16.1 28.1 13 32 13C35.9 13 39 16.1 39 20V25" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="32" cy="34" r="2.8" fill="#00e5ff"/>
      <line x1="32" y1="36.8" x2="32" y2="41" stroke="#00e5ff" stroke-width="2.2" stroke-linecap="round"/>
    `)
  },
  {
    id: "pollinations",
    name: "Pollinations AI",
    category: "media",
    badge: "OPEN GENERATIVE",
    desc: "Open, free multimodal generation engine producing real-time text, images, and audio via simple HTTP API endpoints.",
    url: "https://pollinations.ai/",
    latency: "0.20ms · Free Tier",
    color: "#00e5ff",
    icon: createStationaryPortalIcon("pollinations", "#00e5ff", "#8a5cff", `
      <circle cx="32" cy="32" r="6" stroke="#8a5cff" stroke-width="2" fill="rgba(138, 92, 255, 0.2)"/>
      <circle cx="32" cy="32" r="2.5" fill="#ffffff"/>
      <circle cx="21" cy="23" r="2.5" fill="#00e5ff"/>
      <circle cx="43" cy="23" r="2.5" fill="#8a5cff"/>
      <circle cx="32" cy="45" r="2.5" fill="#00ff9d"/>
      <line x1="21" y1="23" x2="32" y2="32" stroke="rgba(0, 229, 255, 0.5)" stroke-width="1.2"/>
      <line x1="43" y1="23" x2="32" y2="32" stroke="rgba(138, 92, 255, 0.5)" stroke-width="1.2"/>
      <line x1="32" y1="45" x2="32" y2="32" stroke="rgba(0, 255, 157, 0.5)" stroke-width="1.2"/>
    `)
  },
  {
    id: "freeaimodels",
    name: "Free AI Models Chat",
    category: "ai",
    badge: "MULTI-MODEL HUB",
    desc: "Direct browser chat access to an array of premier open-weights and proprietary AI intelligence models.",
    url: "https://freeaimodels.online/chat/x1mynx8mv3t3xza",
    latency: "0.27ms · Direct Access",
    color: "#00e5ff",
    icon: createStationaryPortalIcon("freeaimodels", "#00e5ff", "#8a5cff", `
      <polygon points="32 18 44 25 44 39 32 46 20 39 20 25" stroke="#00e5ff" stroke-width="2" fill="rgba(0, 229, 255, 0.1)"/>
      <circle cx="32" cy="25" r="2.8" fill="#00e5ff"/>
      <circle cx="26" cy="36" r="2.8" fill="#8a5cff"/>
      <circle cx="38" cy="36" r="2.8" fill="#00ff9d"/>
      <line x1="32" y1="25" x2="26" y2="36" stroke="#ffffff" stroke-width="1.5"/>
      <line x1="32" y1="25" x2="38" y2="36" stroke="#ffffff" stroke-width="1.5"/>
      <line x1="26" y1="36" x2="38" y2="36" stroke="#ffffff" stroke-width="1.5"/>
    `)
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs Studio",
    category: "ai",
    badge: "VOICE SYNTHESIS",
    desc: "Next-generation synthetic voice cloning, multilingual text-to-speech, and emotional acoustic synthesis.",
    url: "https://elevenlabs.io/app/home",
    latency: "0.16ms · Ultra HD Voice",
    color: "#8a5cff",
    icon: createStationaryPortalIcon("elevenlabs", "#8a5cff", "#00e5ff", `
      <rect x="28" y="17" width="8" height="18" rx="4" stroke="#8a5cff" stroke-width="2" fill="rgba(138, 92, 255, 0.15)"/>
      <path d="M21 28C21 34 25.9 38 32 38C38.1 38 43 34 43 28" stroke="#00e5ff" stroke-width="2" stroke-linecap="round"/>
      <line x1="32" y1="38" x2="32" y2="45" stroke="#00e5ff" stroke-width="2.2"/>
      <line x1="26" y1="45" x2="38" y2="45" stroke="#00e5ff" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M16 25C14.5 27 14.5 29 16 31" stroke="#8a5cff" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M48 25C49.5 27 49.5 29 48 31" stroke="#8a5cff" stroke-width="1.8" stroke-linecap="round"/>
    `)
  }
];

// ============================================================================
// 2. CONTINUOUS FULL-VIEWPORT MASTER CANVAS ENGINE (k2 -> k3 -> k1: 720 Frames)
// ============================================================================
class MasterCanvasEngine {
  constructor() {
    this.canvas = document.getElementById('master-bg-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d', { alpha: false });
    this.totalFrames = 720; // 240 (k2) + 240 (k3) + 240 (k1)

    this.frames = new Array(this.totalFrames);
    this.loadedStatus = new Array(this.totalFrames).fill(false);

    this.currentFrame = 0;
    this.targetFrame = 0;
    this.lastDrawnIndex = -1;
    this.activeSeq = 0;

    // HUD Elements
    this.dockReadout = document.getElementById('dock-frame-readout');
    this.seqButtons = [
      document.getElementById('btn-seq-0'),
      document.getElementById('btn-seq-1'),
      document.getElementById('btn-seq-2')
    ];

    this.init();
  }

  getFramePath(index) {
    if (index < 240) {
      const num = String(index + 1).padStart(3, '0');
      return `assets/k2/ezgif-frame-${num}.webp`;
    } else if (index < 480) {
      const num = String((index - 240) + 1).padStart(3, '0');
      return `assets/k3/ezgif-frame-${num}.webp`;
    } else {
      const num = String((index - 480) + 1).padStart(3, '0');
      return `assets/k1/ezgif-frame-${num}.webp`;
    }
  }

  init() {
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    // Priority load first 12 frames of each section
    [0, 240, 480].forEach(startIdx => {
      for (let i = 0; i < 12; i++) {
        this.loadFrame(startIdx + i);
      }
    });

    // Background preload
    this.preloadAllFrames();

    // Pointer Drag to scrub frames seamlessly across all sections
    this.initGlobalDragScrub();

    // Sequence jump buttons
    this.seqButtons.forEach((btn, idx) => {
      if (!btn) return;
      btn.addEventListener('click', () => {
        const targetOffsets = [0, 240, 480];
        const targetScroll = (targetOffsets[idx] / (this.totalFrames - 1)) * (document.documentElement.scrollHeight - window.innerHeight);
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        sfx.playTransmission();
      });
    });
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    if (this.lastDrawnIndex >= 0) {
      const last = this.lastDrawnIndex;
      this.lastDrawnIndex = -1;
      this.renderFrame(last);
    }
  }

  loadFrame(index) {
    if (this.frames[index]) return;
    const img = new Image();
    img.src = this.getFramePath(index);
    img.onload = () => {
      this.loadedStatus[index] = true;
      if (Math.round(this.currentFrame) === index) {
        this.renderFrame(index);
      }
    };
    this.frames[index] = img;
  }

  preloadAllFrames() {
    let curr = 0;
    const batchSize = 6;
    const loadNextBatch = () => {
      for (let i = 0; i < batchSize && curr < this.totalFrames; i++, curr++) {
        this.loadFrame(curr);
      }
      if (curr < this.totalFrames) {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(loadNextBatch, { timeout: 120 });
        } else {
          setTimeout(loadNextBatch, 16);
        }
      }
    };
    loadNextBatch();
  }

  initGlobalDragScrub() {
    let isDragging = false;
    let startY = 0;
    let startScroll = 0;

    window.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button, a, input, textarea, .scifi-3d-viewport, .carousel-3d-card')) return;
      isDragging = true;
      startY = e.clientY;
      startScroll = window.scrollY;
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const newScroll = Math.min(Math.max(startScroll - deltaY * 2.2, 0), totalScroll);
      window.scrollTo(0, newScroll);
    });

    const endDrag = () => { isDragging = false; };
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
  }

  getNearestLoadedIndex(targetIdx) {
    if (this.loadedStatus[targetIdx]) return targetIdx;
    for (let offset = 1; offset < 25; offset++) {
      if (targetIdx - offset >= 0 && this.loadedStatus[targetIdx - offset]) {
        return targetIdx - offset;
      }
      if (targetIdx + offset < this.totalFrames && this.loadedStatus[targetIdx + offset]) {
        return targetIdx + offset;
      }
    }
    if (targetIdx >= 480) return 480;
    if (targetIdx >= 240) return 240;
    return 0;
  }

  renderFrame(frameIndex) {
    if (frameIndex === this.lastDrawnIndex) return;
    const drawIndex = this.getNearestLoadedIndex(frameIndex);
    const img = this.frames[drawIndex];

    if (img && img.complete && img.naturalWidth > 0) {
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.lastDrawnIndex = frameIndex;
    }
  }

  update() {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll > 0) {
      const scrollPct = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
      this.targetFrame = scrollPct * (this.totalFrames - 1);
    }

    // Critically damped spring lerp (silky smooth Apple physics)
    this.currentFrame += (this.targetFrame - this.currentFrame) * 0.16;

    const frameInt = Math.min(Math.max(Math.round(this.currentFrame), 0), this.totalFrames - 1);
    this.renderFrame(frameInt);

    // Sync 3D DNA Helix Engine with the Breach Blade sword rotation!
    if (window.dnaHelixEngine) {
      window.dnaHelixEngine.syncWithSwordAnimation(this.currentFrame);
      window.dnaHelixEngine.update();
    }

    // Segment & HUD Telemetry
    let newSeq = 0;
    let localFrame = frameInt + 1;

    if (frameInt >= 480) {
      newSeq = 2;
      localFrame = (frameInt - 480) + 1;
    } else if (frameInt >= 240) {
      newSeq = 1;
      localFrame = (frameInt - 240) + 1;
    }

    if (this.dockReadout) {
      this.dockReadout.textContent = `FRAME ${String(localFrame).padStart(3, '0')} / 240`;
    }

    if (newSeq !== this.activeSeq) {
      this.activeSeq = newSeq;
      this.seqButtons.forEach((btn, idx) => {
        if (!btn) return;
        if (idx === newSeq) {
          btn.classList.add('is-active');
        } else {
          btn.classList.remove('is-active');
        }
      });
    }
  }
}

// ============================================================================
// 3. BACKGROUND COSMIC STARFIELD ENGINE
// ============================================================================
class CosmosEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.numStars = 160;
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;

    this.resize();
    this.initStars();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 35;
      this.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 35;
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initStars() {
    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        depth: Math.random() * 0.8 + 0.2
      });
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    for (let star of this.stars) {
      star.alpha += star.twinkleSpeed * star.twinkleDir;
      if (star.alpha > 0.95) {
        star.alpha = 0.95;
        star.twinkleDir = -1;
      } else if (star.alpha < 0.2) {
        star.alpha = 0.2;
        star.twinkleDir = 1;
      }

      const drawX = (star.x + this.mouseX * star.depth + this.canvas.width) % this.canvas.width;
      const drawY = (star.y + this.mouseY * star.depth + this.canvas.height) % this.canvas.height;

      this.ctx.beginPath();
      this.ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(180, 220, 255, ${star.alpha})`;
      this.ctx.fill();
    }
  }
}

// ============================================================================
// 4. SYNTHESIZED SCI-FI WEB AUDIO SOUND ENGINE
// ============================================================================
class SciFiAudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBlip(freq = 880, duration = 0.06) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.4, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  playTransmission() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [587, 740, 880, 1174].forEach((f, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + i * 0.05);

        gain.gain.setValueAtTime(0.05, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.1);
      });
    } catch (e) {}
  }
}

const sfx = new SciFiAudioEngine();

// ============================================================================
// 5. HYPER-SMOOTH 3D DNA HELIX ENGINE (360° SWORD SYNC & DOUBLE HELIX RIBBONS)
// ============================================================================
class Scifi3DDNAHelixEngine {
  constructor(items) {
    this.viewportEl = document.getElementById('dna-helix-viewport');
    this.canvas = document.getElementById('dna-helix-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.cardsContainer = document.getElementById('dna-cards-container');

    this.angleReadout = document.getElementById('orbit-angle-val');
    this.nodeReadout = document.getElementById('orbit-node-name');
    this.btnPrev = document.getElementById('btn-orbit-prev');
    this.btnNext = document.getElementById('btn-orbit-next');
    this.btnSpin = document.getElementById('btn-orbit-spin');
    this.btnModeHelix = document.getElementById('btn-mode-helix');
    this.btnModeGrid = document.getElementById('btn-mode-grid');
    this.gridContainer = document.getElementById('tools-grid-container');
    this.swordWrapper = document.getElementById('central-sword-wrapper');

    this.items = items;
    this.count = items.length;
    this.viewMode = 'helix'; // 'helix' or 'grid'

    this.radiusX = 410; // Horizontal orbit radius around the sword
    this.radiusZ = 310; // 3D depth orbit radius around the sword
    this.totalTurns = 2.0; // 2 complete helical loops top to bottom (matches DNA reference)
    this.fov = 800; // Focal length for perspective projection

    this.rotationAngle = 0; // Current rendered angle (radians)
    this.targetAngle = 0;   // Target angle (radians)
    this.autoSpin = true;   // Subtle ambient 360° spin

    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.startAngle = 0;

    this.init();
  }

  init() {
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
    this.renderCards();
    this.bindEvents();
  }

  resizeCanvas() {
    if (!this.viewportEl) return;
    this.radiusX = window.innerWidth < 640 ? 190 : (window.innerWidth < 960 ? 300 : 410);
    this.radiusZ = window.innerWidth < 640 ? 140 : (window.innerWidth < 960 ? 220 : 310);
    this.fov = window.innerWidth < 640 ? 600 : 800;
  }

  setItems(newItems) {
    this.items = newItems;
    this.count = newItems.length;
    this.renderCards();
  }

  renderCards() {
    if (!this.cardsContainer) return;
    if (this.items.length === 0) {
      this.cardsContainer.innerHTML = `
        <div style="color: var(--text-muted); font-family: var(--font-mono); text-align: center; padding-top: 100px;">
          [ NO CORRESPONDING SITES FOUND IN SCAN ]
        </div>
      `;
      return;
    }

    this.cardsContainer.innerHTML = this.items.map((tool, idx) => {
      return `
        <article class="helix-app-card" id="helix-card-${idx}" data-idx="${idx}">
          <div class="helix-icon-box" aria-hidden="true">
            ${tool.icon}
          </div>
          <div class="helix-info-wrap">
            <h3 class="helix-title">${tool.name}</h3>
            <span class="helix-badge">${tool.badge}</span>
          </div>
          <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="btn-open-helix" onclick="event.stopPropagation(); sfx.playBlip(920)">
            <span>OPEN</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </article>
      `;
    }).join('');

    // Clicking card brings it to front
    this.cardsContainer.querySelectorAll('.helix-app-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-open-helix')) return;
        const idx = parseInt(card.dataset.idx, 10);
        this.rotateToIndex(idx);
      });
    });
  }

  rotateToIndex(idx) {
    sfx.playBlip(720);
    const t = this.count > 1 ? idx / (this.count - 1) : 0;
    const baseTheta = t * this.totalTurns * Math.PI * 2;
    // Facing straight forward (+Z) occurs at theta = Math.PI / 2
    this.targetAngle = Math.PI / 2 - baseTheta;
    this.autoSpin = false;
    if (this.btnSpin) this.btnSpin.textContent = 'AUTO-SPIN: OFF';
  }

  bindEvents() {
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => {
        sfx.playBlip(680);
        this.targetAngle += (Math.PI * 2) / Math.max(1, this.count);
        this.autoSpin = false;
        if (this.btnSpin) this.btnSpin.textContent = 'AUTO-SPIN: OFF';
      });
    }
    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => {
        sfx.playBlip(740);
        this.targetAngle -= (Math.PI * 2) / Math.max(1, this.count);
        this.autoSpin = false;
        if (this.btnSpin) this.btnSpin.textContent = 'AUTO-SPIN: OFF';
      });
    }
    if (this.btnSpin) {
      this.btnSpin.addEventListener('click', () => {
        sfx.playBlip(780);
        this.autoSpin = !this.autoSpin;
        this.btnSpin.textContent = `AUTO-SPIN: ${this.autoSpin ? 'ON' : 'OFF'}`;
      });
    }

    if (this.btnModeHelix) {
      this.btnModeHelix.addEventListener('click', () => {
        sfx.playBlip(800);
        this.setViewMode('helix');
      });
    }
    if (this.btnModeGrid) {
      this.btnModeGrid.addEventListener('click', () => {
        sfx.playBlip(820);
        this.setViewMode('grid');
      });
    }

    // Pointer Drag to rotate around the sword in 360°
    if (this.viewportEl) {
      this.viewportEl.addEventListener('pointerdown', (e) => {
        if (e.target.closest('a, button')) return;
        this.isDragging = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startAngle = this.targetAngle;
        try { this.viewportEl.setPointerCapture(e.pointerId); } catch(err){}
      });

      this.viewportEl.addEventListener('pointermove', (e) => {
        if (!this.isDragging) return;
        const dx = e.clientX - this.startX;
        const dy = e.clientY - this.startY;
        // Dragging horizontally or vertically rotates the DNA spiral around the sword
        this.targetAngle = this.startAngle + (dx * 0.008) - (dy * 0.005);
        this.autoSpin = false;
        if (this.btnSpin) this.btnSpin.textContent = 'AUTO-SPIN: OFF';
      });

      const endDrag = (e) => {
        if (this.isDragging) {
          this.isDragging = false;
          try { this.viewportEl.releasePointerCapture(e.pointerId); } catch(err){}
        }
      };
      this.viewportEl.addEventListener('pointerup', endDrag);
      this.viewportEl.addEventListener('pointercancel', endDrag);

      // Wheel scrub
      this.viewportEl.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > 2) {
          this.targetAngle -= e.deltaY * 0.004;
          this.autoSpin = false;
          if (this.btnSpin) this.btnSpin.textContent = 'AUTO-SPIN: OFF';
        }
      }, { passive: true });
    }
  }

  setViewMode(mode) {
    this.viewMode = mode;
    if (this.btnModeHelix) this.btnModeHelix.classList.toggle('active', mode === 'helix');
    if (this.btnModeGrid) this.btnModeGrid.classList.toggle('active', mode === 'grid');

    if (mode === 'grid') {
      if (this.viewportEl) this.viewportEl.classList.add('is-hidden');
      if (this.gridContainer) this.gridContainer.classList.remove('is-hidden');
    } else {
      if (this.viewportEl) this.viewportEl.classList.remove('is-hidden');
      if (this.gridContainer) this.gridContainer.classList.add('is-hidden');
      this.resizeCanvas();
    }
  }

  syncWithSwordAnimation(currentFrame) {
    // When the user scrolls through Sequence 2 (the Breach Blade sword: frames 240..480),
    // the whole 11 app sites rotate 360° vertically around the sword like a DNA helix snake!
    if (!this.isDragging && this.viewMode === 'helix') {
      if (currentFrame >= 240 && currentFrame <= 480) {
        const swordProgress = (currentFrame - 240) / 240;
        this.targetAngle = -swordProgress * Math.PI * 2 * 2.0;
      }
    }
  }

  project(x, y, z, cx, cy) {
    const scale = this.fov / (this.fov + z);
    const px = cx + x * scale;
    const py = cy + y * scale;
    return { px, py, scale, z };
  }

  update() {
    if (!this.viewportEl || this.viewMode === 'grid') return;

    if (this.autoSpin && !this.isDragging) {
      this.targetAngle += 0.007; // Smooth ambient 360° snake rotation around the sword
    }

    // Critically damped spring lerp for silky smoothness
    this.rotationAngle += (this.targetAngle - this.rotationAngle) * 0.12;

    const w = this.viewportEl.clientWidth;
    const h = this.viewportEl.clientHeight;
    if (w === 0 || h === 0) return;

    const cx = w / 2;
    const cy = h / 2;
    const verticalSpan = h * 0.78;
    const topY = -verticalSpan / 2;

    // 1. PROJECT & POSITION THE 11 APP CARDS ALONG THE 3D ORBIT AROUND THE SWORD (Z-DEPTH SORTED)
    let bestFrontIdx = 0;
    let maxZ = -9999;

    this.items.forEach((_, idx) => {
      const card = document.getElementById(`helix-card-${idx}`);
      if (!card) return;

      const t = this.count > 1 ? idx / (this.count - 1) : 0;
      const y = topY + t * verticalSpan;
      const theta = t * this.totalTurns * Math.PI * 2 + this.rotationAngle;

      const x = this.radiusX * Math.cos(theta);
      const z = this.radiusZ * Math.sin(theta);
      const p = this.project(x, y, z, cx, cy);

      if (z > maxZ) {
        maxZ = z;
        bestFrontIdx = idx;
      }

      card.style.transform = `translate3d(${p.px}px, ${p.py}px, 0) scale(${p.scale.toFixed(3)})`;
      card.style.zIndex = Math.round(z + 500);

      if (z > 20) {
        card.classList.add('is-front-hero');
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
      } else {
        card.classList.remove('is-front-hero');
        if (z < -20) {
          card.style.opacity = '0.35';
          card.style.pointerEvents = 'none';
        } else {
          card.style.opacity = '0.75';
          card.style.pointerEvents = 'auto';
        }
      }
    });

    // 3D Parallax tilt on the central elemental sword
    if (this.swordWrapper) {
      const tiltY = Math.sin(this.rotationAngle) * 6;
      const tiltX = Math.cos(this.rotationAngle) * 2;
      this.swordWrapper.style.transform = `translate(-50%, -50%) rotateY(${tiltY.toFixed(2)}deg) rotateX(${tiltX.toFixed(2)}deg)`;
    }

    // 4. TELEMETRY READOUT
    const deg = Math.round((((this.rotationAngle * 180 / Math.PI) % 360) + 360) % 360);
    if (this.angleReadout) {
      this.angleReadout.textContent = `${deg.toString().padStart(3, '0')}°`;
    }
    if (this.nodeReadout && this.items[bestFrontIdx]) {
      this.nodeReadout.textContent = this.items[bestFrontIdx].name;
    }
  }
}

// ============================================================================
// 6. AI TOOLS GRID RENDERER & FILTERS
// ============================================================================
function renderAITools(items) {
  const container = document.getElementById('tools-grid-container');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: var(--text-muted); font-family: var(--font-mono);">
        [ SCAN COMPLETE: NO CORRESPONDING SECTOR NODES FOUND ]
      </div>
    `;
    return;
  }

  container.innerHTML = items
    .map(tool => `
      <article class="tool-card glass-panel" data-category="${tool.category}" id="tool-${tool.id}">
        <div class="tool-header">
          <div class="tool-icon-wrapper" aria-hidden="true">
            ${tool.icon}
          </div>
          <span class="tool-badge">${tool.badge}</span>
        </div>

        <div class="tool-body">
          <h3 class="tool-name">${tool.name}</h3>
          <p class="tool-desc">${tool.desc}</p>
        </div>

        <div class="tool-footer">
          <div class="tool-latency">
            <span class="hud-dot-live"></span>
            <span>${tool.latency}</span>
          </div>

          <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="btn-open-tool" onclick="sfx.playBlip(920)">
            <span>OPEN</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </article>
    `)
    .join('');
}

function initToolsControls() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('tools-search-input');
  let currentFilter = 'all';
  let searchQuery = '';

  function applyFilters() {
    const filtered = AI_TOOLS.filter(tool => {
      const matchesCategory = currentFilter === 'all' || tool.category === currentFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.desc.toLowerCase().includes(q) ||
        tool.badge.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });

    renderAITools(filtered);
    if (window.dnaHelixEngine) {
      window.dnaHelixEngine.setItems(filtered);
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      sfx.playBlip(750);
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }
}

// ============================================================================
// 7. PRICING TIER TOGGLE & TIER SELECTION
// ============================================================================
function initPricingToggle() {
  const toggle = document.getElementById('billing-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    sfx.playBlip(680);
    const isAnnual = toggle.classList.toggle('is-annual');
    toggle.setAttribute('aria-checked', isAnnual);

    document.querySelectorAll('.tier-price.price-val').forEach(el => {
      el.textContent = isAnnual ? el.dataset.annual : el.dataset.monthly;
    });
  });
}

function handleTierSelect(tierName) {
  sfx.playTransmission();
  const contactMsg = document.getElementById('contact-message');
  const contactSection = document.getElementById('contact');
  if (contactMsg && contactSection) {
    contactMsg.value = `[AUTHENTICATION REQUEST]\nSelected Clearance Tier: ${tierName}\nPlease transmit authorization credentials.`;
    contactSection.scrollIntoView({ behavior: 'smooth' });
    contactMsg.focus();
  }
}

// ============================================================================
// 8. CONTACT FORM SUBMISSION
// ============================================================================
function handleContactSubmit(event) {
  event.preventDefault();
  sfx.playTransmission();

  const btn = document.getElementById('btn-submit-comm');
  const statusEl = document.getElementById('contact-status');
  const name = document.getElementById('contact-name').value;

  if (btn) btn.disabled = true;

  if (statusEl) {
    statusEl.style.display = 'block';
    statusEl.textContent = 'ENCRYPTING PACKET & ROUTING TO YADHU...';
  }

  setTimeout(() => {
    if (statusEl) {
      statusEl.textContent = `TRANSMISSION SUCCESSFUL // Packet confirmed received by Yadhu. Thank you, ${name}!`;
    }
    if (btn) btn.disabled = false;
    document.getElementById('contact-form').reset();
  }, 1000);
}

// ============================================================================
// 9. MASTER DOM INITIALIZATION & TICK LOOP
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const cosmos = new CosmosEngine('cosmos-canvas');
  window.masterEngine = new MasterCanvasEngine();

  // Initialize 3D DNA Helix Engine (360° Snake Rotation Surrounding The Central Sword)
  window.dnaHelixEngine = new Scifi3DDNAHelixEngine(AI_TOOLS);

  // Initialize Matrix Grid View as backup
  renderAITools(AI_TOOLS);
  initToolsControls();
  initPricingToggle();

  // Top scroll warp progress bar
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  function updateTopProgressBar() {
    if (!scrollProgressBar) return;
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll > 0) {
      const pct = (window.scrollY / totalScroll) * 100;
      scrollProgressBar.style.width = `${pct}%`;
    }
  }

  // Audio Toggle
  const audioBtn = document.getElementById('audio-toggle-btn');
  const soundLabel = document.getElementById('sound-label');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      sfx.init();
      sfx.enabled = !sfx.enabled;
      if (sfx.enabled) {
        audioBtn.classList.add('sound-active');
        if (soundLabel) soundLabel.textContent = 'AUDIO: ON';
        sfx.playTransmission();
      } else {
        audioBtn.classList.remove('sound-active');
        if (soundLabel) soundLabel.textContent = 'AUDIO: OFF';
      }
    });
  }

  // Navigation Dock Highlight
  const navSections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.dock-link');
  function updateActiveNav() {
    const scrollY = window.scrollY;
    navSections.forEach(sec => {
      const top = sec.offsetTop - 180;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Master Animation Tick Loop (60-120 FPS)
  function tick() {
    cosmos.draw();
    if (window.masterEngine) window.masterEngine.update();
    updateTopProgressBar();
    updateActiveNav();
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
});
