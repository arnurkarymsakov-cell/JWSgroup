// ============================================================
// Виджет "Трекер груза"
// Тянет данные из публичной Google-таблицы (опубликованной как CSV)
// и подставляет их в карточку .tracker на сайте.
// Инструкция по настройке таблицы: 1-SETUP-Google-Sheet.md
// ============================================================

// ЗАМЕНИТЕ на вашу ссылку из шага 5 инструкции (Publish to web → CSV)
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMCQZcWxrqZmFBkp9bDDB8ICDUSMUfg3KlpWbkmSI-K6uXMrb3x0j0IxQZVYRS3SbGuRH8-hxcg6zr/pub?output=csv"
let trackerRows = null; // кэш строк таблицы после первой загрузки

// Разбор одной CSV-строки с учётом кавычек (на случай запятых внутри значений)
function splitCsvLine(line) {
  const result = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      result.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  result.push(cur);
  return result;
}

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  const headers = splitCsvLine(lines[0]).map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const cells = splitCsvLine(line);
    const row = {};
    headers.forEach((h, i) => (row[h] = (cells[i] || "").trim()));
    return row;
  });
}

async function loadTrackerData() {
  if (trackerRows) return trackerRows;
  const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Не удалось загрузить данные трекера");
  const text = await res.text();
  trackerRows = parseCSV(text);
  return trackerRows;
}

function renderTracker(row) {
  document.getElementById("trackerId").textContent = "JWS / " + row.track_id;
  document.getElementById("trackerStatus").textContent = (row.status || "").toUpperCase();
  document.getElementById("trackerStatusMeta").textContent = row.status || "—";
  document.getElementById("trackerWeight").textContent = (row.weight || "—") + " кг";

  const eta = document.getElementById("trackerEta");
  eta.innerHTML = (row.eta_days || "—") + " <span>дня</span>";

  document.getElementById("originLabel").innerHTML =
    (row.origin || "") + "<br><small>" + (row.origin_country || "") + "</small>";
  document.getElementById("borderLabel").innerHTML =
    (row.border || "") + "<br><small>" + (row.border_label || "") + "</small>";
  document.getElementById("destLabel").innerHTML =
    (row.destination || "") + "<br><small>" + (row.destination_label || "") + "</small>";

  const stage = parseInt(row.stage, 10) || 1;
  const node1 = document.getElementById("node1");
  const node2 = document.getElementById("node2");
  const node3 = document.getElementById("node3");
  [node1, node2, node3].forEach((n) => n.classList.remove("active", "end"));

  if (stage >= 1) node1.classList.add("active");
  if (stage >= 2) node2.classList.add("active");
  if (stage >= 3) {
    node3.classList.add("active");
  } else {
    node3.classList.add("end");
  }

  document.getElementById("trackerResult").hidden = false;
  document.getElementById("trackerError").hidden = true;
}

function showTrackerError() {
  document.getElementById("trackerResult").hidden = true;
  document.getElementById("trackerError").hidden = false;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("trackerSearchForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.getElementById("trackerInput");
    const query = input.value.trim().toLowerCase();
    if (!query) return;

    try {
      const rows = await loadTrackerData();
      const row = rows.find((r) => (r.track_id || "").toLowerCase() === query);
      if (row) {
        renderTracker(row);
      } else {
        showTrackerError();
      }
    } catch (err) {
      console.error(err);
      showTrackerError();
    }
  });
});
