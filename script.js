// Countdown Timer
const countdown = document.getElementById('countdown');
const targetDate = new Date('2025-05-28T10:00:00').getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "Hari Bahagia Telah Tiba!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);

// RSVP Form Dummy
const form = document.getElementById('rsvp-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Terima kasih atas konfirmasi Anda!');
  form.reset();
});

// Inisialisasi SwiperJS
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: 'slide',
});

// Animasi smooth saat halaman dibuka
window.addEventListener('load', () => {
  document.querySelector('.hero h1').style.opacity = 0;
  document.querySelector('.hero p').style.opacity = 0;

  setTimeout(() => {
    document.querySelector('.hero h1').style.transition = 'opacity 1s';
    document.querySelector('.hero p').style.transition = 'opacity 1s';
    document.querySelector('.hero h1').style.opacity = 1;
    document.querySelector('.hero p').style.opacity = 1;
  }, 500);
});
