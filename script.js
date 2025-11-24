// Language data
const translations = {
  en: {
    menu: {
      newGame: "New Game",
      leaderboard: "Leaderboard",
      options: "Options",
      credits: "Credits",
      quit: "Quit Game",
    },
    options: {
      audio: "Audio",
      language: "Language",
      visual: "Visual",
      musicVolume: "Music Volume",
      soundVolume: "Sound Volume",
      muteTypingSounds: "Mute Typing Sounds",
      typingLanguage: "Typing Language",
      uiLanguage: "UI Language",
      theme: "Theme",
      screenShake: "Screen Shake",
      flashEffects: "Flash Effects",
      dark: "Dark",
      light: "Light",
      off: "Off",
      on: "On",
    },
    gameSetup: {
      selectWeapon: "Select Main Weapon",
      repeater: "Repeater",
      heatray: "Heat Ray",
      repeaterDesc:
        "A standard kinetic-type firearm with a high fire rate and stable control.",
      heatrayDesc:
        "An experimental energy weapon that incinerates words with focused heat.",
      startEndless: "Start Endless",
    },
    game: {
      endlessMode: "ENDLESS MODE",
      getReady: "GET READY",
      highScore: "HIGH SCORE",
      gameOver: "GAME OVER",
      score: "SCORE",
      wpm: "WPM",
      accuracy: "Accuracy",
      highestStreak: "Highest Streak",
      timePlayed: "Time Played",
      returnToMenu: "RETURN TO MENU",
    },
  },
  de: {
    menu: {
      newGame: "Neues Spiel",
      leaderboard: "Bestenliste",
      options: "Optionen",
      credits: "Credits",
      quit: "Spiel Beenden",
    },
    options: {
      audio: "Audio",
      language: "Sprache",
      visual: "Visuell",
      musicVolume: "Musik Lautstärke",
      soundVolume: "Sound Lautstärke",
      muteTypingSounds: "Tippgeräusche Stummschalten",
      typingLanguage: "Tipp Sprache",
      uiLanguage: "UI Sprache",
      theme: "Thema",
      screenShake: "Bildschirmerschütterung",
      flashEffects: "Blitzeffekte",
      dark: "Dunkel",
      light: "Hell",
      off: "Aus",
      on: "An",
    },
    gameSetup: {
      selectWeapon: "Hauptwaffe Auswählen",
      repeater: "Repeater",
      heatray: "Hitzestrahl",
      repeaterDesc:
        "Eine standardmäßige kinetische Feuerwaffe mit hoher Feuerrate und stabiler Kontrolle.",
      heatrayDesc:
        "Eine experimentelle Energiewaffe, die Wörter mit fokussierter Hitze verbrennt.",
      startEndless: "Endlos Starten",
    },
    game: {
      endlessMode: "ENDLOS MODUS",
      getReady: "BEREIT MACHEN",
      highScore: "HOCHPUNKTEZAHL",
      gameOver: "SPIEL VORBEI",
      score: "PUNKTEZAHL",
      wpm: "WPM",
      accuracy: "Genauigkeit",
      highestStreak: "Höchste Serie",
      timePlayed: "Spielzeit",
      returnToMenu: "ZURÜCK ZUM MENÜ",
    },
  },
  id: {
    menu: {
      newGame: "Permainan Baru",
      leaderboard: "Papan Peringkat",
      options: "Opsi",
      credits: "Kredit",
      quit: "Keluar Permainan",
    },
    options: {
      audio: "Audio",
      language: "Bahasa",
      musicVolume: "Volume Musik",
      soundVolume: "Volume Suara",
      muteTypingSounds: "Bisukan Suara Mengetik",
      typingLanguage: "Bahasa Mengetik",
      uiLanguage: "Bahasa UI",
      off: "Mati",
      on: "Nyala",
    },
    gameSetup: {
      selectWeapon: "Pilih Senjata Utama",
      repeater: "Repeater",
      heatray: "Heat Ray",
      repeaterDesc:
        "Senjata kinetik standar dengan laju tembak tinggi dan kontrol stabil.",
      heatrayDesc:
        "Senjata energi eksperimental yang membakar kata-kata dengan panas terfokus.",
      startEndless: "Mulai Endless",
    },
    game: {
      endlessMode: "MODE ENDLESS",
      getReady: "SIAPKAN DIRI",
      highScore: "SKOR TERTINGGI",
      gameOver: "PERMAINAN BERAKHIR",
      score: "SKOR",
      wpm: "KPM", // Kata Per Menit
      accuracy: "Akurasi",
      highestStreak: "Streak Tertinggi",
      timePlayed: "Waktu Bermain",
      returnToMenu: "KEMBALI KE MENU",
    },
  },
  es: {
    menu: {
      newGame: "Nuevo Juego",
      leaderboard: "Tabla de Clasificación",
      options: "Opciones",
      credits: "Créditos",
      quit: "Salir del Juego",
    },
    options: {
      audio: "Audio",
      language: "Idioma",
      musicVolume: "Volumen de Música",
      soundVolume: "Volumen de Sonido",
      muteTypingSounds: "Silenciar Sonidos de Escritura",
      typingLanguage: "Idioma de Escritura",
      uiLanguage: "Idioma de UI",
      off: "Apagado",
      on: "Encendido",
    },
    gameSetup: {
      selectWeapon: "Seleccionar Arma Principal",
      repeater: "Repetidor",
      heatray: "Rayo de Calor",
      repeaterDesc:
        "Un arma de fuego cinética estándar con alta cadencia de fuego y control estable.",
      heatrayDesc:
        "Un arma de energía experimental que incinera palabras con calor enfocado.",
      startEndless: "Iniciar Endless",
    },
    game: {
      endlessMode: "MODO ENDLESS",
      getReady: "PREPÁRATE",
      highScore: "PUNTUACIÓN MÁXIMA",
      gameOver: "JUEGO TERMINADO",
      score: "PUNTUACIÓN",
      wpm: "PPM", // Palabras Por Minuto
      accuracy: "Precisión",
      highestStreak: "Racha Más Alta",
      timePlayed: "Tiempo Jugado",
      returnToMenu: "VOLVER AL MENÚ",
    },
  },
};

const wordPools = {
  en: {
    a: ["atom", "arcade"],
    b: ["blast", "binary"],
    c: ["cipher", "crash"],
    d: ["delta", "drone"],
    e: ["ember", "echo"],
    f: ["flare", "flux"],
    g: ["glitch", "gamma"],
    h: ["hacker", "halo"],
    i: ["ion", "ignite"],
    j: ["jet", "jolt"],
    k: ["kraken", "kilo"],
    l: ["laser", "logic"],
    m: ["matrix", "mimic"],
    n: ["nova", "neon"],
    o: ["omega", "orbit"],
    p: ["plasma", "pulse"],
    q: ["quantum", "quake"],
    r: ["raven", "rune"],
    s: ["specter", "signal"],
    t: ["titan", "trace"],
    u: ["ultra", "unity"],
    v: ["vortex", "virus"],
    w: ["warp", "wraith"],
    x: ["xenon", "xerox"],
    y: ["yield", "yotta"],
    z: ["zenith", "zone"],
  },
  de: {
    a: ["Apfel", "Auto"],
    b: ["Ball", "Buch"],
    c: ["Computer", "Code"],
    d: ["Drache", "Dampf"],
    e: ["Elefant", "Echo"],
    f: ["Feuer", "Flug"],
    g: ["Garten", "Glas"],
    h: ["Haus", "Herz"],
    i: ["Insel", "Idee"],
    j: ["Jagd", "Jazz"],
    k: ["Katze", "Kraft"],
    l: ["Licht", "Lauf"],
    m: ["Mond", "Musik"],
    n: ["Nacht", "Netz"],
    o: ["Ozean", "Orange"],
    p: ["Planet", "Puls"],
    q: ["Qualität", "Quantum"],
    r: ["Regen", "Rose"],
    s: ["Sonne", "Schnee"],
    t: ["Tiger", "Turm"],
    u: ["Uhr", "Universum"],
    v: ["Vogel", "Virus"],
    w: ["Wasser", "Wind"],
    x: ["Xenon", "Xylophon"],
    y: ["Yoga", "Yacht"],
    z: ["Zebra", "Zeit"],
  },
  id: {
    a: ["api", "awan"],
    b: ["bola", "bintang"],
    c: ["cinta", "cahaya"],
    d: ["daun", "dunia"],
    e: ["energi", "emas"],
    f: ["fokus", "fantasi"],
    g: ["gambar", "gerak"],
    h: ["hati", "harapan"],
    i: ["ikan", "impian"],
    j: ["jalan", "jendela"],
    k: ["kota", "kunci"],
    l: ["laut", "lampu"],
    m: ["mata", "musik"],
    n: ["nasi", "nilai"],
    o: ["orang", "obat"],
    p: ["pohon", "pantai"],
    q: ["quasar", "quantum"],
    r: ["rumah", "roda"],
    s: ["sungai", "surga"],
    t: ["tanah", "tari"],
    u: ["udara", "ular"],
    v: ["virus", "venus"],
    w: ["waktu", "warna"],
    x: ["xenon", "xerox"],
    y: ["yoga", "yodium"],
    z: ["zaman", "zebra"],
  },
  es: {
    a: ["agua", "arco"],
    b: ["bola", "banco"],
    c: ["casa", "cielo"],
    d: ["día", "danza"],
    e: ["estrella", "eco"],
    f: ["fuego", "flor"],
    g: ["gato", "gol"],
    h: ["hombre", "hora"],
    i: ["isla", "idea"],
    j: ["jugo", "juego"],
    k: ["kilo", "karma"],
    l: ["luna", "luz"],
    m: ["mar", "mano"],
    n: ["nube", "noche"],
    o: ["oro", "onda"],
    p: ["paz", "plaza"],
    q: ["queso", "química"],
    r: ["rosa", "rayo"],
    s: ["sol", "sal"],
    t: ["tierra", "taza"],
    u: ["uva", "uno"],
    v: ["vida", "voz"],
    w: ["wifi", "web"],
    x: ["xenón", "xilófono"],
    y: ["yoga", "yeso"],
    z: ["zapato", "zona"],
  },
};

