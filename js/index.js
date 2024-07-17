

const checkbox = document.getElementById("checkbox");

const toggleTheme = () => {
  document.body.classList.toggle("dark");
};

checkbox.addEventListener("change", toggleTheme);

// swiper

// Инициализация Swiper
const swiper = new Swiper('.swiper', {
  // Опциональные параметры
  direction: 'horizontal',
  loop: true,

  // Если нужна пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Навигационные стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // И если нужен скроллбар
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});