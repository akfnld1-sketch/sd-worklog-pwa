(() => {
  "use strict";

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  const KEY = "personal_attendance_pwa_v1";
  const MIN_DATE = "2026-01-01";

  const MSG_IN = [
    "오늘도 안전하게, 천천히 시작해요 🙏",
    "출근 완료! 오늘의 미션: 무사귀가 😎",
    "좋아요. 오늘은 집중력 1%만 더 🧠",
    "출근 체크! 물 한 잔 먼저 드세요 💧",
    "오늘도 차근차근, 충분히 잘합니다 👍",
    "출근했습니다! 작은 성과 하나만 만들기 ✨",
    "컨디션이 반이라도 괜찮아요. 출발! 🚀",
    "오늘의 목표: 실수 줄이기, 안전 지키기 🦺",
    "출근 완료! 어깨 힘 빼고 갑시다 🙂",
    "시작이 반! 오늘도 해냅니다 🔥",
    "출근 체크! 오늘도 내 페이스로 🐢",
    "좋습니다. 오늘도 안전+정확 🧷",
    "출근! 오늘은 스트레스 덜 받기 🌿",
    "출근 완료. 커피보다 물이 먼저 ☕️→💧",
    "오늘도 꾸준함이 승리합니다 🏁",
    "출근 체크! 작은 실수도 줄여봅시다 🧩",
    "오늘은 ‘무리하지 않기’가 목표입니다 🫶",
    "출근! 마음속 소음은 음소거 🔇",
    "출근 완료. 오늘도 침착하게 🧘",
    "좋아요. 오늘도 안전이 1순위 🦺",
    "출근 체크! 나 자신 칭찬부터 👏",
    "오늘도 천천히, 확실하게 🧱",
    "출근 완료. 오늘은 한 박자 여유 😌",
    "시작합니다! 계획은 단순하게 📌",
    "출근 체크. 오늘도 버텨주는 내가 대단 🏆",
    "출근! 허리/손목 스트레칭 10초만 🧍",
    "오늘도 차분히. 급할수록 천천히 🧊",
    "출근 완료! 실수해도 복구하면 됩니다 🛠️",
    "출근 체크. 오늘도 안전거리 확보 🚧",
    "출근! 한 번에 한 가지씩 🧠",
    "출근 완료. 오늘의 키워드: ‘정리’ 🧹",
    "출근 체크! 좋은 하루 만들기 시작 ☀️",
    "출근! 오늘도 무사히만 하면 성공 🎯",
    "출근 완료. 내 멘탈은 내 편 🛡️",
    "출근 체크. 오늘은 ‘천천히’가 스킬 🐌",
    "출근! 괜찮아요. 어제보다 1%만 🧪",
    "출근 완료. 오늘도 안전하게 다녀와요 🧡",
    "출근 체크. 오늘은 실수 방지 모드 ON ✅",
    "출근! 물류는 리듬이다 🎵",
    "출근 완료. 오늘도 수고할 준비 완료 👊",
    "출근 체크. 내 페이스가 정답입니다 🧭",
    "출근! 호흡 길게, 어깨 내려요 🌬️",
    "출근 완료. 오늘도 잘 해낼 겁니다 💪",
    "출근 체크. 오늘의 승리: 무사고 🏅",
    "출근! 지금 이 순간부터 잘할 수 있어요 🧠",
    "출근 완료. 너무 잘하려 말고, 정확히만 🎯",
    "출근 체크. 오늘도 나를 믿습니다 🫡",
    "출근! 안전, 정확, 복귀. 끝! 🧾",
    "출근 완료. 오늘도 살아남기 성공 😄",
  ];

  const MSG_OUT = [
    "퇴근 완료! 오늘 하루 정말 수고하셨습니다 🙇",
    "오늘도 무사히 끝! 집으로 안전 귀가 🏠",
    "고생 많으셨어요. 쉬어야 이깁니다 🛌",
    "오늘의 승리: 버텨낸 것 자체 🏆",
    "퇴근 체크! 오늘도 잘하셨어요 👍",
    "수고하셨습니다. 오늘의 피로는 오늘에 두고 😌",
    "퇴근! 따뜻한 물로 손목/허리 풀어주세요 ♨️",
    "오늘도 끝! 내일의 나를 위해 휴식 🧡",
    "퇴근 체크. 오늘도 안전하게 마무리 🦺",
    "수고하셨습니다. 내일은 더 가벼운 하루 되길 🌿",
    "퇴근 완료! 오늘의 스트레스는 로그아웃 🔓",
    "고생하셨어요. 지금부터는 내 시간 🎧",
    "오늘도 한 걸음 전진했습니다 👣",
    "퇴근 체크. 집 가서 맛있는 거 드세요 🍜",
    "수고하셨습니다. 오늘은 나에게 보상 🎁",
    "퇴근 완료. 내일의 효율은 오늘의 휴식에서 🛌",
    "고생하셨어요. 오늘은 여기까지면 충분합니다 ✅",
    "퇴근! 오늘의 실수도 경험치입니다 🧩",
    "수고하셨습니다. 따뜻한 샤워 추천 🚿",
    "퇴근 체크. 오늘도 잘 버텼어요 👏",
    "고생 많으셨습니다. 내일은 더 쉬운 흐름으로 🌊",
    "퇴근! 이제 마음 편히 쉬세요 🧘",
    "수고하셨습니다. 오늘은 잘했다, 진짜로 💯",
    "퇴근 체크. 무사고면 최고입니다 🏅",
    "고생하셨어요. 눈/어깨 쉬게 해주세요 👀",
    "퇴근 완료. 집이 제일 중요 🏠",
    "수고하셨습니다. 오늘의 피로는 내려놓기 🧺",
    "퇴근! 내일도 잘하려면 오늘은 쉬기 😴",
    "고생하셨어요. 오늘은 진짜 잘 했습니다 🙌",
    "퇴근 체크. 오늘도 멋지게 마무리 ✨",
    "수고하셨습니다. 내일을 위해 충전 🔋",
    "퇴근 완료! 귀가길 조심조심 🚶",
    "고생하셨어요. 오늘은 푹 쉬어도 됩니다 🫶",
    "퇴근 체크. 오늘도 살아남았다 😄",
    "수고하셨습니다. 내일의 나에게 박수 👏",
    "퇴근 완료. 오늘은 여기까지! 🧾",
    "고생 많으셨어요. 편하게 쉬세요 ☁️",
    "퇴근 체크. 몸부터 챙깁시다 💧",
    "수고하셨습니다. 오늘도 참 잘했어요 👍",
    "퇴근! 이제는 ‘쉼’ 모드 ON 🌙",
    "고생하셨습니다. 집가서 다리 올리기 추천 🦵",
    "퇴근 체크. 내일은 더 나아질 겁니다 🌅",
    "수고하셨습니다. 오늘은 스스로 칭찬! 🏆",
    "퇴근 완료. 따뜻한 밥 + 휴식 = 회복 🍚",
    "고생하셨어요. 오늘 하루, 진짜 수고 🙇",
    "퇴근 체크. 오늘도 잘 버텼습니다 🛡️",
    "수고하셨습니다. 내일은 더 쉽게 풀리길 🍀",
    "퇴근 완료. 오늘도 나 자신에게 합격 ✅",
    "고생하셨어요. 이제 쉬러 갑시다 🛌",
  ];

  const DEFAULT = {
    profile: { name: "", theme: "dark", bg: "#0b1220", card: "#0f172a" },
    payPreset: {
      hourly: 10320,
      monthlyHours: 209,
      allowOT: 0,
      allowSpecial: 0,
      allowMaterial: 0,
      allowForklift: 0,
    },
    records: {},
    undo: [],
    ui: {
      calYear: 2026,
      calMonth: 1,
      selected: MIN_DATE,
      reportYear: 2026,
      reportMonth: 1,
      payOpen: false,
      tab: "attendance",
      lastTabBeforePay: "attendance", // ✅ 급여 닫을 때 복귀용
    },
  };

  const STATUS = {
    none: "",
    in: "✅ 출근",
    out: "🏁 퇴근",
    leave: "🟦 연차",
    half: "🟪 반차",
    absent: "🟥 결근",
  };

  const pad2 = (n) => String(n).padStart(2, "0");
  const keyOf = (y, m, d) => `${y}-${pad2(m)}-${pad2(d)}`;

  const nowTimeHHMM = () => {
    const d = new Date();
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
  };

  const todayKey = () => {
    const d = new Date();
    return keyOf(d.getFullYear(), d.getMonth() + 1, d.getDate());
  };

  function load() {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULT);
    try {
      const obj = JSON.parse(raw);
      const merged = structuredClone(DEFAULT);

      merged.profile = { ...merged.profile, ...(obj.profile || {}) };
      merged.payPreset = { ...merged.payPreset, ...(obj.payPreset || {}) };
      merged.records = obj.records || {};
      merged.undo = obj.undo || [];
      merged.ui = { ...merged.ui, ...(obj.ui || {}) };

      if (!merged.ui.selected || merged.ui.selected < MIN_DATE) merged.ui.selected = MIN_DATE;
      if (merged.ui.calYear < 2026) { merged.ui.calYear = 2026; merged.ui.calMonth = 1; }
      if (merged.ui.reportYear < 2026) { merged.ui.reportYear = 2026; merged.ui.reportMonth = 1; }

      if (!merged.ui.lastTabBeforePay) merged.ui.lastTabBeforePay = merged.ui.tab || "attendance";

      return merged;
    } catch {
      return structuredClone(DEFAULT);
    }
  }

  function save() {
    localStorage.setItem(KEY, JSON.stringify(state));
  }

  function applyTheme() {
    const p = state.profile;

    let bg = p.bg || "#0b1220";
    let card = p.card || "#0f172a";
    let text = (p.theme === "light") ? "#0b1220" : "#e5e7eb";
    let muted = (p.theme === "light") ? "#334155" : "#94a3b8";
    let line = (p.theme === "light") ? "rgba(15,23,42,.16)" : "rgba(148,163,184,.25)";

    if (p.theme === "light") {
      if (p.bg === "#0b1220") bg = "#f1f5f9";
      if (p.card === "#0f172a") card = "#ffffff";
    }

    document.documentElement.style.setProperty("--bg", bg);
    document.documentElement.style.setProperty("--card", card);
    document.documentElement.style.setProperty("--text", text);
    document.documentElement.style.setProperty("--muted", muted);
    document.documentElement.style.setProperty("--line", line);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", card);
  }

  function showToast(msg) {
    const el = $("#toast");
    if (el) el.textContent = msg;
  }

  function randFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function ensureRecord(dateKey) {
    if (!state.records[dateKey]) state.records[dateKey] = { status: "none", in: "", out: "", note: "" };
    return state.records[dateKey];
  }

  function pushUndo(payload) {
    state.undo.push(payload);
    if (state.undo.length > 60) state.undo.shift();
  }

  function undo() {
    const last = state.undo.pop();
    if (!last) return;
    if (last.type === "setRecord") {
      if (last.prev == null) delete state.records[last.dateKey];
      else state.records[last.dateKey] = last.prev;
    }
    save();
    renderAll();
    showToast("방금 작업을 취소했어요. 🧽");
  }

  function resetDay() {
    const k = state.ui.selected;
    if (k < MIN_DATE) return alert("2026-01-01 이후 날짜만 가능합니다.");
    if (!confirm(`${k} 기록을 초기화할까요?`)) return;
    const prev = state.records[k] ? structuredClone(state.records[k]) : null;
    pushUndo({ type: "setRecord", dateKey: k, prev });
    delete state.records[k];
    save();
    renderAll();
    showToast("초기화 완료 ✅");
  }

  function syncStatusButtons(status) {
    const map = {
      in: "#btnIn",
      out: "#btnOut",
      leave: "#btnLeave",
      half: "#btnHalf",
      absent: "#btnAbsent",
    };

    Object.values(map).forEach(sel => {
      const el = document.querySelector(sel);
      if (el) el.classList.remove("selected");
    });

    if (map[status]) {
      const el = document.querySelector(map[status]);
      if (el) el.classList.add("selected");
    }
  }

  function setStatus(status) {
    const k = state.ui.selected;
    if (k < MIN_DATE) return alert("2026-01-01 이후 날짜만 가능합니다.");

    const prev = state.records[k] ? structuredClone(state.records[k]) : null;
    const rec = ensureRecord(k);

    rec.status = status;

    if (status === "leave" || status === "half" || status === "absent") {
      rec.in = "";
      rec.out = "";
    } else if (status === "in") {
      if (!rec.in) rec.in = nowTimeHHMM();
    } else if (status === "out") {
      if (!rec.in) rec.in = nowTimeHHMM();
      rec.out = nowTimeHHMM();
    }

    pushUndo({ type: "setRecord", dateKey: k, prev });
    save();
    renderAll();
    syncStatusButtons(status);

    if (status === "in") showToast(randFrom(MSG_IN));
    if (status === "out") showToast(randFrom(MSG_OUT));
    if (status === "leave") showToast("연차 처리 완료 🟦");
    if (status === "half") showToast("반차 처리 완료 🟪");
    if (status === "absent") showToast("결근 처리 완료 🟥");
  }

  function setTime(field, value) {
    const k = state.ui.selected;
    if (k < MIN_DATE) return alert("2026-01-01 이후 날짜만 가능합니다.");

    const prev = state.records[k] ? structuredClone(state.records[k]) : null;
    const rec = ensureRecord(k);
    rec[field] = value || "";

    if (rec.in && !rec.out && (rec.status === "none" || rec.status === "")) rec.status = "in";
    if (rec.in && rec.out) rec.status = "out";

    pushUndo({ type: "setRecord", dateKey: k, prev });
    save();
    renderAll();
    syncStatusButtons(rec.status);
  }

  function setNote(value) {
    const k = state.ui.selected;
    if (k < MIN_DATE) return alert("2026-01-01 이후 날짜만 가능합니다.");
    const prev = state.records[k] ? structuredClone(state.records[k]) : null;
    const rec = ensureRecord(k);
    rec.note = value || "";
    pushUndo({ type: "setRecord", dateKey: k, prev });
    save();
    renderAll();
  }

  // ---------- Calendar
  function daysInMonth(y, m) { return new Date(y, m, 0).getDate(); }
  function firstDow(y, m) { return new Date(y, m - 1, 1).getDay(); }
  function monthLabel(y, m) { return `${y}년 ${m}월`; }
  function parseKey(k) {
    const [y, m, d] = String(k).split("-").map(Number);
    return { y, m, d };
  }

  function canGoPrev(y, m) {
    let py = y, pm = m - 1;
    if (pm === 0) { pm = 12; py -= 1; }
    const last = daysInMonth(py, pm);
    return !(keyOf(py, pm, last) < MIN_DATE);
  }

  function shiftMonth(delta, which = "cal") {
    const ui = state.ui;
    let y = (which === "cal") ? ui.calYear : ui.reportYear;
    let m = (which === "cal") ? ui.calMonth : ui.reportMonth;

    m += delta;
    if (m === 0) { m = 12; y -= 1; }
    if (m === 13) { m = 1; y += 1; }

    if (y < 2026 || (y === 2026 && m < 1)) { y = 2026; m = 1; }

    if (which === "cal") {
      if (delta < 0 && !canGoPrev(ui.calYear, ui.calMonth)) return;
      ui.calYear = y; ui.calMonth = m;

      const candidate = keyOf(y, m, 1);
      ui.selected = (candidate < MIN_DATE) ? MIN_DATE : candidate;
    } else {
      ui.reportYear = y; ui.reportMonth = m;
    }

    save();
    renderAll();
  }

  function buildDayMark(dateKey) {
    if (dateKey < MIN_DATE) return { text: "", cls: "" };

    const rec = state.records[dateKey];
    if (!rec) return { text: "", cls: "" };

    if (rec.status === "leave") return { text: "🟦 연차", cls: "markLeave markStatus" };
    if (rec.status === "half") return { text: "🟪 반차", cls: "markHalf markStatus" };
    if (rec.status === "absent") return { text: "🟥 결근", cls: "markAbsent markStatus" };

    const inT = rec.in ? `🟢 ${rec.in}` : "";
    const outT = rec.out ? `🔵 ${rec.out}` : "";
    const lines = [inT, outT].filter(Boolean);

    return { text: lines.join("\n"), cls: "" };
  }

  function renderCalendar() {
    const y = state.ui.calYear;
    const m = state.ui.calMonth;

    $("#monthLabel").textContent = monthLabel(y, m);

    const cal = $("#calendar");
    cal.innerHTML = "";

    const offset = firstDow(y, m);
    const total = daysInMonth(y, m);
    const tKey = todayKey();

    for (let i = 0; i < offset; i++) {
      const blank = document.createElement("div");
      blank.className = "day disabled";
      blank.style.visibility = "hidden";
      cal.appendChild(blank);
    }

    for (let d = 1; d <= total; d++) {
      const k = keyOf(y, m, d);

      const cell = document.createElement("div");
      cell.className = "day";
      if (k === tKey) cell.classList.add("today");
      if (k === state.ui.selected) cell.classList.add("selected");
      if (k < MIN_DATE) cell.classList.add("disabled");

      const mark = buildDayMark(k);

      cell.innerHTML = `
        <div class="dayNum">${d}</div>
        <div class="dayMark ${mark.cls}">${escapeHtml(mark.text)}</div>
      `;

      if (k >= MIN_DATE) {
        cell.addEventListener("click", () => {
          state.ui.selected = k;
          save();
          renderAll();
        });
      }
      cal.appendChild(cell);
    }

    $("#btnPrevMonth").disabled = !canGoPrev(y, m);
    $("#btnNextMonth").disabled = false;
  }

  // ---------- Monthly Report
  function getMonthRange(y, m) {
    const total = daysInMonth(y, m);
    return { total };
  }

  function monthStats(y, m) {
    const { total } = getMonthRange(y, m);
    let work = 0, absent = 0, leave = 0, half = 0, inOnly = 0, none = 0;

    for (let d = 1; d <= total; d++) {
      const k = keyOf(y, m, d);
      if (k < MIN_DATE) continue;

      const rec = state.records[k];
      if (!rec || rec.status === "none" || rec.status === "") { none++; continue; }

      if (rec.status === "leave") leave++;
      else if (rec.status === "half") half++;
      else if (rec.status === "absent") absent++;
      else if (rec.status === "out") work++;
      else if (rec.status === "in") inOnly++;
      else none++;
    }

    return { work, inOnly, absent, leave, half, none };
  }

  function renderReport() {
    const y = state.ui.reportYear;
    const m = state.ui.reportMonth;
    $("#reportMonthLabel").textContent = monthLabel(y, m);

    const s = monthStats(y, m);
    const box = $("#reportStats");
    box.innerHTML = "";

    const items = [
      { k: "출근(퇴근까지)", v: s.work },
      { k: "출근만(퇴근 미입력)", v: s.inOnly },
      { k: "연차", v: s.leave },
      { k: "반차", v: s.half },
      { k: "결근", v: s.absent },
      { k: "미기록", v: s.none },
    ];

    for (const it of items) {
      const div = document.createElement("div");
      div.className = "stat";
      div.innerHTML = `<div class="k">${escapeHtml(it.k)}</div><div class="v">${escapeHtml(String(it.v))}</div>`;
      box.appendChild(div);
    }
  }

  // ---------- CSV
  function csvEscape(v) {
    const s = String(v ?? "");
    if (/[,"\n]/.test(s)) return `"${s.replaceAll('"', '""')}"`;
    return s;
  }

  function exportMonthCsv() {
    const y = state.ui.reportYear;
    const m = state.ui.reportMonth;
    const total = daysInMonth(y, m);

    const header = ["date","name","status","in","out","note"];
    const rows = [header.join(",")];

    const name = state.profile.name || "";

    for (let d = 1; d <= total; d++) {
      const k = keyOf(y, m, d);
      if (k < MIN_DATE) continue;

      const rec = state.records[k] || { status:"none", in:"", out:"", note:"" };

      rows.push([
        k,
        csvEscape(name),
        csvEscape(STATUS[rec.status] || ""),
        csvEscape(rec.in || ""),
        csvEscape(rec.out || ""),
        csvEscape(rec.note || "")
      ].join(","));
    }

    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `SD바이오센서_개인출근부_월CSV-${y}-${pad2(m)}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    showToast("월 CSV 내보내기 완료 📄");
  }

  // ---------- Backup/Restore
  function backupJson() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type:"application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `SD바이오센서_개인출근부_백업-${todayKey()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("백업 파일을 저장했어요 💾");
  }

  function restoreJson(file) {
    const r = new FileReader();
    r.onload = () => {
      try {
        const obj = JSON.parse(String(r.result || "{}"));
        const merged = structuredClone(DEFAULT);

        merged.profile = { ...merged.profile, ...(obj.profile || {}) };
        merged.payPreset = { ...merged.payPreset, ...(obj.payPreset || {}) };
        merged.records = obj.records || {};
        merged.undo = obj.undo || [];
        merged.ui = { ...merged.ui, ...(obj.ui || {}) };

        if (!merged.ui.selected || merged.ui.selected < MIN_DATE) merged.ui.selected = MIN_DATE;
        if (merged.ui.calYear < 2026) { merged.ui.calYear = 2026; merged.ui.calMonth = 1; }
        if (merged.ui.reportYear < 2026) { merged.ui.reportYear = 2026; merged.ui.reportMonth = 1; }
        if (!merged.ui.lastTabBeforePay) merged.ui.lastTabBeforePay = merged.ui.tab || "attendance";

        state = merged;
        save();
        applyTheme();
        renderAll();
        showToast("복원 완료 ✅");
      } catch {
        alert("복원 실패: 파일 형식이 올바르지 않습니다.");
      }
    };
    r.readAsText(file, "utf-8");
  }

  // ---------- Pay
  function money(n) {
    const x = Math.round(Number(n) || 0);
    return x.toLocaleString("ko-KR") + "원";
  }

  function calcPay() {
    const p = state.payPreset;
    const base = (Number(p.hourly)||0) * (Number(p.monthlyHours)||0);
    const allow = (Number(p.allowOT)||0) + (Number(p.allowSpecial)||0) + (Number(p.allowMaterial)||0) + (Number(p.allowForklift)||0);
    const total = base + allow;

    $("#wageBaseAuto").value = money(base);
    $("#sumBase").textContent = money(base);
    $("#sumAllow").textContent = money(allow);
    $("#sumTotal").textContent = money(total);
  }

  function syncPayInputsToState() {
    state.payPreset.hourly = Number($("#wageHourly").value) || 0;
    state.payPreset.monthlyHours = Number($("#wageMonthlyHours").value) || 0;
    state.payPreset.allowOT = Number($("#allowOT").value) || 0;
    state.payPreset.allowSpecial = Number($("#allowSpecial").value) || 0;
    state.payPreset.allowMaterial = Number($("#allowMaterial").value) || 0;
    state.payPreset.allowForklift = Number($("#allowForklift").value) || 0;
    save();
    calcPay();
  }

  function openPayOnly() {
    // ✅ 현재 탭 기억하고, 급여만 보이게
    state.ui.lastTabBeforePay = state.ui.tab || "attendance";
    state.ui.payOpen = true;
    save();

    document.body.classList.add("payOnly");

    const card = $("#payCard");
    card.classList.add("open");
    card.setAttribute("aria-hidden","false");
  }

  function closePayOnly() {
    state.ui.payOpen = false;
    save();

    document.body.classList.remove("payOnly");

    const card = $("#payCard");
    card.classList.remove("open");
    card.setAttribute("aria-hidden","true");

    // ✅ 원래 보던 탭으로 복귀
    setTab(state.ui.lastTabBeforePay || "attendance");
  }

  // ---------- Settings
  function renderSettings() {
    $("#profileName").value = state.profile.name || "";
    $("#themeMode").value = state.profile.theme || "dark";
    $("#bgColor").value = state.profile.bg || "#0b1220";
    $("#cardColor").value = state.profile.card || "#0f172a";
  }

  function saveSettings() {
    state.profile.name = String($("#profileName").value || "").trim();
    state.profile.theme = $("#themeMode").value;
    state.profile.bg = $("#bgColor").value;
    state.profile.card = $("#cardColor").value;

    save();
    applyTheme();
    renderAll();
    showToast("설정 저장 완료 ✅");
  }

  function resetSettings() {
    if (!confirm("설정을 초기화할까요?")) return;
    state.profile = structuredClone(DEFAULT.profile);
    save();
    applyTheme();
    renderAll();
    showToast("설정 초기화 완료 🧼");
  }

  // ---------- Tabs
  function setTab(tab) {
    state.ui.tab = tab;
    save();

    $$(".tab").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
    $("#tab-attendance").classList.toggle("active", tab === "attendance");
    $("#tab-report").classList.toggle("active", tab === "report");
    $("#tab-settings").classList.toggle("active", tab === "settings");

    if (tab === "report") renderReport();
    if (tab === "settings") renderSettings();
  }

  // ---------- Render
  function renderAttendance() {
    const sel = state.ui.selected;

    $("#todayLabel").textContent = `오늘: ${todayKey()} · 선택: ${sel}`;
    $("#selectedLabel").textContent = `${sel} (${state.profile.name ? state.profile.name + "님" : "이름 미설정"})`;
    $("#profileBadge").textContent = state.profile.name ? `👤 ${state.profile.name}` : "설정에서 이름을 입력해 주세요";

    const rec = ensureRecord(sel);
    $("#inTime").value = rec.in || "";
    $("#outTime").value = rec.out || "";
    $("#note").value = rec.note || "";

    renderCalendar();
    syncStatusButtons(rec.status);
  }

  function renderPay() {
    $("#wageHourly").value = String(state.payPreset.hourly ?? 10320);
    $("#wageMonthlyHours").value = String(state.payPreset.monthlyHours ?? 209);
    $("#allowOT").value = String(state.payPreset.allowOT ?? 0);
    $("#allowSpecial").value = String(state.payPreset.allowSpecial ?? 0);
    $("#allowMaterial").value = String(state.payPreset.allowMaterial ?? 0);
    $("#allowForklift").value = String(state.payPreset.allowForklift ?? 0);

    calcPay();
  }

  function renderAll() {
    applyTheme();
    renderPay();
    renderAttendance();
    renderReport();
    setTab(state.ui.tab || "attendance");

    // ✅ 새로고침 했는데 payOpen이면 급여 화면으로 복구
    if (state.ui.payOpen) {
      document.body.classList.add("payOnly");
      $("#payCard").classList.add("open");
      $("#payCard").setAttribute("aria-hidden", "false");
    } else {
      document.body.classList.remove("payOnly");
      $("#payCard").classList.remove("open");
      $("#payCard").setAttribute("aria-hidden", "true");
    }
  }

  function escapeHtml(str) {
    return String(str || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // ---------- Bind
  function bind() {
    // Tabs
    $$(".tab").forEach(b => b.addEventListener("click", () => setTab(b.dataset.tab)));

    // Calendar nav
    $("#btnPrevMonth").addEventListener("click", () => shiftMonth(-1, "cal"));
    $("#btnNextMonth").addEventListener("click", () => shiftMonth(1, "cal"));

    // Report nav
    $("#btnReportPrev").addEventListener("click", () => shiftMonth(-1, "report"));
    $("#btnReportNext").addEventListener("click", () => shiftMonth(1, "report"));

    // Attendance actions
    $("#btnIn").addEventListener("click", () => setStatus("in"));
    $("#btnOut").addEventListener("click", () => setStatus("out"));
    $("#btnLeave").addEventListener("click", () => setStatus("leave"));
    $("#btnHalf").addEventListener("click", () => setStatus("half"));
    $("#btnAbsent").addEventListener("click", () => setStatus("absent"));

    $("#inTime").addEventListener("input", (e) => setTime("in", e.target.value));
    $("#outTime").addEventListener("input", (e) => setTime("out", e.target.value));
    $("#note").addEventListener("input", (e) => setNote(e.target.value));

    $("#btnUndo").addEventListener("click", undo);
    $("#btnResetDay").addEventListener("click", resetDay);

    // ✅ Pay: 급여만 보기 모드
    $("#btnPayToggle").addEventListener("click", () => {
      openPayOnly();
      renderPay();
      showToast("급여 계산기 화면입니다 📊");
    });
    $("#btnPayClose").addEventListener("click", () => {
      closePayOnly();
      showToast("출근부로 돌아왔습니다 ✅");
    });

    // Pay inputs
    ["wageHourly","wageMonthlyHours","allowOT","allowSpecial","allowMaterial","allowForklift"]
      .forEach(id => $("#" + id).addEventListener("input", syncPayInputsToState));

    // Export + backup/restore
    $("#btnExportCsv").addEventListener("click", exportMonthCsv);
    $("#btnBackup").addEventListener("click", backupJson);
    $("#btnRestore").addEventListener("click", () => $("#fileRestore").click());
    $("#fileRestore").addEventListener("change", (e) => {
      const f = e.target.files?.[0];
      if (f) restoreJson(f);
      e.target.value = "";
    });

    // Settings
    $("#btnSaveSettings").addEventListener("click", saveSettings);
    $("#btnResetSettings").addEventListener("click", resetSettings);

    // PWA SW
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    }
  }

  // ---------- Boot
  let state = load();

  // 초기 캘린더 월 동기화
  {
    const { y, m } = parseKey(state.ui.selected);
    state.ui.calYear = y || 2026;
    state.ui.calMonth = m || 1;
    state.ui.reportYear = y || 2026;
    state.ui.reportMonth = m || 1;
    save();
  }

  bind();
  renderAll();
  showToast("준비 완료 ✅ 출근/퇴근을 눌러 기록해 보세요!");
})();
