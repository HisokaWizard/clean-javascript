let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
    
function showSlides(n) {
    const slides = document.getElementsByClassName('my-slides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }

    slides[slideIndex - 1].getElementsByClassName.display = 'block';
    dots[slideIndex - 1].className += 'active';
}