// Current languages
let currentTypingLang = localStorage.getItem("typingLang") || "en";
let currentUILang = localStorage.getItem("uiLang") || "en";

// Visual settings
let currentTheme = localStorage.getItem("theme") || "dark";
let screenShakeEnabled = localStorage.getItem("screenShake") !== "0";
let flashEffectsEnabled = localStorage.getItem("flashEffects") !== "0";

// Set current word pool
let WORD_POOL_MAP = wordPools[currentTypingLang];

// Language switching functions
function setTypingLanguage(lang) {
  if (wordPools[lang]) {
    currentTypingLang = lang;
    WORD_POOL_MAP = wordPools[lang];
    localStorage.setItem("typingLang", lang);
  }
}

function setUILanguage(lang) {
  if (translations[lang]) {
    currentUILang = lang;
    localStorage.setItem("uiLang", lang);
    updateUIText();
  }
}

function setTheme(theme) {
  if (theme === "dark" || theme === "light") {
    currentTheme = theme;
    localStorage.setItem("theme", theme);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }
}

function setScreenShake(enabled) {
  screenShakeEnabled = enabled;
  localStorage.setItem("screenShake", enabled ? "1" : "0");
}

function setFlashEffects(enabled) {
  flashEffectsEnabled = enabled;
  localStorage.setItem("flashEffects", enabled ? "1" : "0");
}

function updateUIText() {
  const t = translations[currentUILang];

  // Menu items
  document.querySelector('[data-section="new-game"]').textContent =
    t.menu.newGame;
  document.querySelector('[data-section="leaderboard"]').textContent =
    t.menu.leaderboard;
  document.querySelector('[data-section="options"]').textContent =
    t.menu.options;
  document.querySelector('[data-section="credits"]').textContent =
    t.menu.credits;
  document.querySelector('[data-section="quit"]').textContent = t.menu.quit;

  // Options
  document.querySelector(".opt-header").textContent = t.options.audio; // Will be updated by switchOptionsPage

  // Game setup
  const weaponListH2 = document.querySelector(".weapon-list h2");
  if (weaponListH2) weaponListH2.textContent = t.gameSetup.selectWeapon;

  const weaponBtns = document.querySelectorAll(".weapon-btn h3");
  weaponBtns.forEach((btn) => {
    if (btn.textContent === "Repeater") btn.textContent = t.gameSetup.repeater;
    else if (btn.textContent === "Heat Ray")
      btn.textContent = t.gameSetup.heatray;
  });

  const weaponInfoH2 = document.querySelector(".weapon-info h2");
  if (weaponInfoH2) {
    if (weaponInfoH2.textContent === "Repeater")
      weaponInfoH2.textContent = t.gameSetup.repeater;
    else if (weaponInfoH2.textContent === "Heat Ray")
      weaponInfoH2.textContent = t.gameSetup.heatray;
  }

  const weaponDesc = document.querySelector(".weapon-info p");
  if (weaponDesc) {
    if (weaponDesc.textContent.includes("standard kinetic-type")) {
      weaponDesc.textContent = t.gameSetup.repeaterDesc;
    } else if (weaponDesc.textContent.includes("experimental energy")) {
      weaponDesc.textContent = t.gameSetup.heatrayDesc;
    }
  }

  const startBtn = document.getElementById("startEndless");
  if (startBtn) startBtn.textContent = t.gameSetup.startEndless;

  // Game overlay
  const modeText = document.getElementById("modeText");
  if (modeText) modeText.textContent = t.game.endlessMode;

  const typingText = document.getElementById("typingText");
  if (typingText && typingText.textContent === "GET READY")
    typingText.textContent = t.game.getReady;

  // Score display
  const highscoreLabel = document.querySelector(".highscore-label");
  if (highscoreLabel) highscoreLabel.textContent = t.game.highScore;
}

// Initialize languages on load
document.addEventListener("DOMContentLoaded", () => {
  // Set initial select values
  if (typingLangSelect) typingLangSelect.value = currentTypingLang;
  if (uiLangSelect) uiLangSelect.value = currentUILang;
  if (themeSelect) themeSelect.value = currentTheme;
  if (screenShakeSelect)
    screenShakeSelect.value = screenShakeEnabled ? "1" : "0";
  if (flashSelect) flashSelect.value = flashEffectsEnabled ? "1" : "0";

  // Add event listeners
  if (typingLangSelect) {
    typingLangSelect.addEventListener("change", (e) => {
      setTypingLanguage(e.target.value);
    });
  }

  if (uiLangSelect) {
    uiLangSelect.addEventListener("change", (e) => {
      setUILanguage(e.target.value);
    });
  }

  if (themeSelect) {
    themeSelect.addEventListener("change", (e) => {
      setTheme(e.target.value);
    });
  }

  if (screenShakeSelect) {
    screenShakeSelect.addEventListener("change", (e) => {
      setScreenShake(e.target.value === "1");
    });
  }

  if (flashSelect) {
    flashSelect.addEventListener("change", (e) => {
      setFlashEffects(e.target.value === "1");
    });
  }

  // Update UI initially
  updateUIText();
});

// --- add near the top of your <script> ---

// === SOUND EFFECTS ===
const sfxExplosion = new Audio("./sfx/explosion_sfx.mp3");
const sfxHeal = new Audio("./sfx/healing_sfx.mp3");
const sfxLaser = new Audio("./sfx/laser_sfx.mp3");

function playSFX(audio, volume = 1, rate = 1) {
  const clone = audio.cloneNode();
  clone.volume = volume;
  clone.playbackRate = rate;
  clone.play().catch(() => {}); // ignore autoplay restrictions
}

const bgm = new Audio("./sfx/plektromachy_ost.mp3");
bgm.loop = true;
bgm.volume = 0.2; // tweak as you like

// Tambahkan SFX Laser di sini
const laserSfx = new Audio("./sfx/laser_gun.mp3");
laserSfx.volume = 0.2; // Sesuaikan volume sesuai kebutuhan

// SFX untuk kesalahan
const wrongSfx = new Audio("./sfx/wrong_sfx.mp3");
wrongSfx.volume = 0.35;

function playBGM() {
  bgm.currentTime = 0;
  bgm.play().catch((e) => console.log("BGM play blocked:", e));
}

