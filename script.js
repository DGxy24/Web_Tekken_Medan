
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
  // indo
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
    navActivity: "Aktivitas",
    activityTitle: 'Recent <span class="accent">activity.</span>',
    activityEyebrow: "RIWAYAT KOMPETITIF",
    activityIntro: "Turnamen dan kompetisi Tekken Medan Alliance.",
    activityViewAll: "LIHAT SEMUA AKTIVITAS",
    activityPageTitle: 'Semua <span class="accent">aktivitas.</span>',
    activityPageIntro: "Seluruh riwayat turnamen, diurutkan dari tanggal terbaru.",
    activityBack: "KEMBALI KE BERANDA",
    footerMadeBy: "Website dibuat oleh",
    playerCount: (n) => `${n} PEMAIN`
  },
//eng
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
    navActivity: "Activities",
    activityEyebrow: "COMPETITIVE HISTORY",
    activityTitle: 'Recent <span class="accent">activity.</span>',
    activityIntro: "Tournaments and competitions from Tekken Medan Alliance.",
    activityViewAll: "VIEW ALL ACTIVITIES",
    activityPageTitle: 'All <span class="accent">activities.</span>',
    activityPageIntro: "All tournament records, sorted from newest to oldest.",
    activityBack: "BACK TO HOME",
    footerMadeBy: "Website created by",
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

const languageToggle = $("#languageToggle");

if (languageToggle) {
  languageToggle.textContent = language === "id" ? "EN" : "ID";

  languageToggle.setAttribute(
    "aria-label",
    language === "id"
      ? "Switch to English"
      : "Ganti ke Bahasa Indonesia"
  );
}

renderPlayers($("#playerSearch")?.value || "");
renderAllActivityLists();
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
  const tbody = $("#rosterBody");

  // Halaman aktivitas tidak memiliki tabel roster.
  if (!tbody) return;

  const dictionary = translations[currentLanguage];
  const query = String(searchTerm || "").trim().toLowerCase();

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

  function getRankIndex(rank) {
    return RANK_ORDER.findIndex(
      (item) =>
        item.toLowerCase() ===
        String(rank || "").trim().toLowerCase()
    );
  }

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

    if (rankA === -1 && rankB !== -1) return 1;
    if (rankB === -1 && rankA !== -1) return -1;
    if (rankA === -1 && rankB === -1) return 0;

    return currentSort === "rank-desc"
      ? rankA - rankB
      : rankB - rankA;
  });

  const rosterCount = $("#rosterCount");

  if (rosterCount) {
    rosterCount.textContent =
      dictionary.playerCount(sortedPlayers.length);
  }

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
          player.ewgfProfile &&
          /^https?:\/\//i.test(player.ewgfProfile)
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

  if (!emptyState) return;

  if (sortedPlayers.length === 0) {
    emptyState.classList.add("visible");

    const heading = emptyState.querySelector("h3");
    const paragraph = emptyState.querySelector("p");
    const hasSearch = query.length > 0;

    if (heading) {
      heading.textContent = hasSearch
        ? dictionary.noResults
        : dictionary.emptyTitle;
    }

    if (paragraph) {
      paragraph.textContent = hasSearch
        ? (
            currentLanguage === "id"
              ? "Coba kata kunci lain."
              : "Try another search term."
          )
        : dictionary.emptyText;
    }
  } else {
    emptyState.classList.remove("visible");
  }
}




// Ganti bahasa
const languageToggle = $("#languageToggle");

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "id" ? "en" : "id");
  });
}
// Pencarian pemain
const playerSearch = $("#playerSearch");

if (playerSearch) {
  playerSearch.addEventListener("input", (event) => {
    renderPlayers(event.target.value);
  });
}

// Menu navigasi mobile
const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Tahun otomatis di footer
$("#currentYear").textContent = new Date().getFullYear();

// Tampilkan roster saat halaman dibuka
const playerSort = $("#playerSort");

if (playerSort) {
  playerSort.addEventListener("change", (event) => {
    currentSort = event.target.value;
    renderPlayers(playerSearch?.value || "");
  });
}


// activity




// Data Aktivitas
const ACTIVITIES = [
  {
    name: "Axis Cup Medan 2026",
    date: "2026-09-27",
    location: "Mall Manhattan Medan",
    instagramUrl: "https://www.instagram.com/p/DdQhROlTuJ2/",
    bracketUrl: "https://challonge.com/id/ag95t8fy"
  },
  {
    name: "Tekken 8 Community Tournament! 💥",
    date: "2026-08-08",
    location: "AGRES.ID Medan Jl. Perintis Kemerdekaan No.11, Perintis, Kec. Medan Timur, Kota Medan",
    instagramUrl: "https://www.instagram.com/p/DbpQ3P8T4N3/",
    bracketUrl: "https://challonge.com/id/jse9bj9s"
  },
  {
    name: "🎮 TM(c)AT S4🎮",
    date: "2026-05-03",
    location: "Delipark Medan | Terra Atrium (LG Floor)",
    instagramUrl: "https://www.instagram.com/p/DXMXwZrk56n/?img_index=1",
    bracketUrl: "https://challonge.com/TMATS4"
  },
    {
    name: "⭐ KomputerMedan X Colorful Tekken 8 Monthly Tournament ⭐",
    date: "2025-07-27",
    location: "Komputer Medan Komplek Cemara Asri. Jl. Boulevard Timur Blok Q5, No. 88 B-C, Pecut, Sei, Medan Estate, Silau Tua, Medan, Sumatera Utara",
    instagramUrl: "https://www.instagram.com/p/DMHYy3LTquq/",
    bracketUrl: "https://challonge.com/kmxct_8"
  },
  {
    name: "🌟Tekken 8 Competition Plaza Millennium",
    date: "2026-04-12",
    location: "Main Atrium Plaza Millennium Jl. Kapten Muslim No.111",
    instagramUrl: "https://www.instagram.com/p/DWOA9eQEyqA/",
    bracketUrl: "https://challonge.com/T8Millenium"
  }


];

