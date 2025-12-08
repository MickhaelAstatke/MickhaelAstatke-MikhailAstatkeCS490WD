// Dynamic Greeting
(function setGreeting() {
  const greetingEl = document.getElementById("greeting");
  const hour = new Date().getHours();
  let message = "Hi, I'm Mickhael.";

  if (hour >= 5 && hour < 12) message = "Good morning, I'm Mickhael.";
  else if (hour >= 12 && hour < 18) message = "Good afternoon, I'm Mickhael.";
  else message = "Good evening, I'm Mickhael.";

  if (greetingEl) greetingEl.textContent = message;
})();

// Auto Year Footer
(function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Dark Mode Toggle (FIXED)
(function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    if (toggleBtn) toggleBtn.textContent = "🌙";
  } else {
    if (toggleBtn) toggleBtn.textContent = "☀️";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");

      toggleBtn.textContent = isLight ? "🌙" : "☀️";
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }
})();

// Scroll To Top Button
(function initScrollToTop() {
  const scrollBtn = document.getElementById("scrollTopBtn");

  // Show button after scrolling 200px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
\
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
})();