function stopBGM() {
  bgm.pause();
  bgm.currentTime = 0;
}
// DOM refs kept (UI unchanged)
const items = document.querySelectorAll(".menu-item");
const logo = document.querySelector(".logo-img");
const title = document.querySelector(".game-title");
const subtitle = document.querySelector(".subtitle");
const footer = document.querySelector(".footer");
const gameSetup = document.querySelector(".game-setup");
const placeholder = document.querySelector(".placeholder");
const optionsPanel = document.querySelector(".options");
const weaponBtns = document.querySelectorAll(".weapon-btn");
const weaponInfo = document.querySelector(".weapon-info");
const gameScreen = document.getElementById("gameScreen");
const playerEl = document.getElementById("player");
const gameOverlay = document.getElementById("gameOverlay");
const typingText = document.getElementById("typingText");
const modeText = document.getElementById("modeText");
const stopwatchEl = document.getElementById("stopwatch");
const debugInfo = document.getElementById("debugInfo");
const playerHealthBar = document.getElementById("playerHealthBar");
const playerHealthInner = document.getElementById("playerHealthInner");
const scoreContainer = document.getElementById("scoreContainer");
const optPrev = document.getElementById("optPrev");
const optNext = document.getElementById("optNext");
const optHeader = document.getElementById("optHeader");
const optDots = document.getElementById("optDots");
const bgmVolumeEl = document.getElementById("bgmVolume");
const sfxVolumeEl = document.getElementById("sfxVolume");
const muteTypingEl = document.getElementById("muteTyping");
const typingLangSelect = document.getElementById("typingLangSelect");
const uiLangSelect = document.getElementById("uiLangSelect");
const themeSelect = document.getElementById("themeSelect");
const screenShakeSelect = document.getElementById("screenShakeSelect");
const flashSelect = document.getElementById("flashSelect");

// Options panel navigation
let currentOptionsPage = 0;
const totalOptionsPages = 3;
const pageHeaders = ["Audio", "Language", "Visual"];

function switchOptionsPage(pageIndex) {
  if (pageIndex < 0 || pageIndex >= totalOptionsPages) return;

  currentOptionsPage = pageIndex;

  // Update header
  optHeader.textContent = pageHeaders[currentOptionsPage];

  // Update dots
  const dots = optDots.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentOptionsPage);
  });

  // Show/hide pages
  const pages = document.querySelectorAll(".opt-page");
  pages.forEach((page, index) => {
    page.style.display = index === currentOptionsPage ? "block" : "none";
  });
}

function initOptionsNavigation() {
  // Set initial page
  switchOptionsPage(0);

  // Add click handlers for arrows
  optPrev.addEventListener("click", () => {
    switchOptionsPage(currentOptionsPage - 1);
  });

  optNext.addEventListener("click", () => {
    switchOptionsPage(currentOptionsPage + 1);
  });

  // Add keyboard support for arrow keys
  document.addEventListener("keydown", (e) => {
    if (optionsPanel.style.display === "block") {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        switchOptionsPage(currentOptionsPage - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        switchOptionsPage(currentOptionsPage + 1);
      }
    }
  });

  // Add volume control listeners
  if (bgmVolumeEl) {
    bgmVolumeEl.addEventListener("input", (e) => {
      bgm.volume = parseFloat(e.target.value);
    });
  }

  if (sfxVolumeEl) {
    sfxVolumeEl.addEventListener("input", (e) => {
      const vol = parseFloat(e.target.value);
      laserSfx.volume = vol;
      wrongSfx.volume = vol;
      // Update other SFX volumes if needed
    });
  }
}

// Initialize options navigation when DOM is loaded
document.addEventListener("DOMContentLoaded", initOptionsNavigation);

let player = {
  health: 100,
  maxHealth: 100,
};

let stopwatchInterval;
let startTime;
let stopwatchPaused = false;
let pausedElapsed = 0;
let pauseStart = 0;

function pauseStopwatch() {
  if (stopwatchPaused) return;
  stopwatchPaused = true;
  pauseStart = Date.now();
}

function resumeStopwatch() {
  if (!stopwatchPaused) return;
  stopwatchPaused = false;
  const pauseDuration = Date.now() - pauseStart;
  startTime += pauseDuration; // offset so timer stays accurate
}

function startStopwatch() {
  const stopwatch = document.getElementById("stopwatch");
  stopwatch.classList.add("show"); // triggers slide-in animation
  startTime = Date.now();

  stopwatchInterval = setInterval(() => {
    if (stopwatchPaused) return; // skip update while paused
    const elapsed = Date.now() - startTime;

    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    const milliseconds = Math.floor((elapsed % 1000) / 10); // ✅ only 2 digits now

    stopwatch.textContent =
      `${String(minutes).padStart(2, "0")}:` +
      `${String(seconds).padStart(2, "0")}:` +
      `${String(milliseconds).padStart(2, "0")}`;
  }, 10);
}

function updateHealthBar() {
  const percent = (player.health / player.maxHealth) * 100;
  playerHealthInner.style.width = percent + "%";
  if (percent > 60)
    playerHealthInner.style.background =
      "linear-gradient(to right, #fff, #00f0ff)";
  else if (percent > 30)
    playerHealthInner.style.background =
      "linear-gradient(to right, #ffd700, #ff8c00)";
  else
    playerHealthInner.style.background =
      "linear-gradient(to right, #ff4040, #cc0000)";
}

const weapons = {
  repeater: {
    name: "Repeater",
    img: "./png/repeater.png",
    desc: "A standard kinetic-type firearm with a high fire rate and stable control.",
  },
  heatray: {
    name: "Heat Ray",
    img: "./png/heat_ray.png",
    desc: "An experimental energy weapon that incinerates words with focused heat.",
  },
};

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    const section = item.dataset.section;
    gameSetup.style.display = "none";
    placeholder.style.display = "none";
    if (optionsPanel) optionsPanel.style.display = "none";
    const leaderboardPanel = document.querySelector(".leaderboard");
    if (leaderboardPanel) leaderboardPanel.style.display = "none";
    const creditsPanel = document.querySelector(".credits");
    if (creditsPanel) creditsPanel.style.display = "none";
    logo.style.display = "none";
    title.style.display = "none";
    subtitle.style.display = "none";
    footer.style.display = "none";
    gameScreen.style.display = "none";
    stopBGM();

    if (section === "new-game") {
      gameSetup.style.display = "flex";
    } else if (section === "options") {
      // show options panel
      if (optionsPanel) {
        optionsPanel.style.display = "block";
      } else {
        placeholder.style.display = "block";
        placeholder.textContent = "Options not available.";
      }
    } else if (section === "leaderboard") {
      // show leaderboard panel
      if (leaderboardPanel) {
        leaderboardPanel.style.display = "block";
        loadLeaderboard();
      } else {
        placeholder.style.display = "block";
        placeholder.textContent = "Leaderboard not available.";
      }
    } else if (section === "credits") {
      // show credits panel
      const creditsPanel = document.querySelector(".credits");
      if (creditsPanel) {
        creditsPanel.style.display = "block";
      } else {
        placeholder.style.display = "block";
        placeholder.textContent = "Credits not available.";
      }
    } else {
      placeholder.style.display = "block";
      placeholder.textContent = "This section is under construction.";
    }
  });
});

weaponBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    weaponBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const w = weapons[btn.dataset.weapon];
    weaponInfo.innerHTML = `
      <h2>${w.name}</h2>
      <img src="${w.img}" alt="${w.name}" class="weapon-image" />
      <p>${w.desc}</p>
      <div class="info-buttons">
        <button id="startEndless">Start Endless</button>
      </div>
    `;
    setupStartEndless();
  });
});

function setupStartEndless() {
  const startBtn = document.getElementById("startEndless");
  if (!startBtn) return;

  startBtn.replaceWith(startBtn.cloneNode(true));
  const newStartBtn = document.getElementById("startEndless");

  newStartBtn.addEventListener("click", () => {
    gameSetup.classList.add("fade-out");
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("slide-out-all");

    setTimeout(() => {
      gameSetup.style.display = "none";
      gameScreen.style.display = "flex";
      startIntroSequence();

      player.health = player.maxHealth;
      updateHealthBar();
      playerHealthBar.style.display = "block";
      startGameLoop();
      playBGM();
    }, 1300);
  });
}

