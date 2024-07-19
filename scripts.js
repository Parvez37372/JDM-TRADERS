let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-100 * index}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Zoom functionality
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const zoomableImages = document.querySelectorAll('.zoomable');
const close = document.getElementsByClassName('close')[0];

zoomableImages.forEach(image => {
    image.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    }
});

close.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
