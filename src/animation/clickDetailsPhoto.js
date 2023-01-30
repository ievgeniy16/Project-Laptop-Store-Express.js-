let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName('img_box_laptop');
    let dots = document.getElementsByClassName('demo_laptop');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active_laptop', '')
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active_laptop';
}





// новое при открытии фотографии
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

let slideIndex2 = 1;

showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}
function showSlides2(n) {
    let hiddenSlides = document.getElementsByClassName('mySlides');
    let hiddenDots = document.getElementsByClassName('demo');
    console.log(hiddenDots);

    if (n > hiddenSlides.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = hiddenSlides.length;
    }

    for (let i = 0; i < hiddenSlides.length; i++) {
        hiddenSlides[i].style.display = 'none';
    }

    for (let i = 0; i < hiddenDots.length; i++) {
        // почему так оно не работает
        // hiddenDots[i].className = hiddenDots[i].className.replace(' active_laptop', '');
        hiddenDots[i].style.opacity = '0.6';
    }
    hiddenSlides[slideIndex2 - 1].style.display = 'block';
    // почему так оно не работает
    // hiddenDots[slideIndex2 - 1].className += ' active_laptop';
    hiddenDots[slideIndex2 - 1].style.opacity = '1';
}
