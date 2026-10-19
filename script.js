
/*
  TEKKEN MEDAN ALLIANCE — DATA & INTERAKSI

  Untuk menambahkan pemain, isi array PLAYERS di bawah.

  Contoh:
  {
    nickname: "DGx",
    realName: "Doly", // opsional
    rank: "God of Destruction",
    main: "King",
    quotes: "See you in the arena." // opsional
  }
*/


const PLAYERS = [
  
  {
    nickname: "DGx",
    rank: "God of Destruction VI",
    main: "King",
    quotes: "Jangan biarkan apapun menganggu Tekken mu!",
    ewgfProfile: "https://www.ewgf.gg/player/3qtdnHGhGJQQ" // ganti dengan link profil EWGF pemain
  },

{
    nickname: "Dev",
    rank: "Tekken Emperor",
    main: "Kunimitsu",
    quotes: "",
    ewgfProfile: ""
  },
  {
    nickname: "Super Ksoo",
    rank: "Tekken God",
    main: "Leo",
    quotes: "",
    ewgfProfile: "https://www.ewgf.gg/player/4LiD7tdA3maT"
  },
  {
    nickname: "eugeo_lucis",
    rank: "Non Ranked Player",
    main: "Lili, Nina, Asuka",
    quotes: "じっとしていたってどうにもならない！",
    ewgfProfile: ""
  },
  {
    nickname: "Holybangsat",
    rank: "God of Destruction II",
    main: "Yoshimitsu",
    quotes: "buang skripsi, main tekken",
    ewgfProfile: ""
  },
  {
    nickname: "RVine.",
    rank: "Flame Ruler",
    main: "Heihachi, Hwoarang",
    quotes: "",
    ewgfProfile: "https://ewgf.gg/player/399Q5fdhft5M"
  },
  {
    nickname: "Tora_",
    rank: "God of Destruction",
    main: "Victor",
    quotes: "Oh là là!",
    ewgfProfile: "https://www.ewgf.gg/player/4bMLL578jEr8"
  },
  {
    nickname: "Crodius Oji-san",
    rank: "God of Destruction II",
    main: "Feng, Bob",
    quotes: "Dig In",
    ewgfProfile: "https://ewgf.gg/player/4nHQY2hGJ8EQ"
  },
  {
    nickname: "TMA | Megatron",
    rank: "God of Destruction II",
    main: "Dragunov",
    quotes: "",
    ewgfProfile: "https://ewgf.gg/player/2RYmjGMqLtNr"
  },
  {
    nickname: "March",
    rank: "Tekken King",
    main: "Lili",
    quotes: ".",
    ewgfProfile: ""
  },
  {
    nickname: "Haizan",
    rank: "God of Destruction III",
    main: "Xiaoyu",
    quotes: "Ajarin aku puh.",
    ewgfProfile: "https://ewgf.gg/player/3tnNrGq5QE62"
  },
  {
    nickname: "Aerial",
    rank: "God of Destruction II",
    main: "Dragunov",
    quotes: "its never over until is over",
    ewgfProfile: "https://ewgf.gg/player/4HA7r8eBHi8h"
  }
];


// untuk urutan rank

const RANK_ORDER = [
  "God of Destruction ∞ (Infinite / Ouroboros)",
  "God of Destruction VII",
  "God of Destruction VI",
  "God of Destruction V",
  "God of Destruction IV",
  "God of Destruction III",
  "God of Destruction II",
  "God of Destruction I",
  "God of Destruction",
  "Tekken God Supreme",
  "Tekken God",
  "Tekken Emperor",
  "Tekken King",
  "Bushin",
  "Kishin",
  "Raijin",
  "Fujin",
  "Battle Ruler",
  "Flame Ruler",
  "Mighty Ruler",
  "Tenryu",
  "Shinryu",
  "Garyu",
  "Eliminator",
  "Destroyer",
  "Vanquisher",
  "Dominator",
  "Assailant",
  "Warrior",
  "Cavalry",
  "Ranger",
  "Brawler",
  "Combatant",
  "Strategist",
  "Fighter",
  "2nd Dan",
  "1st Dan",
  "Beginner"
];

let currentSort = "rank-desc";