function startIntroSequence() {
  // Reset overlay state
  gameOverlay.classList.remove("fade-out");
  gameOverlay.style.display = "flex";

  // Set typing animation text
  typingText.textContent = "GET READY";
  typingText.style.width = "0"; // reset width for animation

  const INITIAL_DELAY = 500;
  const TYPING_DURATION = 2000;
  const FADE_OUT_DURATION = 1000;
  const TOTAL_INTRO_TIME = INITIAL_DELAY + TYPING_DURATION + FADE_OUT_DURATION;

  // After typing finishes, fade out overlay
  setTimeout(() => {
    gameOverlay.classList.add("fade-out");

    // After fade-out ends, hide overlay + start stopwatch
    setTimeout(() => {
      gameOverlay.style.display = "none";

      // Start stopwatch animation
      stopwatchEl.classList.add("show");
      startStopwatch();

      // Start score animation
      if (scoreContainer) scoreContainer.classList.add("show");

      // Also show EXP bar and skill slots
      document.getElementById("expBarContainer").classList.add("show");
      document.getElementById("skillSlots").classList.add("show");
      updateExpBar();

      // Sync stopwatch with actual game start
      gameStartTime = performance.now();
    }, FADE_OUT_DURATION);
  }, INITIAL_DELAY + TYPING_DURATION);
}

setupStartEndless();

const UNIT = 30;
const PLAYER_RADIUS = UNIT;
const ENEMY_RADIUS = UNIT / 2;
const SPAWN_INTERVAL = 1800;
const ENEMY_SPEED = 18;
const LASER_TRAVEL_TIME = 0; // 60ms untuk laser "terbang" (lebih cepat)
const LASER_IMPACT_DELAY = 50; // 50ms jeda pas kena
const LASER_SHRINK_TIME = 500; // 100ms untuk nge-shrink & hilang
const PARTICLE_COUNT = 15;
const DAMAGE_PER_HIT = 20;
const TYPING_DURATION = 2000; // 2 detik untuk animasi ketik
const INITIAL_DELAY = 1000; // 1 detik sebelum animasi ketik dimulai
// Ranged enemy constants
const RANGED_COOLDOWN = 5000; // 5 seconds
// const RANGED_STOP_RADIUS = 150; // 300x300 area means radius 150

let enemies = [];
// Health collectibles
const HEALTH_DROP_CHANCE = 0.15; // 15% chance
const HEALTH_GAIN = 30;

//Bombs
const EXPLOSION_SIZE = 300; // adjust as you like

let lastTime = performance.now();
let gameRunning = false;
let activeTarget = null;

let streak = 0;
let highestStreak = 0;
const streakDisplay = document.getElementById("streakDisplay");

function updateStreakDisplay() {
  if (streak <= 0) {
    streakDisplay.textContent = "0x";
    streakDisplay.classList.remove("show");
    return;
  }

  streakDisplay.textContent = `${streak}x`;
  streakDisplay.classList.add("show");

  // Simple dynamic color (white → orange → red)
  const intensity = Math.min(streak / 20, 1);
  const r = Math.floor(255 * intensity);
  const g = Math.floor(200 * (1 - intensity));
  streakDisplay.style.color = `rgb(${r}, ${g}, 80)`;

  streakDisplay.classList.add("pop");
  setTimeout(() => streakDisplay.classList.remove("pop"), 150);
}

function incrementStreak() {
  streak++;
  highestStreak = Math.max(highestStreak, streak);
  updateStreakDisplay();
}

function resetStreak() {
  streak = 0;
  updateStreakDisplay();
}

function pickWordForLetter(letter) {
  const list = WORD_POOL_MAP[letter];
  if (!list || list.length === 0) return letter;
  return list[Math.floor(Math.random() * list.length)];
}

function randAvailableLetter() {
  const present = new Set(
    enemies.filter((e) => !e.removed).map((e) => (e.word && e.word[0]) || "")
  );
  const letters = Object.keys(WORD_POOL_MAP).filter((l) => !present.has(l));
  if (letters.length === 0) return null;
  return letters[Math.floor(Math.random() * letters.length)];
}

function startGameLoop() {
  gameRunning = true;
  enemies = [];
  activeTarget = null;
  lastTime = performance.now();
  requestAnimationFrame(gameLoop);
  if (!window._spawnIntervalHandle) {
    window._spawnIntervalHandle = setInterval(spawnEnemy, SPAWN_INTERVAL);
  }
}

function stopGame() {
  gameRunning = false;
  clearInterval(window._spawnIntervalHandle);
  window._spawnIntervalHandle = null;
}

function spawnEnemy() {
  if (!gameRunning) return;
  const rect = gameScreen.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height / 2;

  const letter = randAvailableLetter();
  if (!letter) return;

  const angle = Math.random() * 2 * Math.PI;
  const spawnDist = Math.max(rect.width, rect.height) / 2 + 80;
  const sx = cx + Math.cos(angle) * spawnDist;
  const sy = cy + Math.sin(angle) * spawnDist;

  const dirX = cx - sx;
  const dirY = cy - sy;
  const mag = Math.hypot(dirX, dirY);
  const speed = ENEMY_SPEED + Math.random() * 8;
  const vx = (dirX / mag) * speed;
  const vy = (dirY / mag) * speed;

  const word = pickWordForLetter(letter);
  const enemyEl = document.createElement("div");
  const isRanged = Math.random() < 0.25; // 25% chance to be ranged
  enemyEl.classList.add("enemy");
  if (isRanged) enemyEl.classList.add("ranged");
  enemyEl.style.width = `${UNIT}px`;
  enemyEl.style.height = `${UNIT}px`;
  enemyEl.style.left = `${sx}px`;
  enemyEl.style.top = `${sy}px`;

  // === Word label ===
  const wordEl = document.createElement("div");
  wordEl.classList.add("word");
  for (let i = 0; i < word.length; i++) {
    const span = document.createElement("span");
    span.textContent = word[i];
    wordEl.appendChild(span);
  }
  enemyEl.appendChild(wordEl);

  // === HEALTH COLLECTIBLE CHANCE (kept from earlier) ===
  const hasHealthCollectible = Math.random() < 0.15; // 15% chance
  if (hasHealthCollectible) {
    const plusEl = document.createElement("div");
    plusEl.classList.add("health-indicator");
    plusEl.textContent = "+";
    wordEl.appendChild(plusEl);
  }

  // === BOMB CHANCE (5-10%) ===
  const bombChance = 0.05 + Math.random() * 0.05; // random between 0.05 and 0.10
  const hasBomb = Math.random() < bombChance;
  if (hasBomb) {
    const bombEl = document.createElement("div");
    bombEl.classList.add("bomb-indicator");
    bombEl.textContent = "✹"; // visual symbol for bomb — red gradient via CSS
    wordEl.appendChild(bombEl);
  }

  // === Commit to DOM ===
  gameScreen.appendChild(enemyEl);

  const enemy = {
    id: cryptoRandomId(),
    el: enemyEl,
    word,
    progress: 0,
    x: sx,
    y: sy,
    vx,
    vy,
    speed,
    wordEl,
    removed: false,
    ranged: isRanged,
    lastShotTime: performance.now(),
    hasHealthCollectible: !!hasHealthCollectible,
    hasBomb: !!hasBomb,
  };

  enemies.push(enemy);
}

function cryptoRandomId() {
  return Math.random().toString(36).slice(2, 9);
}

function enemyIsOnScreen(enemy) {
  if (!enemy || !enemy.el) return false;
  const screenRect = gameScreen.getBoundingClientRect();
  const b = enemy.el.getBoundingClientRect();
  return !(
    b.right < screenRect.left ||
    b.left > screenRect.right ||
    b.bottom < screenRect.top ||
    b.top > screenRect.bottom
  );
}

function refreshWordDisplay(enemy) {
  const spans = enemy.wordEl.querySelectorAll("span");
  spans.forEach((s, i) => {
    s.classList.toggle("done", i < enemy.progress);
  });
  if (activeTarget === enemy) {
    enemy.el.classList.add("selected");
  } else {
    enemy.el.classList.remove("selected");
  }
}

