// FAQ Accordion Logic
function toggleFAQ(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector(".material-symbols-outlined");

  // Toggle current
  if (content.style.height && content.style.height !== "0px") {
    content.style.height = "0px";
    icon.style.transform = "rotate(0deg)";
    button.classList.remove("bg-white/10");
  } else {
    content.style.height = content.scrollHeight + "px";
    icon.style.transform = "rotate(180deg)";
    button.classList.add("bg-white/10");
  }
}

// Mobile Menu Toggle Logic
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const button = document.querySelector("[aria-controls='mobile-menu']");
  const icon = button.querySelector(".material-symbols-outlined");

  const isHidden = menu.classList.contains("hidden");

  if (isHidden) {
    menu.classList.remove("hidden");
    button.setAttribute("aria-expanded", "true");
    icon.textContent = "close";
  } else {
    menu.classList.add("hidden");
    button.setAttribute("aria-expanded", "false");
    icon.textContent = "menu";
  }
}

// Scroll Animation Observer
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));
});
