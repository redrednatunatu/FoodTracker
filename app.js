// Save food entry
function addFood() {
  const food = document.getElementById("foodInput").value.trim();
  if (!food) return;

  const date = new Date().toISOString().split("T")[0];
  const entries = JSON.parse(localStorage.getItem("foodEntries")) || [];

  entries.push({ food, date });
  localStorage.setItem("foodEntries", JSON.stringify(entries));

  document.getElementById("foodInput").value = "";
  displayEntries(entries);
}

// Display entries
function displayEntries(entries = null) {
  const list = document.getElementById("entriesList");
  const allEntries = entries || JSON.parse(localStorage.getItem("foodEntries")) || [];

  list.innerHTML = "";
  allEntries.forEach(entry => {
    const div = document.createElement("div");
    div.className = "entry";
    div.textContent = `${entry.date}: ${entry.food}`;
    list.appendChild(div);
  });
}

// Search entries
function searchEntries() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const entries = JSON.parse(localStorage.getItem("foodEntries")) || [];

  const filtered = entries.filter(entry =>
    entry.food.toLowerCase().includes(query) || entry.date.includes(query)
  );

  displayEntries(filtered);
}

// On load
document.addEventListener("DOMContentLoaded", () => displayEntries());
