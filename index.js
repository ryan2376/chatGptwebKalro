// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize Swiper for projects section
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

// Image grid hover effect
const imageGridItems = document.querySelectorAll('.image-grid img');
imageGridItems.forEach(item => {
  item.addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.1)';
  });

  item.addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
  });
});