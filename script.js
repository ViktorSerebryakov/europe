var carousel = document.querySelector('.carousel-js');
var buttons = document.querySelector('.buttons-js');

function setPosition (event) {
    var target = event.target;
    var currentPosition = parseInt(getComputedStyle(carousel).left, 10);
    if (target.classList.contains('left-js')) {
        currentPosition > 0 ? carousel.style.left = -970 + 'px' : carousel.style.left = currentPosition + 100 + 'px';
    } else if (target.classList.contains('right-js')) {
        currentPosition < -970 ? carousel.style.left = 0 + 'px' : carousel.style.left = currentPosition - 100 + 'px';
    }
}

buttons.addEventListener('click', setPosition);

// slider

var slides = document.querySelectorAll('.slide-js');
var count = 0;

function setSlide() {
    slides[count].classList.remove('show');
    count = (count+1)%slides.length;
    slides[count].classList.add('show');
}

var slideInterval = setInterval(setSlide, 2000);