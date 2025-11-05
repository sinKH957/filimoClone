// هدر موبایل
function toggleMenu(el) {
    const nav = document.querySelector('.nav-links');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
function toggleDropdown(el) {
    if(window.innerWidth < 768){
        el.classList.toggle('active');
    }
}

// اسلایدر اصلی
const slides = document.querySelector('.main-slides');
const images = document.querySelectorAll('.main-slides img');
const total = images.length;
let index = 0;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
function showSlide(i) {
    if(i < 0) index = total - 1;
    else if(i >= total) index = 0;
    else index = i;
    slides.style.transform = `translateX(${-index * 100}%)`;
}
nextBtn.addEventListener('click', () => { showSlide(index + 1); });
prevBtn.addEventListener('click', () => { showSlide(index - 1); });

// Filter
document.querySelectorAll('.filter-wrapper select, #hdOnly').forEach(el => {
  el.addEventListener('change', () => {
    const filters = {
      type: document.getElementById('type').value,
      language: document.getElementById('language').value,
      age: document.getElementById('age').value,
      country: document.getElementById('country').value,
      genre: document.getElementById('genre').value,
      year: document.getElementById('year').value,
      hdOnly: document.getElementById('hdOnly').checked
    };
    console.log("Active Filters:", filters);
  });
});

// اسلایدر کارت‌ها
const slider = document.querySelector('.movie-slider');
const next = document.querySelector('.slidercontainernext');
const prev = document.querySelector('.slidercontainerprev');

next.addEventListener('click', () => {
  slider.scrollLeft -= 400; // حرکت به سمت جلو (در RTL)
});

prev.addEventListener('click', () => {
  slider.scrollLeft += 400; // حرکت به سمت عقب
});