// {
//     name: "",
//     date: "2026-05-03",
//     location: "",
//     instagramUrl: "",
//     bracketUrl: ""
//   }


function renderActivities(containerId, limit = Infinity) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const lang = document.documentElement.lang === "en" ? "en" : "id";

  const labels = {
    category: "TOURNAMENT",
    date: lang === "en" ? "TOURNAMENT DATE" : "TANGGAL TURNAMEN",
    location: lang === "en" ? "LOCATION" : "LOKASI",
    instagram: "Instagram Post",
    bracket: lang === "en" ? "View Bracket" : "Lihat Bracket",
    note: lang === "en" ? "Note" : "Catatan",
    noActivities: lang === "en"
      ? "No activities have been added yet."
      : "Belum ada aktivitas yang ditambahkan."
  };

  const activities = [...ACTIVITIES]
    .filter(item =>
      item.name &&
      /^\d{4}-\d{2}-\d{2}$/.test(item.date) &&
      !Number.isNaN(Date.parse(`${item.date}T00:00:00Z`))
    )
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);

  const formatter = new Intl.DateTimeFormat(
    lang === "en" ? "en-US" : "id-ID",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    }
  );

  const icon = (name) => {
    const paths = {
      trophy: `
        <path d="M8 21h8"/>
        <path d="M12 17v4"/>
        <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/>
        <path d="M7 6H4v3a4 4 0 0 0 4 4"/>
        <path d="M17 6h3v3a4 4 0 0 1-4 4"/>
      `,
      calendar: `
        <rect x="3" y="5" width="18" height="16" rx="2"/>
        <path d="M16 3v4M8 3v4M3 11h18"/>
        <path d="M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01"/>
      `,
      pin: `
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/>
        <circle cx="12" cy="10" r="2.5"/>
      `,
      instagram: `
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <path d="M17.5 6.5h.01"/>
      `,
      external: `
        <path d="M14 3h7v7"/>
        <path d="M10 14 21 3"/>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      `
    };

    return `
      <svg viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true">
        ${paths[name]}
      </svg>
    `;
  };

  function createAction(url, type, label, iconName) {
    const validUrl = /^https?:\/\//i.test(url || "");

    if (!validUrl) {
      return `
        <span class="activity-link ${type} is-disabled"
          aria-disabled="true">
          ${icon(iconName)}
          <span>${label} ↗</span>
        </span>
      `;
    }

    return `
      <a class="activity-link ${type}"
        href="${escapeHTML(url)}"
        target="_blank"
        rel="noopener noreferrer">
        ${icon(iconName)}
        <span>${label} ↗</span>
      </a>
    `;
  }

  if (activities.length === 0) {
    container.innerHTML = `
      <p class="activity-empty">${labels.noActivities}</p>
    `;
    return;
  }

  container.innerHTML = activities.map(item => {
    const formattedDate = formatter.format(
      new Date(`${item.date}T00:00:00Z`)
    );

    const note = item.note
      ? `<p class="activity-note">${escapeHTML(item.note)}</p>`
      : "";

    return `
      <article class="activity-card">
        <div class="activity-card-header">
          <div class="activity-card-icon">
            ${icon("trophy")}
          </div>

          <div class="activity-card-title">
            <span class="activity-category">${labels.category}</span>
            <h3>${escapeHTML(item.name)}</h3>
          </div>
        </div>

        <div class="activity-details">
          <div class="activity-detail">
            <span class="activity-detail-icon">
              ${icon("calendar")}
            </span>
            <div>
              <span class="activity-detail-label">${labels.date}</span>
              <p>${escapeHTML(formattedDate)}</p>
            </div>
          </div>

          <div class="activity-detail">
            <span class="activity-detail-icon">
              ${icon("pin")}
            </span>
            <div>
              <span class="activity-detail-label">${labels.location}</span>
              <p>${escapeHTML(item.location || "—")}</p>
            </div>
          </div>
        </div>

        <div class="activity-actions">
          ${createAction(
            item.instagramUrl,
            "instagram",
            labels.instagram,
            "instagram"
          )}

          ${createAction(
            item.bracketUrl,
            "bracket",
            labels.bracket,
            "external"
          )}
        </div>

        ${note}
      </article>
    `;
  }).join("");
}



function renderAllActivityLists() {
  // Beranda: hanya tampilkan 2 turnamen terbaru.
  renderActivities("recentActivityList", 2);

  // Halaman aktivitas: tampilkan seluruh turnamen.
  renderActivities("allActivityList");
}
renderPlayers();
// Render aktivitas saat halaman dibuka.
renderAllActivityLists();

// Terapkan bahasa awal setelah seluruh data dan fungsi tersedia.
applyLanguage("id");