function gameLoop(now) {
  if (!gameRunning) return;
  const dt = (now - lastTime) / 1000;
  lastTime = now;

  const rect = gameScreen.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height / 2;

  for (let i = enemies.length - 1; i >= 0; i--) {
    const en = enemies[i];
    if (en.removed) continue;

    const dist = Math.hypot(en.x - cx, en.y - cy);

    // --- Handle stunned enemies ---
    if (en.stunTimer && en.stunTimer > 0) {
      en.stunTimer--;
      if (en.stunTimer === 0) en.el.classList.remove("stunned");
      continue; // skip movement and attacks while stunned
    }

    // 🟣 --- RANGED ENEMY LOGIC ---
    if (en.ranged) {
      const rect = gameScreen.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      // --- rectangular safe zone dimensions ---
      const zoneWidth = rect.width * 0.8; // 90% of screen width
      const zoneHeight = rect.height * 0.7; // 80% of screen height

      const halfW = zoneWidth / 2;
      const halfH = zoneHeight / 2;

      // Distance from center along x/y
      const dx = en.x - cx;
      const dy = en.y - cy;

      // Check if enemy is *outside* rectangle zone
      const outsideX = Math.abs(dx) > halfW;
      const outsideY = Math.abs(dy) > halfH;

      // Move inward only if outside the rectangular border
      if (outsideX || outsideY) {
        en.x += en.vx * dt;
        en.y += en.vy * dt;
      } else {
        // inside zone → stop & prepare to shoot
        en.vx = 0;
        en.vy = 0;

        if (!en.lastShotTime) en.lastShotTime = performance.now();
        const timeSinceLastShot = performance.now() - en.lastShotTime;

        if (timeSinceLastShot >= RANGED_COOLDOWN) {
          startChargeIndicator(en);
          en.lastShotTime = performance.now() + 1500; // 1.5s charge time
        }
      }
    }

    // 🟠 --- MELEE ENEMY LOGIC ---
    else {
      en.x += en.vx * dt;
      en.y += en.vy * dt;

      // Melee attack if close enough
      if (dist < UNIT * 1.2) {
        killEnemy(en, true);
        player.health -= DAMAGE_PER_HIT;
        if (player.health <= 0) {
          player.health = 0;
          updateHealthBar();
          handlePlayerDeath();
          return;
        }
        updateHealthBar();
      }
    }

    // --- Apply updated positions ---
    en.el.style.left = `${en.x}px`;
    en.el.style.top = `${en.y}px`;
  }

  requestAnimationFrame(gameLoop);
}

window.addEventListener("keydown", (ev) => {
  // === 1. Handle upgrade prompt first ===
  if (ev.code === "Space") {
    const prompt = document.getElementById("upgradePrompt");
    if (prompt && prompt.classList.contains("show")) {
      // Pause the game now because the player asked to upgrade.
      prompt.classList.remove("show");

      // Pause game loop / spawning / stopwatch
      gameRunning = false;
      pauseStopwatch();

      // Dim more to emphasize pause
      gameScreen.style.filter = "brightness(0.6)";

      // Show card choices (which will create the overlay and wait for selection)
      showCardChoices();
      return; // stop here, don't run typing logic
    }
  }

  // === 2. Block typing while game is paused ===
  if (!gameRunning) return;

  // === 3. Typing / gameplay input ===
  const key = ev.key;
  if (key.length !== 1) return;
  const ch = key.toLowerCase();
  if (!/^[a-z0-9]$/.test(ch)) return;

  const onScreen = enemies.filter((e) => !e.removed && enemyIsOnScreen(e));

  let targetFound = false;
  if (activeTarget) {
    const expected = activeTarget.word[activeTarget.progress];
    if (expected && expected.toLowerCase() === ch) {
      targetFound = true;
    }
  }

  // Target selection logic
  if (!targetFound) {
    const matching = onScreen
      .filter((e) => {
        const expected = e.word[e.progress] || e.word[0];
        return expected && expected.toLowerCase() === ch;
      })
      .sort((a, b) => {
        const rect = gameScreen.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const distA = Math.hypot(a.x - cx, a.y - cy);
        const distB = Math.hypot(b.x - cx, b.y - cy);
        return distA - distB;
      });

    if (matching.length > 0) {
      const newTarget = matching[0];
      if (activeTarget && activeTarget !== newTarget) {
        activeTarget.progress = 0;
        refreshWordDisplay(activeTarget);
      }
      activeTarget = newTarget;
      targetFound = true;
    } else if (
      activeTarget &&
      activeTarget.progress === 0 &&
      activeTarget.word[0].toLowerCase() !== ch
    ) {
      activeTarget.el.classList.remove("selected");
      activeTarget = null;
    }
  }

  if (activeTarget) {
    const expected = activeTarget.word[activeTarget.progress];
    if (expected && expected.toLowerCase() === ch) {
      // Track first letter typing
      if (activeTarget.progress === 0) {
        typingStartTimes.set(activeTarget, Date.now());
        typingErrors.set(activeTarget, 0);
      }

      activeTarget.progress++;
      totalCorrectChars++;
      refreshWordDisplay(activeTarget);
      shootLaserAt(activeTarget);
      incrementStreak();

      // When word completed
      if (activeTarget.progress >= activeTarget.word.length) {
        const startTime = typingStartTimes.get(activeTarget) || Date.now();
        const errors = typingErrors.get(activeTarget) || 0;
        const timeTaken = Date.now() - startTime;

        const points = calculateScore(activeTarget, timeTaken, errors);
        updateScore(points);

        typingStartTimes.delete(activeTarget);
        typingErrors.delete(activeTarget);

        const accuracy = calculateFinalAccuracy();
        const timePlayed = stopwatchEl ? stopwatchEl.textContent : null;
        saveHighScore(playerName, score, accuracy, timePlayed)
          .then(() => loadHighScores())
          .catch(() => {});

        killEnemy(activeTarget, true);
        activeTarget = null;
      }
    } else {
      // wrong letter
      typingErrors.set(activeTarget, (typingErrors.get(activeTarget) || 0) + 1);
      totalTypedErrors++;

      if (activeTarget.progress > 0) {
        activeTarget.progress = 0;
        refreshWordDisplay(activeTarget);
      }

      try {
        wrongSfx.currentTime = 0;
        wrongSfx.play().catch(() => {});
      } catch (e) {}

      const wordContainer =
        activeTarget.wordEl ||
        activeTarget.el?.querySelector?.(".word") ||
        activeTarget.el;
      if (wordContainer) {
        wordContainer.classList.remove("word-wrong-shake");
        void wordContainer.offsetWidth;
        wordContainer.classList.add("word-wrong-shake");
        setTimeout(
          () => wordContainer.classList.remove("word-wrong-shake"),
          380
        );
      }

      resetStreak();
    }
  }
});

// ranged enemy charge indicator
function startChargeIndicator(enemy) {
  if (!enemy || enemy.removed) return;

  // Avoid stacking indicators if it’s already charging
  if (enemy.isCharging) return;
  enemy.isCharging = true;

  const indicator = document.createElement("div");
  indicator.classList.add("charge-indicator");
  indicator.style.left = `${enemy.x}px`;
  indicator.style.top = `${enemy.y}px`;
  gameScreen.appendChild(indicator);

  // After charge-up, shoot
  setTimeout(() => {
    indicator.remove();
    shootRangedLaser(
      enemy,
      gameScreen.offsetWidth / 2,
      gameScreen.offsetHeight / 2
    );
    playSFX(sfxLaser, 0.2, 1.1);
    enemy.isCharging = false;
  }, 1500); // 1.5s charge-up delay before firing
}

// Ranged laser shooting function
function shootRangedLaser(enemy, targetX, targetY) {
  if (enemy.removed) return;

  const dx = targetX - enemy.x;
  const dy = targetY - enemy.y;
  const dist = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  const laser = document.createElement("div");
  laser.classList.add("ranged-laser");
  laser.style.left = `${enemy.x}px`;
  laser.style.top = `${enemy.y}px`;
  laser.style.transform = `rotate(${angle}deg)`;

  gameScreen.appendChild(laser);
  laser.style.width = `${dist}px`;

  // Laser fades and disappears
  setTimeout(() => {
    laser.style.opacity = "0";
    laser.style.height = "0px";
    setTimeout(() => laser.remove(), 300);
  }, 150);

  // Player takes damage
  player.health -= DAMAGE_PER_HIT * 0.6; // Slightly weaker than melee
  updateHealthBar();
  if (player.health <= 0) {
    handlePlayerDeath();
  }
}

// ... (Bagian JavaScript, di bawah event listener keydown) ...

