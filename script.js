// 🔐 ПАРОЛЬ
function checkPassword() {
  const pass = document.getElementById("password").value;
  const correct = "125512"; // 🔴 можешь поменять пароль

  if (pass === correct) {
    localStorage.setItem("access", "yes");
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText = "Думай роднусь";
  }
}

// ⛔ защита страниц
if (window.location.pathname.includes("home")) {
  if (localStorage.getItem("access") !== "yes") {
    window.location.href = "index.html";
  }
}

// ⏳ Письма по дате
document.querySelectorAll(".letter[data-date]").forEach(el => {
  const openDate = new Date(el.dataset.date);
  const now = new Date();

  if (now >= openDate) {
    el.querySelector(".content").style.display = "block";
    el.querySelector("span").style.display = "none";
  }
});

// 🔄 Событийные письма
document.querySelectorAll(".event-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const letter = btn.parentElement;
    letter.querySelector(".content").style.display = "block";
    letter.querySelector("span").style.display = "none";
    btn.style.display = "none";
  });
});

// 🔊 Кнопка музыки
const musicBtn = document.getElementById("play-music");
const music = document.getElementById("bg-music");

musicBtn.addEventListener("click", () => {
  music.play();
  musicBtn.style.display = "none";
});





