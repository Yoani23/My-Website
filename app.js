/**
 * CAREER DIARY & MEMORY CAPSULE
 * Perjalanan Saya - Botanical Floral Cozy Diary Engine
 */

// ============================================================================
// HELPER: Generate dynamic initial sample entries matching today's month & day
// ============================================================================

function generateDefaultEntries() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonthStr = String(today.getMonth() + 1).padStart(2, '0');
  const currentDayStr = String(today.getDate()).padStart(2, '0');
  const todayDateStr = `${currentYear}-${currentMonthStr}-${currentDayStr}`;

  return [
    {
      id: "entry-today-memory",
      date: todayDateStr,
      title: "Menulis Babak Baru: Membangun Jejak & Refleksi Karir Hari Ini",
      role: "Staff Engineer & Tech Chronicler",
      company: "Perjalanan Saya",
      mood: "tumbuh",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
      content: `Hari ini menjadi titik awal yang istimewa. Aku memutuskan untuk mencatat setiap babak perjalanan karirku ke dalam buku harian ini. Bukan semata-mata mencatat keberhasilan besar, namun mendokumentasikan rasa ragu yang berhasil dilalui, percakapan bermakna dengan rekan kerja, dan keputusan-keputusan penting yang diambil.\n\nSetiap langkah kecil hari ini adalah kelopak bunga yang sedang mekar menuju masa depan.`,
      futureMessage: "Semoga ketika membaca ini beberapa tahun ke depan di tanggal yang sama, kamu tetap rendah hati, bersemangat belajar, dan selalu bersyukur.",
      lessons: "1. Dokumentasikan prosesmu, karena ingatan manusia terbatas.\n2. Konsistensi dalam langkah-langkah kecil jauh lebih bermakna daripada lompatan sesaat.",
      claps: 18
    },
    {
      id: "entry-2yr-ago",
      date: `${currentYear - 2}-${currentMonthStr}-${currentDayStr}`,
      title: "Promosi Menjadi Lead Developer & Mengatasi Imposter Syndrome",
      role: "Lead Software Engineer",
      company: "Nusantara Digital",
      mood: "bangga",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
      content: `Dua tahun yang lalu pada hari ini, manajemen mempercayakan peran baru: memimpin tim engineering yang beranggotakan 6 orang.\n\nTransisi dari seorang individual contributor menjadi team lead terasa menegangkan. Suara di kepalaku sempat berbisik: *apakah aku benar-benar pantas?*\n\nTapi hari ini aku mengerti bahwa kepemimpinan bukan tentang merasa paling pintar di ruangan, melainkan tentang memberdayakan orang lain agar bisa bersinar bersama.`,
      futureMessage: "Ingatlah bahwa kesuksesan seorang pemimpin diukur dari berapa banyak orang yang terbantu bertumbuh karena kehadiranmu.",
      lessons: "1. Fokus pada pertumbuhan tim, bukan hanya kode pribadi.\n2. Empati dan komunikasi terbuka menyelesaikan sebagian besar hambatan.",
      claps: 35
    },
    {
      id: "entry-4yr-ago",
      date: `${currentYear - 4}-${currentMonthStr}-${currentDayStr}`,
      title: "Hari Pertama di Startup: Rasa Takut dan Semangat Membara",
      role: "Junior Developer",
      company: "TechNovation Labs",
      mood: "ambisius",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      content: `Empat tahun lalu pada tanggal dan bulan yang sama, aku resmi melangkah ke dunia industri teknologi. Perasaanku campur aduk antara rasa antusias dan ketakutan: *apakah aku cukup mampu?*\n\nKetika mentor pertamaku berkata bahwa yang terpenting adalah rasa ingin tahu dan tidak takut bertanya, semua beban di pundak terasa lebih ringan.\n\nCommit pertama berhasil di-merge ke branch staging malam itu, sebuah kemenangan kecil yang sangat berarti.`,
      futureMessage: "Jangan pernah lupakan bagaimana kamu memulai dari nol tanpa tahu apa-apa selain niat belajar.",
      lessons: "1. Bertanya dengan konteks yang jelas adalah tanda kecerdasan, bukan kelemahan.\n2. Nikmati setiap fase pembelajaran.",
      claps: 26
    },
    {
      id: "entry-failure-reflection",
      date: `${currentYear - 1}-03-15`,
      title: "Ketika Rencana Runtuh: Refleksi Kegagalan Deployment Skala Besar",
      role: "Senior Engineer",
      company: "Nusantara Digital",
      mood: "menantang",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      content: `Hari ini sistem backend kami mengalami lonjakan trafik tidak terduga saat rilis promo nasional, dan tabel utama database sempat terkunci.\n\nPada saat genting seperti itu, tim kami tetap berkepala dingin. Kami melakukan rollback, menganalisis akar masalah bersama, dan merancang perbaikan hingga tuntas.\n\nKami tidak mencari siapa yang salah, kami mencari bagaimana membuat sistem menjadi lebih tangguh.`,
      futureMessage: "Jangan pernah malu dengan kegagalan teknis. Yang terpenting adalah bagaimana caramu bangkit dan belajar darinya.",
      lessons: "1. Budaya blameless post-mortem adalah kunci tim yang sehat.\n2. Selalu uji sistem dengan beban ekstrem sebelum peluncuran besar.",
      claps: 21
    },
    {
      id: "entry-clarity",
      date: `${currentYear - 1}-07-20`,
      title: "Menemukan Kembali 'Why': Keseimbangan Ambisi & Ketenangan Jiwa",
      role: "Engineering Lead",
      company: "Nusantara Digital",
      mood: "pencerahan",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80",
      content: `Sore tadi aku menyempatkan diri duduk di kedai kopi favorit tanpa laptop, hanya berbekal buku catatan. Aku merenungkan kembali apa yang sebenarnya membuatku mencintai profesi ini: rasa takjub ketika karya logika kita mampu mempermudah hidup banyak orang.\n\nKarir adalah maraton panjang, menjaga energi dan kesehatan mental adalah bagian dari profesionalisme sejati.`,
      futureMessage: "Jika kamu merasa lelah, istirahatlah sejenak. Ambisimu tidak akan hilang hanya karena kamu bernapas dan menikmati hari ini.",
      lessons: "1. Produktivitas sejati membutuhkan istirahat yang berkualitas.\n2. Sambungkan pekerjaan teknis dengan dampak nyata bagi sesama.",
      claps: 44
    }
  ];
}