function shootLaserAt(enemy) {
  if (!enemy || enemy.removed) return;
  // 💡 TAMBAHKAN KODE INI UNTUK MEMUTAR SFX LASER 💡
  laserSfx.currentTime = 0; // Atur ulang ke awal untuk pemutaran cepat berulang kali
  laserSfx.play().catch((e) => console.log("SFX play blocked:", e)); // Putar SFX
  const rect = gameScreen.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const dx = enemy.x - cx;
  const dy = enemy.y - cy;
  const dist = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  const laser = document.createElement("div");
  laser.classList.add("laser");
  laser.style.left = `${cx}px`;
  laser.style.top = `${cy}px`;
  laser.style.transform = `rotate(${angle}deg)`;

  gameScreen.appendChild(laser);

  // === VISUAL FLASHES ADDED HERE ===
  // 1) short player circle flash (local glow & scale)
  playerEl.classList.add("flash");
  setTimeout(() => {
    playerEl.classList.remove("flash");
  }, 120); // flash duration (ms) - tweak as desired

  // 2) quick screen radial flash for impact emphasis
  // small flash + screen shake every shot
  const smallFlashDuration = 220; // ms for regular shot flash
  const smallFlash = document.createElement("div");
  smallFlash.className = "shoot-flash";
  smallFlash.style.setProperty("--flash-duration", `${smallFlashDuration}ms`);
  gameScreen.appendChild(smallFlash);
  // trigger a subtle screen shake
  gameScreen.classList.add("screen-shake");
  setTimeout(
    () => gameScreen.classList.remove("screen-shake"),
    Math.max(180, smallFlashDuration)
  );
  // remove small flash after animation end
  setTimeout(() => smallFlash.remove(), smallFlashDuration + 40);

  // === END VISUAL FLASHES ===

  // Laser instan muncul pada panjang penuh.
  laser.style.width = `${dist}px`;

  // Setel transisi hanya untuk shrink/fade out
  laser.style.transition = `opacity ${LASER_SHRINK_TIME}ms linear, height ${LASER_SHRINK_TIME}ms linear`;

  // LASER_TRAVEL_TIME = 0ms
  setTimeout(() => {
    // Laser instan muncul pada panjang penuh.

    // LASER_IMPACT_DELAY = 50ms
    setTimeout(() => {
      // Memicu animasi "shrink" (pengecilan) & "fade out" laser
      laser.style.opacity = "0";
      laser.style.height = "0px";

      // 💡 SINNKRONISASI UTAMA DI SINI 💡
      // Hapus elemen laser setelah shrink duration
      setTimeout(() => {
        laser.remove();
      }, LASER_SHRINK_TIME);
    }, LASER_IMPACT_DELAY); // 50ms
  }, LASER_TRAVEL_TIME); // 0ms (Instan)

  // If this shot completed the word, produce a bigger "flashbang" whose animation
  // is synchronized to the laser shrink time for cohesive impact.
  // Note: enemy.progress was incremented before calling shootLaserAt().
  if (enemy.progress >= enemy.word.length) {
    const killFlashDuration = Math.max(LASER_SHRINK_TIME + 120, 420); // ensure minimum visibility
    const killFlash = document.createElement("div");
    killFlash.className = "shoot-flash big";
    killFlash.style.setProperty("--flash-duration", `${killFlashDuration}ms`);
    gameScreen.appendChild(killFlash);
    // make the kill-shot also add a slightly stronger shake
    gameScreen.classList.add("screen-shake");
    setTimeout(
      () => gameScreen.classList.remove("screen-shake"),
      killFlashDuration
    );
    setTimeout(() => killFlash.remove(), killFlashDuration + 60);
  }
}

// ... (Sisa Kode JavaScript tidak berubah) ...
//Bombs and Health Collectibles
// Create explosion visuals and damage nearby enemies.
// w/h are used to for visual size; actual damage radius we will treat as max(w,h) / 2
function createExplosionAt(x, y, w = 50, h = 50, sourceEnemy = null) {
  // Visual: explosion core
  const ex = document.createElement("div");
  ex.classList.add("explosion-core");
  ex.style.left = `${x - w / 2}px`;
  ex.style.top = `${y - h / 2}px`;
  ex.style.width = `${w}px`;
  ex.style.height = `${h}px`;
  gameScreen.appendChild(ex);

  // Visual: shockwave (purely visual)
  const sw = document.createElement("div");
  sw.classList.add("explosion-shockwave");
  sw.style.left = `${x - w}px`;
  sw.style.top = `${y - w}px`;
  sw.style.width = `${w * 2}px`;
  sw.style.height = `${w * 2}px`;
  gameScreen.appendChild(sw);

  // Remove visuals after animation
  setTimeout(() => {
    ex.remove();
    sw.remove();
  }, 700);

  // Damage logic: kill any enemy whose center is within radius
  const radius = Math.max(w, h) * 0.5; // 25 for 50x50
  for (let i = 0; i < enemies.length; i++) {
    const other = enemies[i];
    if (!other || other.removed) continue;
    // don't re-damage the source enemy (it's already being killed)
    if (sourceEnemy && other.id === sourceEnemy.id) continue;

    const dist = Math.hypot(other.x - x, other.y - y);
    if (dist <= radius) {
      // kill instantly, but prevent chained bombs
      killEnemy(other, true, false);
    }
  }

  // Add a quick center flash (optional) to emphasize impact (tiny white flash)
  const flash = document.createElement("div");
  flash.className = "explosion-flash";
  flash.style.left = `${x - 8}px`;
  flash.style.top = `${y - 8}px`;
  gameScreen.appendChild(flash);
  setTimeout(() => flash.remove(), 220);
}

// popup heal text
function showHealPopup(text) {
  const popup = document.createElement("div");
  popup.classList.add("heal-popup");
  popup.textContent = text;

  const healthBarRect = playerHealthBar.getBoundingClientRect();
  popup.style.left = `${healthBarRect.right + 10}px`;
  popup.style.top = `${healthBarRect.top - 5}px`;

  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 1000);
}

function killEnemy(enemy, playEffect = false, triggerBomb = true) {
  if (!enemy || enemy.removed) return;
  enemy.removed = true;

  // If the enemy had a health collectible, heal player
  if (enemy.hasHealthCollectible) {
    player.health = Math.min(player.health + HEALTH_GAIN, player.maxHealth);
    updateHealthBar();
    playSFX(sfxHeal, 0.2, 1.0);
    showHealPopup(`+${HEALTH_GAIN}`);
  }

  // If enemy had a bomb and triggerBomb allowed, create explosion
  if (enemy.hasBomb && triggerBomb) {
    playSFX(sfxExplosion, 0.4, 0.9);
    createExplosionAt(enemy.x, enemy.y, EXPLOSION_SIZE, EXPLOSION_SIZE, enemy);
  }

  if (playEffect) {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement("div");
      p.classList.add("particle");
      p.style.left = `${enemy.x + (Math.random() - 0.5) * 20}px`;
      p.style.top = `${enemy.y + (Math.random() - 0.5) * 20}px`;
      gameScreen.appendChild(p);
      setTimeout(() => p.remove(), 600);
    }
  }

  // Remove DOM element safely
  try {
    enemy.el.remove();
  } catch (e) {}

  // Optionally clear from enemies array (kept but not strictly required)
  // (we keep the object in the array but marked removed; gameLoop ignores removed)
}

// Add/update these variables at the top with other game state
let score = 0;
let highScore = parseInt(localStorage.getItem("plektromachyHighScore")) || 0;
let typingStartTimes = new Map(); // Track timing per enemy
let typingErrors = new Map(); // Track errors per enemy