const translations = {
  id: {
    navHome: "Beranda",
    navAbout: "Tentang",
    navRoster: "Pemain",

    heroEyebrow: "KOMUNITAS TEKKEN · MEDAN, SUMATERA UTARA, INDONESIA",
    heroLine1: "ONE COMMUNITY.",
    heroLine2: "ONE FIGHT.",
    heroDescription:
      "Tempat para pemain Tekken Medan terhubung, berkembang, dan bertanding bersama.",
    heroButton: "LIHAT ROSTER",
    learnMore: "Kenali komunitas",
    heroBottomLeft: "DIBANGUN OLEH PEMAIN, UNTUK PEMAIN.",

    aboutEyebrow: "TENTANG KAMI",
    aboutTitle:
      'Built by players.<br><span class="muted">United by Tekken.</span>',
    aboutText:
      "Tekken Medan Alliance adalah komunitas bagi para pemain Tekken di Medan dan sekitarnya. Kami hadir untuk mempertemukan pemain, berbagi pengalaman, dan membangun lingkungan kompetitif yang positif.",
    aboutNote: "Bersama di arena. Bertumbuh sebagai komunitas.",

    rosterEyebrow: "DAFTAR PEMAIN",
    rosterTitle: 'Meet the <span class="accent">roster.</span>',
    rosterIntro:
      "Kenali para pemain yang menjadi bagian dari Tekken Medan Alliance.",

    searchPlaceholder:
      "Cari nickname, rank, karakter, atau quotes...",
    sortLabel: "Urutkan:",
    sortRankHigh: "Rank tertinggi",
    sortRankLow: "Rank terendah",
    sortAZ: "Nickname A-Z",
    sortZA: "Nickname Z-A",
    thPlayer: "NICKNAME",
    thRank: "HIGHEST RANK",
    thMain: "MAIN CHAR",
    thQuotes: "QUOTES",

    emptyTitle: "Roster segera hadir.",
    emptyText:
      "Data pemain belum ditambahkan. Daftarkan pemain komunitas di file script.js.",
    noResults: "Tidak ada pemain yang cocok dengan pencarian.",
    thEwgf: "EWGF PROFILE",
    tableFootnote:
      "Data roster dapat diperbarui oleh pengelola website.",

    joinEyebrow: "TEKKEN MEDAN ALLIANCE",
    joinTitle: "See you in the arena.",
    joinText:
      "Terus bermain, terus berkembang, dan dukung komunitas lokal.",

    footerText:
      "Komunitas Tekken Medan, Sumatera Utara, Indonesia.",

    playerCount: (n) => `${n} PEMAIN`
  },

  en: {
    navHome: "Home",
    navAbout: "About",
    navRoster: "Roster",

    heroEyebrow: "TEKKEN COMMUNITY · MEDAN, INDONESIA",
    heroLine1: "ONE COMMUNITY.",
    heroLine2: "ONE FIGHT.",
    heroDescription:
      "A place for Tekken players in Medan to connect, improve, and compete together.",
    heroButton: "VIEW THE ROSTER",
    learnMore: "Meet the community",
    heroBottomLeft: "BUILT BY PLAYERS, FOR PLAYERS.",
    thEwgf: "EWGF PROFILE",
    aboutEyebrow: "ABOUT US",
    aboutTitle:
      'Built by players.<br><span class="muted">United by Tekken.</span>',
    aboutText:
      "Tekken Medan Alliance is a community for Tekken players in Medan and surrounding areas. We bring players together, share experience, and build a positive competitive environment.",
    aboutNote: "Together in the arena. Growing as a community.",

    rosterEyebrow: "PLAYER DIRECTORY",
    rosterTitle: 'Meet the <span class="accent">roster.</span>',
    rosterIntro:
      "Meet the players who are part of Tekken Medan Alliance.",

    searchPlaceholder:
      "Search nickname, rank, character, or quotes...",
    sortLabel: "Sort by:",
    sortRankHigh: "Highest rank",
    sortRankLow: "Lowest rank",
    sortAZ: "Nickname A-Z",
    sortZA: "Nickname Z-A",
    thPlayer: "NICKNAME",
    thRank: "HIGHEST RANK",
    thMain: "MAIN CHAR",
    thQuotes: "QUOTES",

    emptyTitle: "Roster coming soon.",
    emptyText:
      "Player data has not been added yet. Add community players in script.js.",
    noResults: "No players match your search.",

    tableFootnote:
      "Roster information can be updated by the website administrator.",

    joinEyebrow: "TEKKEN MEDAN ALLIANCE",
    joinTitle: "See you in the arena.",
    joinText:
      "Keep playing, keep improving, and support the local community.",

    footerText:
      "Tekken community in Medan, North Sumatra, Indonesia.",

    playerCount: (n) => `${n} PLAYERS`
  }
};

let currentLanguage = "id";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  const dictionary = translations[language];

  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }
  });

  $$("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (dictionary[key] !== undefined) {
      element.placeholder = dictionary[key];
    }
  });

  $("#languageToggle").textContent =
    language === "id" ? "EN" : "ID";

  $("#languageToggle").setAttribute(
    "aria-label",
    language === "id"
      ? "Switch to English"
      : "Ganti ke Bahasa Indonesia"
  );

  renderPlayers($("#playerSearch").value);
}

