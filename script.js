// Typewriter Effect (on name)
const nameText = "Sadiq Miah";
let i = 0;
const speed = 100;

function typeWriter() {
  if (i < nameText.length) {
    document.getElementById("typewriter").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Light/Dark Mode Toggle with Label
const toggleBtn = document.getElementById('toggle-mode');
function updateToggleText() {
  const isLight = document.body.classList.contains('light-mode');
  toggleBtn.innerHTML = isLight ? '🌞 Light' : '🌛 Dark';
  toggleBtn.classList.toggle('btn-outline-dark', isLight);
  toggleBtn.classList.toggle('btn-outline-light', !isLight);
}
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  updateToggleText();
});
updateToggleText();

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// --- Initialization ---
window.onload = function() {
  typeWriter();      // Start typewriter
  updateToggleText(); // Set initial button state
};