// Replace/update the score calculation functions
function calculateScore(enemy, timeTaken, errors) {
  // Validate inputs
  if (!enemy || !enemy.word || timeTaken <= 0) {
    console.warn("Invalid score calculation inputs:", {
      enemy,
      timeTaken,
      errors,
    });
    return 5; // Return base score as fallback
  }

  const baseScore = 5;
  const wordLength = enemy.word.length;

  // Speed bonus calculation
  const averageTimePerChar = timeTaken / wordLength;
  let speedMultiplier = 1.0;

  // Adjusted speed thresholds
  if (averageTimePerChar < 150) {
    speedMultiplier = 5.0; // Ultra fast: < 150ms per char
  } else if (averageTimePerChar < 250) {
    speedMultiplier = 3.0; // Very fast: < 250ms per char
  } else if (averageTimePerChar < 400) {
    speedMultiplier = 2.0; // Fast: < 400ms per char
  }

  // More forgiving accuracy calculation
  const accuracy = Math.max(0, 1 - errors / (wordLength + errors));
  const accuracyMultiplier = Math.max(0.1, accuracy); // Minimum 0.1x multiplier

  // Calculate final score with safety checks
  const finalScore = Math.max(
    1,
    Math.round(baseScore * speedMultiplier * accuracyMultiplier)
  );

  // Show bonus text
  const bonusEl = document.getElementById("scoreBonus");
  if (bonusEl) {
    const speedText = speedMultiplier > 1 ? ` SPEED x${speedMultiplier}` : "";
    const accuracyText =
      accuracy < 1 ? ` ACC ${Math.round(accuracy * 100)}%` : "";

    bonusEl.textContent = `+${finalScore}${speedText}${accuracyText}`;
    bonusEl.classList.remove("show");
    void bonusEl.offsetWidth; // Force reflow
    bonusEl.classList.add("show");
    setTimeout(() => bonusEl.classList.remove("show"), 1000);
  }

  return finalScore;
}

function updateScore(points) {
  score += points;
  document.getElementById("scoreValue").textContent = score.toLocaleString();
  updateHighScore(); // Check/update high score whenever score changes
}

// Add to your game reset/initialization
function resetGame() {
  // ...existing reset code...
  score = 0;
  document.getElementById("scoreValue").textContent = "0";
  document.getElementById("highscoreValue").textContent =
    highScore.toLocaleString();
}

// Add to your game over handling
function gameOver() {
  // ...existing game over code...
  updateHighScore(); // Ensure final score is checked against high score
}

// Add these functions for high score management
function updateHighScore() {
  const highscoreEl = document.getElementById("highscoreValue");
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("plektromachyHighScore", highScore);

    // Visual feedback for new high score
    highscoreEl.classList.add("new-highscore");
    setTimeout(() => highscoreEl.classList.remove("new-highscore"), 500);
  }
  highscoreEl.textContent = highScore.toLocaleString();
}

// add these globals near the top with other state
let playerName = "Player";
let totalCorrectChars = 0;
let totalTypedErrors = 0;

function calculateFinalAccuracy() {
  const total = totalCorrectChars + totalTypedErrors;
  if (total === 0) return 1.0;
  return Math.max(0, totalCorrectChars / total); // 0..1
}

async function saveHighScore(player_name, scoreValue, accuracy, timePlayed) {
  try {
    const resp = await fetch("/api/highscores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        player_name,
        score: Number(scoreValue) || 0,
        accuracy: typeof accuracy === "number" ? accuracy : null,
        time_played: timePlayed || null,
      }),
    });
    return await resp.json();
  } catch (err) {
    console.warn("Failed to save highscore:", err);
    throw err;
  }
}

async function loadHighScores() {
  try {
    const resp = await fetch("/api/highscores");
    const list = await resp.json();
    if (!Array.isArray(list) || list.length === 0) return;
    // Update the single highscore value display with top score
    const top = list[0];
    const el = document.getElementById("highscoreValue");
    if (el) el.textContent = (top.score || 0).toLocaleString();
    // Optionally expand this to show the full leaderboard in UI
  } catch (err) {
    console.warn("Failed to load highscores:", err);
  }
}

// Call loadHighScores() once on init
window.addEventListener("load", () => {
  loadHighScores();
});

// Load and display leaderboard for the main menu panel
async function loadLeaderboard() {
  try {
    const resp = await fetch("/api/highscores");
    const list = await resp.json();
    displayMainLeaderboard(list);
  } catch (err) {
    console.warn("Failed to load leaderboard:", err);
    document.getElementById("leaderboardContent").innerHTML =
      "<p>Failed to load leaderboard.</p>";
  }
}

