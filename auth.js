function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email && password) {
    localStorage.setItem("userLoggedIn", "true");
    window.location.href = "home.html";
  } else {
    alert("Zadej platný email a heslo.");
  }
}

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email && password) {
    localStorage.setItem("userLoggedIn", "true");
    window.location.href = "home.html";
  } else {
    alert("Zadej platný email a heslo.");
  }
}
