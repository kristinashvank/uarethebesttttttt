

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
document.addEventListener("DOMContentLoaded", function () {

  const correctPassword = "125512";

  const form = document.getElementById("loginForm");
  const passwordInput = document.getElementById("password");
  const errorText = document.getElementById("error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (passwordInput.value === correctPassword) {
      localStorage.setItem("access", "yes");
      window.location.href = "home.html";
    } else {
      errorText.innerText = "Думай, роднусь";
    }
  });

});



