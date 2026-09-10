// ============================================================
// Виджет "Трекер груза" — под новую вёрстку (cargo-route)
// Требует библиотеку supabase-js, подключённую ДО этого файла:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
// <script src="tracker.js"></script>
// ============================================================

const SUPABASE_URL = "https://rciddlsipiijiubuhmxi.supabase.co";
const SUPABASE_KEY = "sb_publishable_Prv9YVmOwHzLWPdW3ao92g_mrdlluIn";
const TABLE_NAME = "JWS-Group";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function renderTracker(row) {
  document.getElementById("trackerId").textContent = "· " + row.track_id;
  document.getElementById("trackerStatus").textContent = (row.status || "").toUpperCase();
  document.getElementById("trackerStatusMeta").textContent = row.status || "—";
  document.getElementById("trackerWeight").textContent = (row.weight || "—") + " кг";

  const eta = document.getElementById("trackerEta");
  eta.innerHTML = (row.eta_days ?? "—") + " <span>дня</span>";

  document.getElementById("originName").textContent = row.origin || "—";
  document.getElementById("originSub").textContent = row.origin_country || "";
  document.getElementById("borderName").textContent = row.border || "—";
  document.getElementById("borderSub").textContent = row.border_label || "";
  document.getElementById("destName").textContent = row.destination || "—";
  document.getElementById("destSub").textContent = row.destination_label || "";

  const stage = parseInt(row.stage, 10) || 1;

  const point1 = document.getElementById("point1");
  const point2 = document.getElementById("point2");
  const point3 = document.getElementById("point3");
  const conn1 = document.getElementById("conn1");
  const conn2 = document.getElementById("conn2");
  const truck = document.getElementById("truckIndicator");

  [point1, point2].forEach((p) => p.classList.remove("active"));
  point3.classList.remove("active");
  conn1.classList.remove("active");
  conn2.classList.remove("active");
  conn2.classList.add("transit");

  if (stage >= 1) point1.classList.add("active");

  if (stage >= 2) {
    conn1.classList.add("active");
    point2.classList.add("active");
    if (truck && conn2 && truck.parentElement !== conn2) {
      conn2.appendChild(truck);
    }
  } else if (truck && conn1 && truck.parentElement !== conn1) {
    conn1.appendChild(truck);
  }

  if (stage >= 3) {
    conn2.classList.remove("transit");
    conn2.classList.add("active");
    point3.classList.add("active");
    if (truck) truck.style.display = "none";
  } else if (truck) {
    truck.style.display = "";
  }

  document.getElementById("trackerWidget").hidden = false;
  document.getElementById("trackerError").hidden = true;
}

function showTrackerError() {
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
    document.getElementById("trackerError").hidden = true;

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
