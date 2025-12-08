// Dynamic Greeting Based on Time
(function setGreeting() {
  const greetingEl = document.getElementById("greeting");
  const hour = new Date().getHours();

  let message = "Hi, I'm Mickhael.";

  if (hour >= 5 && hour < 12) {
    message = "Good morning, I'm Mickhael.";
  } else if (hour >= 12 && hour < 18) {
    message = "Good afternoon, I'm Mickhael.";
  } else {
    message = "Good evening, I'm Mickhael.";
  }

  if (greetingEl) greetingEl.textContent = message;
})();


// Auto Footer Year
(function setYear() {
  const yearEl = document.getElementById("year");
  const year = new Date().getFullYear();
  if (yearEl) yearEl.textContent = year;
})();


// Dark Mode Toggle Logic
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
      const lightNow = document.body.classList.contains("light-theme");

      toggleBtn.textContent = lightNow ? "🌙" : "☀️";
      localStorage.setItem("theme", lightNow ? "light" : "dark");
    });
  }
})();


// Scroll To Top Button
(function initScrollToTop() {
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (!scrollBtn) return;

    if (window.scrollY > 200) {
      scrollBtn.style.display = "inline-block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
})();
