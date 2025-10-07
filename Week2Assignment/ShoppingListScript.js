// helpers
const $ = (sel) => document.querySelector(sel);

const input = $("#itemInput");
const addBtn = $("#addBtn");
const list = $("#list");
const clearBtn = $("#clearBtn");
const counter = $("#counter");

function updateCounter() {
  const count = list.querySelectorAll(".item").length;
  counter.textContent = `${count} ${count === 1 ? "item" : "items"}`;
}

function addItem(name) {
  if (!name || !name.trim()) return;
  const li = document.createElement("li");
  li.className = "item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
  });

  const span = document.createElement("span");
  span.className = "name";
  span.textContent = name.trim();

  const rm = document.createElement("button");
  rm.className = "remove";
  rm.setAttribute("aria-label", `Remove ${name}`);
  rm.textContent = "×";
  rm.addEventListener("click", () => {
    li.remove();
    updateCounter();
  });

  li.append(checkbox, span, rm);
  list.appendChild(li);
  updateCounter();
}

function handleAdd() {
  addItem(input.value);
  input.value = "";
  input.focus();
}

// events
addBtn.addEventListener("click", handleAdd);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleAdd();
});
clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
  updateCounter();
});

// initialize
updateCounter();
