const slides = document.querySelectorAll('.slide');

for(const slide of slides) {
    slide.addEventListener('click', () => {
        activeClasses()
        slide.classList.add('active');
    })
}
function activeClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active')  
    })
}