const DEFAULT_PROFILE = {
  name: "Yoan",
  headline: "Software Engineer & Life-Long Learner",
  bio: "Membangun karir bukan hanya tentang mendaki tangga jabatan, melainkan tentang jejak kebaikan yang ditinggalkan, ketangguhan saat terjatuh, dan cerita-cerita kecil yang layak untuk diingat.",
  location: "Jakarta, Indonesia",
  role: "Tech Professional"
};

const STORAGE_KEYS = {
  ENTRIES: "career_diary_entries_v4",
  PROFILE: "career_diary_profile_v4"
};

// ============================================================================
// APP STATE
// ============================================================================

const state = {
  entries: [],
  profile: { ...DEFAULT_PROFILE },
  currentFilter: "all",
  currentYearFilter: "all",
  searchQuery: "",
  selectedDate: null,
  activeReaderEntryId: null,
  calendarDate: new Date(),
  systemToday: new Date()
};

// ============================================================================
// APP INITIALIZATION
// ============================================================================

function initApp() {
  state.systemToday = new Date();
  state.calendarDate = new Date();
  
  loadData();
  renderApp();
  setupDomListeners();
  createFloatingPetals();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// ============================================================================
// FLOATING PETALS GENERATOR (BUNGA & KELOPAK JATUH HALUS)
// ============================================================================

function createFloatingPetals() {
  const container = document.getElementById("petalsContainer");
  if (!container) return;

  container.innerHTML = "";
  const totalPetals = 18;
  const types = ["petal", "petal petal-sage", "petal petal-gold"];

  for (let i = 0; i < totalPetals; i++) {
    const petal = document.createElement("div");
    const typeClass = types[i % types.length];
    petal.className = typeClass;

    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 12; // 8s to 20s
    const delay = Math.random() * 12;
    const size = 12 + Math.random() * 16; // 12px to 28px

    petal.style.left = `${left}vw`;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.3}px`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;

    container.appendChild(petal);
  }
}

// ============================================================================
// DATA STORAGE & RETRIEVAL
// ============================================================================

function loadData() {
  try {
    const savedEntries = localStorage.getItem(STORAGE_KEYS.ENTRIES);
    if (savedEntries) {
      const parsed = JSON.parse(savedEntries);
      if (Array.isArray(parsed) && parsed.length > 0) {
        state.entries = parsed;
      } else {
        state.entries = generateDefaultEntries();
        saveEntries();
      }
    } else {
      state.entries = generateDefaultEntries();
      saveEntries();
    }
  } catch (e) {
    console.error("Gagal membaca localStorage entries:", e);
    state.entries = generateDefaultEntries();
  }

  try {
    const savedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE);
    if (savedProfile) {
      state.profile = { ...DEFAULT_PROFILE, ...JSON.parse(savedProfile) };
    } else {
      state.profile = { ...DEFAULT_PROFILE };
      saveProfile();
    }
  } catch (e) {
    console.error("Gagal membaca localStorage profile:", e);
    state.profile = { ...DEFAULT_PROFILE };
  }
}

function saveEntries() {
  try {
    localStorage.setItem(STORAGE_KEYS.ENTRIES, JSON.stringify(state.entries));
  } catch (e) {
    console.error("Gagal menyimpan ke localStorage:", e);
    showToast("Penyimpanan lokal penuh atau tidak tersedia.", "error");
  }
}

function saveProfile() {
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(state.profile));
  } catch (e) {
    console.error("Gagal menyimpan profile ke localStorage:", e);
  }
}

// ============================================================================
// RENDERING
// ============================================================================

function renderApp() {
  renderHeaderDate();
  renderProfile();
  renderStats();
  renderCalendar();
  renderOnThisDayBanner();
  renderTimeline();
  renderYearDropdown();
  renderEntriesGrid();
}

function renderHeaderDate() {
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const formatted = state.systemToday.toLocaleDateString('id-ID', options);
  setText("headerTodayText", `Hari ini: ${formatted}`);

  const todayStr = formatDateToInput(state.systemToday);
  const timeMachineInput = document.getElementById("timeMachineDatePicker");
  if (timeMachineInput && !timeMachineInput.value) {
    timeMachineInput.value = todayStr;
  }
  const formDate = document.getElementById("formDate");
  if (formDate && !formDate.value) {
    formDate.value = todayStr;
  }
}

function renderProfile() {
  const p = state.profile;
  setText("displayAuthorName", `${p.name}'s Diary`);
  setText("displayAuthorBio", p.bio);
  setText("profileAuthorName", p.name);
  setText("profileAuthorHeadline", p.headline);
  setText("profileFullBio", p.bio);
  setText("profileLocation", p.location || "Indonesia");
  setText("profileCurrentRole", p.role || "Professional");

  const initialEl = document.getElementById("avatarInitial");
  if (initialEl && p.name) {
    initialEl.textContent = p.name.charAt(0).toUpperCase();
  }

  setValue("settingAuthorName", p.name);
  setValue("settingAuthorHeadline", p.headline);
  setValue("settingAuthorBio", p.bio);
}

function renderStats() {
  const total = state.entries.length;
  const flashbacks = getFlashbackEntries().length;

  const years = state.entries.map(e => {
    try { return parseLocalDate(e.date).getFullYear(); } catch (err) { return state.systemToday.getFullYear(); }
  });
  const minYear = years.length ? Math.min(...years) : state.systemToday.getFullYear();
  const maxYear = years.length ? Math.max(...years) : state.systemToday.getFullYear();
  const span = years.length > 0 ? Math.max(1, maxYear - minYear + 1) : 1;

  let totalLessons = 0;
  state.entries.forEach(e => {
    if (e.lessons) {
      const count = e.lessons.split('\n').filter(l => l.trim().length > 0).length;
      totalLessons += count;
    }
  });

  setText("statTotalEntries", total);
  setText("statFlashbacks", flashbacks);
  setText("statYearsSpan", `${span} Thn`);
  setText("statLessonsCount", totalLessons);
  setText("navMemoryCountBadge", flashbacks);
}

// ============================================================================
// ON THIS DAY (KILAS BALIK TANGGAL SAMA)
// ============================================================================

function getFlashbackEntries(targetDate = state.systemToday) {
  const targetMonth = targetDate.getMonth();
  const targetDay = targetDate.getDate();
  const currentYear = targetDate.getFullYear();

  return state.entries.filter(entry => {
    if (!entry || !entry.date) return false;
    const entryDate = parseLocalDate(entry.date);
    return entryDate.getMonth() === targetMonth &&
           entryDate.getDate() === targetDay &&
           entryDate.getFullYear() < currentYear;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function renderOnThisDayBanner() {
  const container = document.getElementById("flashbackCardsContainer");
  const pillText = document.getElementById("flashbackPillText");
  const countText = document.getElementById("memoryCountText");
  const titleHeading = document.getElementById("bannerTitleHeading");
  if (!container) return;

  const targetDate = state.selectedDate ? state.selectedDate : state.systemToday;
  const dayName = targetDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long' });
  const flashbacks = getFlashbackEntries(targetDate);

  if (pillText) pillText.textContent = `🌸 KILAS BALIK: ${dayName.toUpperCase()}`;

  if (flashbacks.length > 0) {
    if (countText) countText.textContent = `Ditemukan ${flashbacks.length} kenangan di tanggal dan bulan ini 🌸`;
    if (titleHeading) titleHeading.textContent = `"Di Tanggal Ini Beberapa Tahun yang Lalu..."`;

    container.innerHTML = flashbacks.map(entry => {
      const entryDate = parseLocalDate(entry.date);
      const yearsAgo = targetDate.getFullYear() - entryDate.getFullYear();
      const moodLabel = getMoodLabel(entry.mood);

      return `
        <div class="flashback-card diary-card-framed" onclick="openReaderModal('${entry.id}')">
          <div class="washi-tape washi-tape-top-center washi-rose"></div>
          <div>
            ${entry.image ? `
              <div class="flashback-card-cover-wrapper">
                <img src="${escapeHtml(entry.image)}" class="flashback-card-cover" alt="Foto Kenangan">
              </div>
            ` : ''}
            <div class="flashback-card-meta">
              <span class="years-ago-badge">🕰️ ${yearsAgo} Tahun Lalu (${entryDate.getFullYear()})</span>
              <span class="mood-badge" data-mood="${entry.mood}">${moodLabel}</span>
            </div>
            <h3 class="flashback-card-title">${escapeHtml(entry.title)}</h3>
            <p class="flashback-card-excerpt">${escapeHtml(entry.content)}</p>
          </div>
          <div class="flashback-card-footer">
            <span class="flashback-role-text">${escapeHtml(entry.role || 'Karir')}</span>
            <span class="read-link-action">Baca Lembar Cerita &rarr;</span>
          </div>
        </div>
      `;
    }).join('');
  } else {
    if (countText) countText.textContent = `Belum ada catatan masa lalu di tanggal ini`;
    if (titleHeading) titleHeading.textContent = `Hari Baru untuk Menulis Kenangan Baru 🌸`;

    container.innerHTML = `
      <div class="empty-flashback-box">
        <div class="empty-flashback-icon">🌸</div>
        <h4 class="empty-flashback-title">Belum Ada Catatan Masa Lalu pada ${dayName}</h4>
        <p class="empty-flashback-text">
          Tuliskan apa yang kamu hadapi dan rasakan hari ini, agar di tahun-tahun mendatang momen indah ini dapat kamu kenang kembali.
        </p>
        <button class="btn btn-primary btn-sm btn-glow" onclick="openWriterModal(null, '${formatDateToInput(targetDate)}')">
          🌸 Tulis Diary untuk Tanggal Ini
        </button>
      </div>
    `;
  }
}

// ============================================================================
// CALENDAR & TIME MACHINE
// ============================================================================

function renderCalendar() {
  const monthYearDisplay = document.getElementById("calMonthYearDisplay");
  const daysGrid = document.getElementById("calendarDaysGrid");
  if (!daysGrid || !monthYearDisplay) return;

  const currentYear = state.calendarDate.getFullYear();
  const currentMonth = state.calendarDate.getMonth();

  monthYearDisplay.textContent = state.calendarDate.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  daysGrid.innerHTML = "";

  for (let i = firstDay - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    const cell = document.createElement("div");
    cell.className = "cal-day-cell other-month";
    cell.textContent = day;
    daysGrid.appendChild(cell);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement("div");
    cell.className = "cal-day-cell";
    cell.textContent = d;

    const isToday = (currentYear === state.systemToday.getFullYear() &&
                     currentMonth === state.systemToday.getMonth() &&
                     d === state.systemToday.getDate());
    if (isToday) cell.classList.add("is-today");

    const hasMemory = state.entries.some(e => {
      try {
        const entryD = parseLocalDate(e.date);
        return entryD.getMonth() === currentMonth && entryD.getDate() === d;
      } catch (err) {
        return false;
      }
    });
    if (hasMemory) cell.classList.add("has-memory");

    if (state.selectedDate &&
        state.selectedDate.getFullYear() === currentYear &&
        state.selectedDate.getMonth() === currentMonth &&
        state.selectedDate.getDate() === d) {
      cell.classList.add("selected-day");
    }

    cell.onclick = () => {
      selectMemoryDate(new Date(currentYear, currentMonth, d));
    };

    daysGrid.appendChild(cell);
  }
}

function selectMemoryDate(date) {
  state.selectedDate = date;
  const formatted = formatDateToInput(date);
  const input = document.getElementById("timeMachineDatePicker");
  if (input) input.value = formatted;

  renderCalendar();
  renderOnThisDayBanner();
  showToast(`🌸 Menampilkan kilas balik untuk tanggal: ${date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long' })}`, "info");
}

function navigateCalendar(offset) {
  state.calendarDate = new Date(state.calendarDate.getFullYear(), state.calendarDate.getMonth() + offset, 1);
  renderCalendar();
}

function goToSelectedInputDate() {
  const input = document.getElementById("timeMachineDatePicker");
  if (input && input.value) {
    const picked = parseLocalDate(input.value);
    state.calendarDate = new Date(picked.getFullYear(), picked.getMonth(), 1);
    selectMemoryDate(picked);
  }
}

function resetCalendarToToday() {
  state.selectedDate = null;
  state.calendarDate = new Date(state.systemToday);
  const input = document.getElementById("timeMachineDatePicker");
  if (input) input.value = formatDateToInput(state.systemToday);
  renderCalendar();
  renderOnThisDayBanner();
  showToast("🌸 Kembali ke tanggal hari ini.", "info");
}

// ============================================================================
// TIMELINE
// ============================================================================

function renderTimeline() {
  const container = document.getElementById("timelineItemsContainer");
  if (!container) return;

  const sorted = [...state.entries].sort((a, b) => new Date(a.date) - new Date(b.date));

  if (sorted.length === 0) {
    container.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding: 2rem;">Belum ada babak karir yang tercatat 🌸</p>`;
    return;
  }

  container.innerHTML = sorted.map((entry, idx) => {
    const entryDate = parseLocalDate(entry.date);
    const dateFormatted = entryDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    const moodLabel = getMoodLabel(entry.mood);
    const washiClass = idx % 2 === 0 ? "washi-rose" : "washi-sage";

    return `
      <div class="timeline-node">
        <div class="timeline-marker"></div>
        <div class="timeline-card glass-panel diary-card-framed" onclick="openReaderModal('${entry.id}')">
          <div class="washi-tape washi-tape-left ${washiClass}"></div>
          <div class="timeline-card-meta">
            <span class="timeline-date">🗓️ ${dateFormatted}</span>
            <span class="mood-badge" data-mood="${entry.mood}">${moodLabel}</span>
          </div>
          <h3 class="timeline-card-title">${escapeHtml(entry.title)}</h3>
          <div class="timeline-role-company">
            ${escapeHtml(entry.role || 'Karir')} • ${escapeHtml(entry.company || 'Perjalanan')}
          </div>
          <p class="timeline-summary">${escapeHtml(entry.content)}</p>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================================
// ENTRIES GRID, FILTERS & SEARCH
// ============================================================================

function renderYearDropdown() {
  const select = document.getElementById("yearFilterSelect");
  if (!select) return;

  const currentSelection = select.value || "all";
  const years = Array.from(new Set(state.entries.map(e => {
    try { return parseLocalDate(e.date).getFullYear(); } catch (err) { return state.systemToday.getFullYear(); }
  }))).sort((a, b) => b - a);

  let html = `<option value="all">Semua Tahun</option>`;
  years.forEach(y => {
    html += `<option value="${y}" ${currentSelection == y ? 'selected' : ''}>Tahun ${y}</option>`;
  });

  select.innerHTML = html;
}

function getFilteredEntries() {
  const query = (state.searchQuery || "").toLowerCase().trim();
  const filter = state.currentFilter;
  const yearFilter = state.currentYearFilter;
  const targetDate = state.selectedDate || state.systemToday;

  return state.entries.filter(entry => {
    if (!entry || !entry.date) return false;
    const entryDate = parseLocalDate(entry.date);
    const entryYear = entryDate.getFullYear();

    if (yearFilter !== "all" && entryYear !== parseInt(yearFilter, 10)) {
      return false;
    }

    if (filter === "flashback") {
      const isFlashback = (entryDate.getMonth() === targetDate.getMonth() &&
                           entryDate.getDate() === targetDate.getDate() &&
                           entryYear < targetDate.getFullYear());
      if (!isFlashback) return false;
    } else if (filter !== "all") {
      if (entry.mood !== filter) return false;
    }

    if (query) {
      const matchTitle = (entry.title || "").toLowerCase().includes(query);
      const matchContent = (entry.content || "").toLowerCase().includes(query);
      const matchRole = (entry.role || "").toLowerCase().includes(query);
      const matchCompany = (entry.company || "").toLowerCase().includes(query);
      const matchLessons = (entry.lessons || "").toLowerCase().includes(query);
      const matchFuture = (entry.futureMessage || "").toLowerCase().includes(query);

      if (!matchTitle && !matchContent && !matchRole && !matchCompany && !matchLessons && !matchFuture) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function renderEntriesGrid() {
  const grid = document.getElementById("entriesGrid");
  const emptyCard = document.getElementById("emptyStateCard");
  if (!grid) return;

  const entries = getFilteredEntries();

  if (entries.length === 0) {
    grid.innerHTML = "";
    if (emptyCard) emptyCard.style.display = "block";
    return;
  }

  if (emptyCard) emptyCard.style.display = "none";

  grid.innerHTML = entries.map((entry, idx) => {
    const entryDate = parseLocalDate(entry.date);
    const dateFormatted = entryDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    const moodLabel = getMoodLabel(entry.mood);
    const readMinutes = calculateReadTime(entry.content);

    const isFlashback = (entryDate.getMonth() === state.systemToday.getMonth() &&
                         entryDate.getDate() === state.systemToday.getDate() &&
                         entryDate.getFullYear() < state.systemToday.getFullYear());

    const washiTypes = ["washi-rose", "washi-sage", "washi-gold"];
    const washiClass = washiTypes[idx % washiTypes.length];

    return `
      <article class="diary-card glass-panel diary-card-framed" onclick="openReaderModal('${entry.id}')">
        <div class="washi-tape washi-tape-left ${washiClass}"></div>

        ${entry.image ? `
          <div class="diary-card-cover-wrapper">
            <img src="${escapeHtml(entry.image)}" class="diary-card-cover" alt="Foto Cerita">
          </div>
        ` : ''}

        <div class="diary-card-header">
          <div class="card-meta-tags">
            <span class="mood-badge" data-mood="${entry.mood}">${moodLabel}</span>
            <span class="card-date-badge">
              ${isFlashback ? '✨ ' : ''}${dateFormatted}
            </span>
          </div>
          <h3 class="card-title">${escapeHtml(entry.title)}</h3>
          <div class="card-role-company">
            <span>${escapeHtml(entry.role || 'Karir')}</span>
            <span>•</span>
            <span>${escapeHtml(entry.company || 'Proyek')}</span>
          </div>
        </div>

        <div class="card-body">
          <p class="card-excerpt">${escapeHtml(entry.content)}</p>
          ${entry.futureMessage ? `
            <div class="card-future-snippet">
              "✉️ ${escapeHtml(entry.futureMessage)}"
            </div>
          ` : ''}
        </div>

        <div class="card-footer">
          <span class="card-read-time">⏱️ ${readMinutes} menit baca</span>
          <span class="read-link-action">Buka Catatan &rarr;</span>
        </div>
      </article>
    `;
  }).join('');
}

function setFilterCategory(category, buttonEl) {
  state.currentFilter = category;
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(t => t.classList.remove("active"));
  if (buttonEl) buttonEl.classList.add("active");
  renderEntriesGrid();
}

function setFilterYear(year) {
  state.currentYearFilter = year;
  renderEntriesGrid();
}

function resetAllFilters() {
  state.searchQuery = "";
  state.currentFilter = "all";
  state.currentYearFilter = "all";

  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClearBtn");
  const yearSelect = document.getElementById("yearFilterSelect");

  if (searchInput) searchInput.value = "";
  if (searchClear) searchClear.style.display = "none";
  if (yearSelect) yearSelect.value = "all";

  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(t => {
    t.classList.toggle("active", t.getAttribute("data-filter") === "all");
  });

  renderEntriesGrid();
  showToast("Filter berhasil di-reset 🌸", "info");
}

function clearSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClearBtn");
  if (searchInput) searchInput.value = "";
  if (searchClear) searchClear.style.display = "none";
  state.searchQuery = "";
  renderEntriesGrid();
}

// ============================================================================
// ZEN DIARY READER MODAL
// ============================================================================

function openReaderModal(entryId) {
  const entry = state.entries.find(e => e.id === entryId);
  if (!entry) return;

  state.activeReaderEntryId = entryId;

  const entryDate = parseLocalDate(entry.date);
  const dateFormatted = entryDate.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const moodLabel = getMoodLabel(entry.mood);
  const readMinutes = calculateReadTime(entry.content);

  setText("readerTitle", entry.title);
  setText("readerDateText", dateFormatted);
  setText("readerRole", entry.role || "Jejak Profesional");
  setText("readerCompany", entry.company || "Refleksi Karir");
  setText("readerReadTime", `${readMinutes} menit baca`);
  setText("clapCountText", `Apresiasi Diri (${entry.claps || 0}) 🌸`);

  const moodBadge = document.getElementById("readerMoodBadge");
  if (moodBadge) {
    moodBadge.setAttribute("data-mood", entry.mood);
    moodBadge.textContent = moodLabel;
  }

  // Cover Image in Reader
  const coverContainer = document.getElementById("readerCoverImageContainer");
  const coverImg = document.getElementById("readerCoverImage");
  if (entry.image && entry.image.trim()) {
    if (coverContainer) coverContainer.style.display = "block";
    if (coverImg) coverImg.src = entry.image;
  } else {
    if (coverContainer) coverContainer.style.display = "none";
    if (coverImg) coverImg.src = "";
  }

  const isFlashback = (entryDate.getMonth() === state.systemToday.getMonth() &&
                       entryDate.getDate() === state.systemToday.getDate() &&
                       entryDate.getFullYear() < state.systemToday.getFullYear());

  const alertBox = document.getElementById("readerFlashbackAlert");
  const alertDesc = document.getElementById("readerFlashbackAlertDesc");
  const markerPill = document.getElementById("readerFlashbackMarker");

  if (isFlashback) {
    const diff = state.systemToday.getFullYear() - entryDate.getFullYear();
    if (alertBox) alertBox.style.display = "flex";
    if (markerPill) markerPill.style.display = "inline-flex";
    if (alertDesc) alertDesc.textContent = `🌸 Catatan ini kamu tulis ${diff} tahun yang lalu pada tanggal dan bulan yang sama (${entryDate.getFullYear()}).`;
  } else {
    if (alertBox) alertBox.style.display = "none";
    if (markerPill) markerPill.style.display = "none";
  }

  const contentContainer = document.getElementById("readerContent");
  if (contentContainer) {
    contentContainer.innerHTML = formatMarkdownContent(entry.content);
  }

  const futureContainer = document.getElementById("readerFutureMessageContainer");
  const futureQuote = document.getElementById("readerFutureMessage");
  if (entry.futureMessage && entry.futureMessage.trim()) {
    futureContainer.style.display = "block";
    futureQuote.textContent = `"${entry.futureMessage}"`;
  } else {
    futureContainer.style.display = "none";
  }

  const lessonsContainer = document.getElementById("readerLessonsContainer");
  const lessonsList = document.getElementById("readerLessonsList");
  if (entry.lessons && entry.lessons.trim()) {
    lessonsContainer.style.display = "block";
    const items = entry.lessons.split('\n').filter(l => l.trim().length > 0);
    lessonsList.innerHTML = items.map(it => `<li>🌸 ${escapeHtml(it.replace(/^[0-9]+[\.\)]\s*/, ''))}</li>`).join('');
  } else {
    lessonsContainer.style.display = "none";
  }

  const progressBar = document.getElementById("readerProgressBar");
  if (progressBar) progressBar.style.width = "0%";

  const modal = document.getElementById("readerModal");
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }
}

function closeReaderModal() {
  const modal = document.getElementById("readerModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
  state.activeReaderEntryId = null;
}

function handleClap() {
  if (!state.activeReaderEntryId) return;
  const entry = state.entries.find(e => e.id === state.activeReaderEntryId);
  if (entry) {
    entry.claps = (entry.claps || 0) + 1;
    setText("clapCountText", `Apresiasi Diri (${entry.claps}) 🌸`);
    saveEntries();
    showToast("Apresiasi diri ditambahkan! 🌸", "success");
  }
}

function handleEditFromReader() {
  if (!state.activeReaderEntryId) return;
  const id = state.activeReaderEntryId;
  closeReaderModal();
  openWriterModal(id);
}

function handleDeleteFromReader() {
  if (!state.activeReaderEntryId) return;
  if (confirm("Apakah Anda yakin ingin menghapus catatan diary ini?")) {
    state.entries = state.entries.filter(e => e.id !== state.activeReaderEntryId);
    saveEntries();
    closeReaderModal();
    renderApp();
    showToast("Catatan diary berhasil dihapus 🌸", "info");
  }
}

// ============================================================================
// IMAGE ATTACHMENT & COMPRESSION HELPERS
// ============================================================================

function triggerFileInput() {
  const fileInput = document.getElementById("formImageFile");
  if (fileInput) fileInput.click();
}

function handleImageFileSelect(event) {
  const file = event.target?.files?.[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showToast("Format file harus berupa gambar (JPG, PNG, WebP).", "error");
    return;
  }

  showToast("Memproses dan mengoptimasi foto...", "info");

  compressImage(file, 900, 0.82)
    .then(compressedDataUrl => {
      setImagePreview(compressedDataUrl);
      setValue("formImageData", compressedDataUrl);
      setValue("formImageUrl", "");
      showToast("Foto berhasil dimuat 🌸", "success");
    })
    .catch(err => {
      console.error(err);
      showToast("Gagal memproses gambar.", "error");
    });
}

function handleImageUrlInput(url) {
  const cleanUrl = (url || "").trim();
  if (cleanUrl) {
    setImagePreview(cleanUrl);
    setValue("formImageData", cleanUrl);
  } else {
    removeSelectedImage();
  }
}

function setImagePreview(src) {
  const previewBox = document.getElementById("imagePreviewBox");
  const previewImg = document.getElementById("imagePreviewImg");
  const dropzonePrompt = document.getElementById("dropzonePrompt");

  if (previewBox && previewImg && dropzonePrompt) {
    previewImg.src = src;
    previewBox.style.display = "flex";
    dropzonePrompt.style.display = "none";
  }
}

function removeSelectedImage(event) {
  if (event) event.stopPropagation();

  const previewBox = document.getElementById("imagePreviewBox");
  const previewImg = document.getElementById("imagePreviewImg");
  const dropzonePrompt = document.getElementById("dropzonePrompt");
  const fileInput = document.getElementById("formImageFile");

  if (previewBox && previewImg && dropzonePrompt) {
    previewImg.src = "";
    previewBox.style.display = "none";
    dropzonePrompt.style.display = "flex";
  }

  if (fileInput) fileInput.value = "";
  setValue("formImageData", "");
  setValue("formImageUrl", "");
}

function compressImage(file, maxWidth = 900, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(dataUrl);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ============================================================================
// DIARY STUDIO WRITER MODAL
// ============================================================================

function openWriterModal(entryId = null, defaultDateStr = null) {
  const form = document.getElementById("diaryForm");
  if (form) form.reset();

  const titleModal = document.getElementById("writerModalTitle");
  const idInput = document.getElementById("formEntryId");

  const todayStr = formatDateToInput(state.systemToday);

  removeSelectedImage();

  if (entryId) {
    const entry = state.entries.find(e => e.id === entryId);
    if (!entry) return;

    if (titleModal) titleModal.textContent = "🌸 Edit Catatan Perjalanan Karir";
    if (idInput) idInput.value = entry.id;
    setValue("formDate", entry.date);
    setValue("formTitle", entry.title);
    setValue("formRole", entry.role || "");
    setValue("formCompany", entry.company || "");
    setValue("formContent", entry.content);
    setValue("formFutureMessage", entry.futureMessage || "");
    setValue("formLessons", entry.lessons || "");

    if (entry.image) {
      setImagePreview(entry.image);
      setValue("formImageData", entry.image);
      if (entry.image.startsWith("http")) {
        setValue("formImageUrl", entry.image);
      }
    }

    const radio = document.querySelector(`input[name="formMood"][value="${entry.mood}"]`);
    if (radio) radio.checked = true;
  } else {
    if (titleModal) titleModal.textContent = "🌸 Tulis Catatan Perjalanan Karir";
    if (idInput) idInput.value = "";
    setValue("formDate", defaultDateStr || todayStr);
    const defaultRadio = document.querySelector(`input[name="formMood"][value="ambisius"]`);
    if (defaultRadio) defaultRadio.checked = true;
  }

  showEditorTab("write");

  const modal = document.getElementById("writerModal");
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }
}

function openWriterForCurrentSelection() {
  const targetDate = state.selectedDate ? state.selectedDate : state.systemToday;
  openWriterModal(null, formatDateToInput(targetDate));
}

function closeWriterModal() {
  const modal = document.getElementById("writerModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
}

function handleSaveDiary(event) {
  if (event) event.preventDefault();

  const id = (document.getElementById("formEntryId")?.value || "").trim();
  const date = document.getElementById("formDate")?.value;
  const title = (document.getElementById("formTitle")?.value || "").trim();
  const role = (document.getElementById("formRole")?.value || "").trim();
  const company = (document.getElementById("formCompany")?.value || "").trim();
  const content = (document.getElementById("formContent")?.value || "").trim();
  const futureMessage = (document.getElementById("formFutureMessage")?.value || "").trim();
  const lessons = (document.getElementById("formLessons")?.value || "").trim();
  const moodRadio = document.querySelector('input[name="formMood"]:checked');
  const mood = moodRadio ? moodRadio.value : "ambisius";
  const image = (document.getElementById("formImageData")?.value || document.getElementById("formImageUrl")?.value || "").trim();

  if (!date || !title || !content) {
    showToast("Harap isi tanggal, judul, dan isi cerita catatan 🌸", "error");
    return;
  }

  if (id) {
    const index = state.entries.findIndex(e => e.id === id);
    if (index !== -1) {
      state.entries[index] = {
        ...state.entries[index],
        date,
        title,
        role,
        company,
        content,
        futureMessage,
        lessons,
        mood,
        image
      };
      showToast("Catatan karir berhasil diperbarui 🌸", "success");
    }
  } else {
    const newEntry = {
      id: "entry-" + Date.now(),
      date,
      title,
      role: role || "Tech Professional",
      company: company || "Perjalanan Karir",
      content,
      futureMessage,
      lessons,
      mood,
      image,
      claps: 0
    };
    state.entries.unshift(newEntry);
    showToast("Catatan cerita baru berhasil disimpan 🌸", "success");
  }

  saveEntries();
  renderApp();
  closeWriterModal();

  if (state.activeReaderEntryId && state.activeReaderEntryId === id) {
    openReaderModal(id);
  }
}

function showEditorTab(tab) {
  const writeContainer = document.getElementById("editorWriteContainer");
  const previewContainer = document.getElementById("editorPreviewContainer");
  const tabWrite = document.getElementById("tabEditorWrite");
  const tabPreview = document.getElementById("tabEditorPreview");
  const contentVal = document.getElementById("formContent")?.value || "";

  if (tab === "preview") {
    if (writeContainer) writeContainer.style.display = "none";
    if (previewContainer) {
      previewContainer.style.display = "block";
      previewContainer.innerHTML = formatMarkdownContent(contentVal || "*Belum ada teks untuk dipratinjau.*");
    }
    if (tabWrite) tabWrite.classList.remove("active");
    if (tabPreview) tabPreview.classList.add("active");
  } else {
    if (writeContainer) writeContainer.style.display = "block";
    if (previewContainer) previewContainer.style.display = "none";
    if (tabWrite) tabWrite.classList.add("active");
    if (tabPreview) tabPreview.classList.remove("active");
  }
}

// ============================================================================
// BACKUP & RESTORE MODAL
// ============================================================================

function openBackupModal() {
  const modal = document.getElementById("backupModal");
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }
}

function closeBackupModal() {
  const modal = document.getElementById("backupModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
}

function handleExportBackup() {
  const exportObject = {
    appName: "Perjalanan Saya - Botanical Career Diary",
    version: "4.0",
    exportDate: new Date().toISOString(),
    profile: state.profile,
    entries: state.entries
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObject, null, 2));
  const downloadAnchor = document.createElement("a");
  const filename = `perjalanan_saya_diary_backup_${formatDateToInput(state.systemToday)}.json`;

  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", filename);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast("File cadangan JSON berhasil diunduh 🌸", "success");
}

function handleFileImport(event) {
  const file = event.target?.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data && Array.isArray(data.entries)) {
        state.entries = data.entries;
        if (data.profile) state.profile = data.profile;
        saveEntries();
        saveProfile();
        renderApp();
        closeBackupModal();
        showToast(`Berhasil memulihkan ${data.entries.length} catatan 🌸`, "success");
      } else {
        showToast("Format file JSON cadangan tidak valid.", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Gagal membaca file JSON.", "error");
    }
  };
  reader.readAsText(file);
}

function handleResetToDefaults() {
  if (confirm("Apakah Anda yakin ingin memuat ulang contoh data awal?")) {
    state.entries = generateDefaultEntries();
    state.profile = { ...DEFAULT_PROFILE };
    saveEntries();
    saveProfile();
    renderApp();
    closeBackupModal();
    showToast("Contoh data awal berhasil dimuat ulang 🌸", "info");
  }
}

function handleSaveProfileSettings() {
  state.profile.name = document.getElementById("settingAuthorName")?.value.trim() || "Yoan";
  state.profile.headline = document.getElementById("settingAuthorHeadline")?.value.trim() || "";
  state.profile.bio = document.getElementById("settingAuthorBio")?.value.trim() || "";

  saveProfile();
  renderProfile();
  showToast("Pengaturan profil berhasil disimpan 🌸", "success");
}

// ============================================================================
// DOM EVENT LISTENERS
// ============================================================================

function setupDomListeners() {
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClearBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      if (searchClear) searchClear.style.display = state.searchQuery ? "block" : "none";
      renderEntriesGrid();
    });
  }

  ["readerModal", "writerModal", "backupModal"].forEach(modalId => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          if (modalId === "readerModal") closeReaderModal();
          if (modalId === "writerModal") closeWriterModal();
          if (modalId === "backupModal") closeBackupModal();
        }
      });
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeReaderModal();
      closeWriterModal();
      closeBackupModal();
    }
  });

  const readerScrollBody = document.getElementById("readerBodyScroll");
  const readerProgressBar = document.getElementById("readerProgressBar");
  if (readerScrollBody && readerProgressBar) {
    readerScrollBody.addEventListener("scroll", () => {
      const scrollTop = readerScrollBody.scrollTop;
      const scrollHeight = readerScrollBody.scrollHeight - readerScrollBody.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      readerProgressBar.style.width = `${progress}%`;
    });
  }
}

function scrollToSection(sectionId) {
  const sec = document.getElementById(sectionId);
  if (sec) sec.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================================
// UTILITIES
// ============================================================================

function parseLocalDate(dateStr) {
  if (!dateStr) return new Date();
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  }
  return new Date(dateStr);
}

function formatDateToInput(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, '0');
  const d = String(dateObj.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function calculateReadTime(text) {
  if (!text) return 1;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 180));
}

function getMoodLabel(mood) {
  const map = {
    ambisius: "🌸 Mekar (Ambisius)",
    tumbuh: "🌿 Bertumbuh",
    menantang: "🌧️ Menantang",
    pencerahan: "🌻 Pencerahan",
    bangga: "💐 Prestasi",
    reflektif: "☕ Refleksi Santai"
  };
  return map[mood] || "🌸 Refleksi";
}

function formatMarkdownContent(text) {
  if (!text) return "";

  return text.split('\n\n').map(block => {
    let trimmed = block.trim();
    if (!trimmed) return '';

    if (trimmed.startsWith('>')) {
      const quoteText = trimmed.replace(/^>\s*/gm, '');
      return `<blockquote>${escapeHtml(quoteText)}</blockquote>`;
    }

    if (trimmed.startsWith('![') && trimmed.includes('](') && trimmed.endsWith(')')) {
      const altMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (altMatch) {
        return `<p><img src="${escapeHtml(altMatch[2])}" alt="${escapeHtml(altMatch[1])}" style="max-width:100%; border-radius:12px; margin:1.25rem 0; box-shadow: 0 8px 24px rgba(0,0,0,0.4);"></p>`;
      }
    }

    let formatted = escapeHtml(trimmed);
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/\n/g, '<br>');

    return `<p>${formatted}</p>`;
  }).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setValue(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '🌸' : type === 'error' ? '❌' : '🌿'}</span>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideInToast 0.3s ease reverse forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ============================================================================
// EXPOSE GLOBALS TO WINDOW
// ============================================================================

window.openWriterModal = openWriterModal;
window.closeWriterModal = closeWriterModal;
window.openWriterForCurrentSelection = openWriterForCurrentSelection;
window.openReaderModal = openReaderModal;
window.closeReaderModal = closeReaderModal;
window.openBackupModal = openBackupModal;
window.closeBackupModal = closeBackupModal;
window.handleSaveDiary = handleSaveDiary;
window.showEditorTab = showEditorTab;
window.handleClap = handleClap;
window.handleEditFromReader = handleEditFromReader;
window.handleDeleteFromReader = handleDeleteFromReader;
window.handleExportBackup = handleExportBackup;
window.handleFileImport = handleFileImport;
window.handleResetToDefaults = handleResetToDefaults;
window.handleSaveProfileSettings = handleSaveProfileSettings;
window.setFilterCategory = setFilterCategory;
window.setFilterYear = setFilterYear;
window.resetAllFilters = resetAllFilters;
window.clearSearch = clearSearch;
window.navigateCalendar = navigateCalendar;
window.goToSelectedInputDate = goToSelectedInputDate;
window.resetCalendarToToday = resetCalendarToToday;
window.scrollToSection = scrollToSection;
window.triggerFileInput = triggerFileInput;
window.handleImageFileSelect = handleImageFileSelect;
window.handleImageUrlInput = handleImageUrlInput;
window.removeSelectedImage = removeSelectedImage;
