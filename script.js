document.addEventListener('DOMContentLoaded', function () {
  // Carousel
  const items = document.querySelectorAll('.carousel-item');
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentIdx = 0;

  function updateCarousel(idx) {
    items.forEach((item, i) => item.classList.toggle('active', i === idx));
    track.style.transform = `translateX(-${idx * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIdx = (currentIdx - 1 + items.length) % items.length;
    updateCarousel(currentIdx);
  });
  nextBtn.addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % items.length;
    updateCarousel(currentIdx);
  });
  setInterval(() => {
    currentIdx = (currentIdx + 1) % items.length;
    updateCarousel(currentIdx);
  }, 8000);

  // Init
  updateCarousel(currentIdx);
});
