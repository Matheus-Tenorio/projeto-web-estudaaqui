document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
  });
});

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

const cardWidth = 180 + 16;

let currentPosition = 0;

nextButton.addEventListener('click', () => {
  const maxScroll = -(cardWidth * (track.children.length - 5)); 
  if (currentPosition > maxScroll) {
    currentPosition -= cardWidth;
    track.style.transform = `translateX(${currentPosition}px)`;
  }
});

prevButton.addEventListener('click', () => {
  if (currentPosition < 0) {
    currentPosition += cardWidth;
    track.style.transform = `translateX(${currentPosition}px)`;
  }
});
