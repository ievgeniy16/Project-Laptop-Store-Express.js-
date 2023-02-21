export function carousel() {
    let slideIndex = 1;
    shwowSlides(slideIndex);

    document.querySelector('.prev').addEventListener('click', () => {
        shwowSlides(slideIndex += -1)
    });
    document.querySelector('.next').addEventListener('click', () => {
        shwowSlides(slideIndex += 1)
    });

    setInterval(function () {
        shwowSlides(slideIndex += 1);
    }, 3000);

    

    function shwowSlides(n) {
        let slides = document.getElementsByClassName('img_slade');

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[slideIndex - 1].style.display = 'block';
    }
}