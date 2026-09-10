// ============================================================
// Виджет "Трекер груза" — версия на Supabase
// Требует подключения библиотеки supabase-js ПЕРЕД этим файлом:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
// <script src="tracker.js"></script>
// ============================================================

const SUPABASE_URL = "https://rciddlsipiijiubuhmxi.supabase.co";
const SUPABASE_KEY = "sb_publishable_Prv9YVmOwHzLWPdW3ao92g_mrdlluIn";
const TABLE_NAME = "JWS-Group"; // имя таблицы в Supabase

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function renderTracker(row) {
  document.getElementById("trackerId").textContent = "JWS / " + row.track_id;
  document.getElementById("trackerStatus").textContent = (row.status || "").toUpperCase();
  document.getElementById("trackerStatusMeta").textContent = row.status || "—";
  document.getElementById("trackerWeight").textContent = (row.weight || "—") + " кг";

  const eta = document.getElementById("trackerEta");
  eta.innerHTML = (row.eta_days ?? "—") + " <span>дня</span>";

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

  const truck = document.getElementById("truckMarker");
  if (truck) {
    const positions = { 1: "0%", 2: "50%", 3: "100%" };
    truck.style.left = positions[stage] || "0%";
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
    const query = input.value.trim();
    if (!query) return;

    const button = form.querySelector("button");
    const originalText = button.textContent;
    button.textContent = "Ищем...";
    button.disabled = true;

    try {
      const { data, error } = await supabaseClient
        .from(TABLE_NAME)
        .select("*")
        .ilike("track_id", query)
        .limit(1);

      if (error) {
        console.error(error);
        showTrackerError();
      } else if (data && data.length > 0) {
        renderTracker(data[0]);
      } else {
        showTrackerError();
      }
    } catch (err) {
      console.error(err);
      showTrackerError();
    } finally {
      button.textContent = originalText;
      button.disabled = false;
    }
  });
});
