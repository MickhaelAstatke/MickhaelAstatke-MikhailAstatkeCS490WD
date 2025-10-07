// #1) grab elements
const input   = document.getElementById("itemInput");
const addBtn  = document.getElementById("addBtn");
const list    = document.getElementById("list");
const clearBtn = document.getElementById("clearBtn");
const counter = document.getElementById("counter");

// #2) update the items counter
function updateCounter() {
  const items = list.querySelectorAll("li");
  counter.textContent = `${items.length} ${items.length === 1 ? "item" : "items"}`;
}

// #3) add button handler
addBtn.addEventListener("click", () => {
  const text = input.value.trim();        // ignore extra spaces
  if (!text) return;                      // ignore empty

  const li = document.createElement("li");
  li.textContent = text;

  // toggle done state on list item click
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();   // don’t toggle done wh