// Display leaderboard in the main panel
function displayMainLeaderboard(list) {
  const content = document.getElementById("leaderboardContent");
  if (!list || list.length === 0) {
    content.innerHTML = "<p>No scores yet.</p>";
    return;
  }

  const table = document.createElement("table");
  table.id = "leaderboardTable";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Rank</th>
        <th>Player</th>
        <th>Score</th>
        <th>Accuracy</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  list.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${entry.player_name}</td>
      <td>${entry.score.toLocaleString()}</td>
      <td>${
        entry.accuracy ? Math.round(entry.accuracy * 100) + "%" : "N/A"
      }</td>
      <td>${entry.time_played || "N/A"}</td>
    `;
    tbody.appendChild(row);
  });

  content.innerHTML = "";
  content.appendChild(table);
}

// Add death/stats UI and helpers (placed near other game-over / score functions)

function handlePlayerDeath() {
  // stop gameplay
  stopGame();
  stopBGM();

  // stop stopwatch
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }

  // ensure high score stored/updated
  updateHighScore();

  // show stats overlay
  showDeathStats();
}

function showDeathStats() {
  // remove existing overlay if present
  const existing = document.getElementById("deathStatsOverlay");
  if (existing) existing.remove();

  // inject minimal CSS to center the overlay if not already added
  if (!document.getElementById("deathStatsStyles")) {
    const style = document.createElement("style");
    style.id = "deathStatsStyles";
    style.textContent = `
      /* death stats overlay centered */
      #deathStatsOverlay {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.85);
        backdrop-filter: blur(1px);
        z-index: 9999;
      }
      .death-stats-card {
        width: 420px;
        max-width: calc(100% - 40px);
        background: #0d121c; 
        color: #e6f7ff;
        padding: 25px 35px;
        border-radius: 4px;
        border: 1px solid #00ff8033; /* Border tipis hijau */
        box-shadow: 0 0 15px rgba(0, 255, 128, 0.15), 0 0 5px rgba(0, 255, 128, 0.05);
        font-family: 'Consolas', monospace; 
        animation: fadeIn 0.5s ease-out;
      }
      .death-stats-card h2 {
        margin: 0 0 15px;
        text-align: center;
        font-size: 28px;
        letter-spacing: 2px;
        color: #00ff80; /* Teks hijau neon */
        text-shadow: 0 0 8px rgba(0, 255, 128, 0.6);
      }
      .stat-section {
        margin-bottom: 10px;
      }
      .stats-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 8px 0;
        font-size: 15px;
        border-bottom: 1px dashed #ffffff1A; /* Garis putus-putus tipis */
        padding-bottom: 5px;
      }
      /* Hilangkan garis di baris terakhir setiap section/kelompok */
      .stats-row:last-of-type {
        border-bottom: none;
        padding-bottom: 0;
      }
      .stats-row span {
        color: #cfd3da;
        text-transform: uppercase;
      }
      .stats-row strong {
        font-size: 16px;
        color: #00ff80;
        text-shadow: 0 0 3px rgba(0, 255, 128, 0.5);
      }
      
      /* FINAL SCORE HIGHLIGHT */
      #stat-score-final-label {
          font-size: 18px;
          color: #cfd3da;
          text-align: center;
          margin-top: 15px;
          margin-bottom: 5px;
          letter-spacing: 1px;
      }
      #stat-score-final {
        font-size: 38px;
        color: #ffffff; 
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
        font-weight: 700;
        text-align: center;
        display: block;
        margin-bottom: 20px;
        animation: scoreZoom 0.5s 0.3s backwards;
      }
      
      /* DEBUG PANEL STYLES */
      #debugDetails {
          margin-top: 15px; 
          border-top: 1px solid #00ff8033; 
          padding-top: 10px;
      }
      #debugSummary {
          cursor: pointer; 
          font-weight: 600; 
          color: #00ff80; /* Warna hijau neon */
          text-shadow: 0 0 5px rgba(0, 255, 128, 0.3);
          user-select: none;
      }
      #debugContent p {
          font-size: 12px; 
          line-height: 1.5; 
          color: #aaaaaa;
      }

      .death-buttons {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 25px;
      }
      .death-buttons button {
        padding: 10px 20px;
        border-radius: 4px;
        border: 1px solid #00ff80;
        cursor: pointer;
        background: #00ff8011;
        color: #00ff80;
        font-weight: 600;
        text-transform: uppercase;
        transition: background 0.2s, box-shadow 0.2s;
      }
      .death-buttons button:hover {
        background: #00ff8022;
        box-shadow: 0 0 10px rgba(0, 255, 128, 0.5);
      }

      /* Keyframe Animations */
      @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
      }
      @keyframes scoreZoom {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
      }
      
      /* >>> CSS UNTUK LEADERBOARD <<< */
      #leaderboardTable {
        margin-top: 5px;
        border-collapse: collapse;
      }
      #leaderboardTable th {
        padding: 6px 4px;
        text-align: left;
      }
      .leaderboard-player {
        background: #18a0ff33; /* Highlight the player's score */
        border-radius: 4px;
      }
      /* -------------------------------- */
    `;
    document.head.appendChild(style);
  }

  const overlay = document.createElement("div");
  overlay.id = "deathStatsOverlay";
  overlay.className = "death-stats-overlay";

  // --- Kalkulasi Stats ---
  const elapsedMs = startTime ? Date.now() - startTime : 0;
  // Menggunakan Math.max untuk menghindari pembagian oleh nol
  const minutes = Math.max(elapsedMs / 60000, 1 / 60000);
  const wpm = Math.round(totalCorrectChars / 5 / minutes) || 0;
  const finalAccuracy = calculateFinalAccuracy();
  const accuracy = Math.round(finalAccuracy * 100);
  const displayedHighestStreak = highestStreak || 0;
  const coinsEarned = score || 0;
  const timePlayed = stopwatchEl ? stopwatchEl.textContent : "00:00:00";
  // ----------------------------------------------------------------

  // === PANEL DEBUG (ID ditambahkan untuk interaksi Tab) ===
  const debugInfoHTML = `
      <details id="debugDetails">
          <summary id="debugSummary">DEBUG (Toggle: Tab)</summary>
          <div id="debugContent">
              <p><strong>Total Correct Chars:</strong> ${totalCorrectChars}</p>
              <p><strong>Total Typed Errors:</strong> ${totalTypedErrors}</p>
              <p><strong>Waktu Berlalu (ms):</strong> ${elapsedMs.toLocaleString()} ms</p>
              <p><strong>Waktu Berlalu (menit):</strong> ${minutes.toFixed(
                4
              )} min</p>
              <p><strong>Rumus WPM:</strong> (${totalCorrectChars} / 5) / ${minutes.toFixed(
    4
  )} = ${wpm}</p>
              <p><strong>Rumus Accuracy:</strong> ${totalCorrectChars} / (${totalCorrectChars} + ${totalTypedErrors}) = ${accuracy}%</p>
              <hr style="border-top: 1px solid #ffffff11; margin: 5px 0;">
              <p><strong>Highest Streak Terekam (Global):</strong> ${highestStreak}x</p>
              <p><strong>Streak Saat Mati (Current):</strong> ${streak}x</p>
          </div>
      </details>
  `;
  // ==========================================

  // HTML dengan struktur mirip gambar
  overlay.innerHTML = `
    <div class="death-stats-card" role="dialog" aria-modal="true" aria-label="Game Over Stats">
      <h2>GAME OVER</h2>
      
      <div id="stat-score-final-label">SCORE</div>
      <strong id="stat-score-final">${coinsEarned.toLocaleString()}</strong>
      
      <div class="stat-section">
        <div class="stats-row"><span>WPM</span><strong id="stat-wpm">${wpm}</strong></div>
        <div class="stats-row"><span>Accuracy</span><strong id="stat-accuracy">${accuracy}%</strong></div>
        <div class="stats-row"><span>Highest Streak</span><strong id="stat-streak">${displayedHighestStreak}x</strong></div>
        <div class="stats-row"><span>Time Played</span><strong id="stat-time">${timePlayed}</strong></div>
      </div>

      ${debugInfoHTML} 
      
      <div class="death-buttons">
        <button id="deathMainMenuBtn">RETURN TO MENU</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // --- Kunci Perbaikan: Tidak ada fungsi lokal, hanya memanggil yang global ---
  document.addEventListener("keydown", toggleDebug);

  // Simpan Skor & Muat Leaderboard
  saveHighScore(playerName, coinsEarned, finalAccuracy, timePlayed)
    .then(() => {
      return loadHighScores();
    })
    .then((list) => {
      // Asumsi displayLeaderboard ada di file script.js kamu
      displayLeaderboard(list, playerName, coinsEarned);
    })
    .catch((err) => {
      console.error("Leaderboard error:", err);
    });

  // wire up button dan bersihkan event listener
  const mainBtn = document.getElementById("deathMainMenuBtn");
  if (mainBtn) {
    mainBtn.addEventListener("click", () => {
      // Bersihkan listener, merujuk ke fungsi global yang sama
      document.removeEventListener("keydown", toggleDebug);
      returnToMainMenu();
    });
  }
}

// --- Letakkan ini di bagian atas script.js, di luar fungsi lain ---
function toggleDebug(event) {
  // Tombol Tab memiliki key 'Tab'
  if (event.key === "Tab") {
    event.preventDefault(); // Mencegah browser melakukan aksi default Tab (ganti fokus)
    const details = document.getElementById("debugDetails");
    if (details) {
      details.open = !details.open;
    }
  }
}

function returnToMainMenu() {
  // remove overlay
  const overlay = document.getElementById("deathStatsOverlay");
  if (overlay) overlay.remove();

  // clear enemies and DOM
  for (const en of enemies) {
    try {
      en.el.remove();
    } catch (e) {}
  }
  enemies = [];
  activeTarget = null;

  // stop game systems
  stopGame();
  stopBGM();
  if (window._spawnIntervalHandle) {
    clearInterval(window._spawnIntervalHandle);
    window._spawnIntervalHandle = null;
  }

  // stop and reset stopwatch
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }
  stopwatchEl.textContent = "00:00:00";
  stopwatchEl.classList.remove("show");

  // Ensure sidebar is visible and not slid-out
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.style.display = "block";
    sidebar.classList.remove("slide-out-all");
    sidebar.classList.remove("hidden"); // defensive remove if some CSS uses .hidden
  }

  // hide game screen and in-game UI (keep NEW GAME elements hidden)
  gameScreen.style.display = "none";
  // IMPORTANT: hide both gameSetup and placeholder so the title/logo are visible
  gameSetup.style.display = "none";
  gameSetup.classList.remove("fade-out");
  placeholder.style.display = "none";
  playerHealthBar.style.display = "none";

  // show title/logo/subtitle/footer (main title view)
  logo.style.display = "block";
  title.style.display = "block";
  subtitle.style.display = "block";
  footer.style.display = "block";

  // remove active state from menu items so new-game panel won't auto-open
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => item.classList.remove("active"));

  // reset runtime counters (keep high score)
  totalCorrectChars = 0;
  totalTypedErrors = 0;
  streak = 0;
  updateStreakDisplay();

  // reset session score display (highscore preserved)
  score = 0;
  const scoreEl = document.getElementById("scoreValue");
  if (scoreEl) scoreEl.textContent = "0";
  updateHighScore();
}

// Function to display leaderboard in the death stats overlay
function displayLeaderboard(list, playerName, score) {
  const overlay = document.getElementById("deathStatsOverlay");
  if (!overlay) return;

  // Remove existing leaderboard if present
  const existingTable = document.getElementById("leaderboardTable");
  if (existingTable) existingTable.remove();

  // Find insertion point after debug details
  const debugDetails = document.getElementById("debugDetails");
  if (!debugDetails) return;

  // Create table
  const table = document.createElement("table");
  table.id = "leaderboardTable";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Rank</th>
        <th>Player</th>
        <th>Score</th>
        <th>Accuracy</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  list.forEach((entry, index) => {
    const row = document.createElement("tr");
    // Highlight player's score
    if (entry.player_name === playerName && entry.score === score) {
      row.classList.add("leaderboard-player");
    }
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${entry.player_name}</td>
      <td>${entry.score.toLocaleString()}</td>
      <td>${
        entry.accuracy ? Math.round(entry.accuracy * 100) + "%" : "N/A"
      }</td>
      <td>${entry.time_played || "N/A"}</td>
    `;
    tbody.appendChild(row);
  });

  // Insert after debug details
  debugDetails.insertAdjacentElement("afterend", table);
}
