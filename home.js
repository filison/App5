document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("userLoggedIn")) {
    window.location.href = "login.html";
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("userLoggedIn");
      window.location.href = "login.html";
    });
  }

  const buttons = document.querySelectorAll(".tip-toggle");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      document.querySelectorAll(".tip-content").forEach(el => {
        if (el !== content) el.style.display = "none";
      });
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  const ctx = document.getElementById("myChart");
  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Příjmy", "Výdaje"],
        datasets: [{
          label: "Přehled (Kč)",
          data: [12000, 7500],
          backgroundColor: ["#4CAF50", "#F44336"]
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    });
  }
});

function toggleMenu() {
  document.getElementById("menu").classList.toggle("hidden");
}