function initials(name) {
  return String(name || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

// function renderPlayers(searchTerm = "") {

// }


function renderPlayers(searchTerm = "") {
  const dictionary = translations[currentLanguage];
  const query = searchTerm.trim().toLowerCase();

  // Filter berdasarkan data pemain, termasuk quotes.
  const filteredPlayers = PLAYERS.filter((player) => {
    const searchable = [
      player.nickname,
      player.realName,
      player.rank,
      player.main,
      player.quotes,
      player.ewgfProfile
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchable.includes(query);
  });

  // Cari posisi rank di daftar rank resmi yang ditentukan.
  function getRankIndex(rank) {
    return RANK_ORDER.findIndex(
      (item) => item.toLowerCase() === String(rank || "").trim().toLowerCase()
    );
  }

  // Urutkan hasil pencarian sesuai pilihan dropdown.
  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    if (currentSort === "name-asc") {
      return String(a.nickname || "").localeCompare(
        String(b.nickname || ""),
        "en",
        { sensitivity: "base" }
      );
    }

    if (currentSort === "name-desc") {
      return String(b.nickname || "").localeCompare(
        String(a.nickname || ""),
        "en",
        { sensitivity: "base" }
      );
    }

    const rankA = getRankIndex(a.rank);
    const rankB = getRankIndex(b.rank);

    // Rank yang tidak dikenal ditempatkan di bagian bawah.
    if (rankA === -1 && rankB !== -1) return 1;
    if (rankB === -1 && rankA !== -1) return -1;
    if (rankA === -1 && rankB === -1) return 0;

    // Angka indeks lebih kecil berarti rank lebih tinggi.
    return currentSort === "rank-desc"
      ? rankA - rankB
      : rankB - rankA;
  });

  $("#rosterCount").textContent =
    dictionary.playerCount(sortedPlayers.length);

  const tbody = $("#rosterBody");

  tbody.innerHTML = sortedPlayers.map((player) => `
    <tr>
      <td>
        <div class="player-cell">
          <span class="player-avatar" aria-hidden="true">
            ${escapeHTML(initials(player.nickname))}
          </span>
          <span>
            <span class="player-name">
              ${escapeHTML(player.nickname || "—")}
            </span>
            ${
              player.realName
                ? `<span class="player-sub">${escapeHTML(player.realName)}</span>`
                : ""
            }
          </span>
        </div>
      </td>

      <td>
        <span class="rank-text">
          ${escapeHTML(player.rank || "—")}
        </span>
      </td>

      <td>
        <span class="character-tag">
          ${escapeHTML(player.main || "—")}
        </span>
      </td>

      <td>
        <span class="quote-text">
          ${escapeHTML(player.quotes || "—")}
        </span>
      </td>
      
      <td>
        ${
          player.ewgfProfile && /^https?:\/\//i.test(player.ewgfProfile)
            ? `<a
                 class="ewgf-link"
                 href="${escapeHTML(player.ewgfProfile)}"
                 target="_blank"
                 rel="noopener noreferrer"
               >View Profile ↗</a>`
            : '<span class="quote-empty">—</span>'
        }
      </td>

    </tr>
  `).join("");

  const emptyState = $("#emptyState");

  if (sortedPlayers.length === 0) {
    emptyState.classList.add("visible");

    const hasSearch = query.length > 0;

    emptyState.querySelector("h3").textContent =
      hasSearch ? dictionary.noResults : dictionary.emptyTitle;

    emptyState.querySelector("p").textContent = hasSearch
      ? (
          currentLanguage === "id"
            ? "Coba kata kunci lain."
            : "Try another search term."
        )
      : dictionary.emptyText;
  } else {
    emptyState.classList.remove("visible");
  }
}



// Ganti bahasa
$("#languageToggle").addEventListener("click", () => {
  applyLanguage(currentLanguage === "id" ? "en" : "id");
});

// Pencarian pemain
$("#playerSearch").addEventListener("input", (event) => {
  renderPlayers(event.target.value);
});

// Menu navigasi mobile
const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuToggle.textContent = isOpen ? "×" : "☰";
});

// Tutup menu setelah tautan navigasi dipilih
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Tahun otomatis di footer
$("#currentYear").textContent = new Date().getFullYear();

// Tampilkan roster saat halaman dibuka
applyLanguage("id");
$("#playerSort").addEventListener("change", (event) => {
  currentSort = event.target.value;
  renderPlayers($("#playerSearch").value);
});