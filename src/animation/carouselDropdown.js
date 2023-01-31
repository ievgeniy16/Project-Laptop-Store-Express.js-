// window.addEventListener('scroll', scrollFunction);
window.onscroll = function () {
    scrollFunction();
};

window.addEventListener('load', carousel);

dropdown();


//funtion 1 стрелка вверх 
function scrollFunction() {
    if (document.documentElement.scrollTop > 300) {
        document.getElementById('myBtn').style.display = 'block';
    } else {
        document.getElementById('myBtn').style.display = 'none';
    }
}
// catalog call this function
function topFunction() {
    document.documentElement.scrollTop = 0;
}


 
// function 2 
function dropdown() {
    let up = document.querySelector('.up');
    up = up.style.display = 'none';

    document.getElementById('clickMenu').addEventListener('click', () => {
        if (document.querySelector('.up').style.display === 'none') {
            document.querySelector('.up').style.display = 'inline-block';
            document.querySelector('.down').style.display = 'none';
            document.querySelector('.visible_menu').style.display = 'block';
        } else {
            document.querySelector('.up').style.display = 'none';
            document.querySelector('.down').style.display = 'inline-block';
            document.querySelector('.visible_menu').style.display = 'none';
        }
    });

    let up1 = document.querySelector('.up1');
    up1 = up1.style.display = 'none';

    document.getElementById('clickMenu1').addEventListener('click', () => {
        if (document.querySelector('.up1').style.display === 'none') {
            document.querySelector('.up1').style.display = 'inline-block';
            document.querySelector('.down1').style.display = 'none';
            document.querySelector('.visible_menu1').style.display = 'block';
        } else {
            document.querySelector('.up1').style.display = 'none';
            document.querySelector('.down1').style.display = 'inline-block';
            document.querySelector('.visible_menu1').style.display = 'none';
        }
    });

}




// function 3
function carousel() {
    let slideIndex = 1;
    shwowSlides(slideIndex);
  
    document.querySelector('.prev').addEventListener('click', () => {
        shwowSlides(slideIndex += -1)
    });
    document.querySelector('.next').addEventListener('click', () => {
        shwowSlides(slideIndex += 1)
    });

    setInterval(function () {
        shwowSlides(slideIndex += 1)
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





// DETAILS PART
/*
function detailsPart() {
    let index = 1;
    showSlides(index);
    // function plusSlides(n) {
    //     showSlides(index += n);
    // }
    document.querySelector('.prev_laptop').addEventListener('click', () => {
        showSlides(index += -1)
    });
    document.querySelector('.next_laptop').addEventListener('click', () => {
        showSlides(index += 1)
    });
    // function currentSlide(n) {
    //     showSlides(index = n);
    // }
    document.querySelector('.row_laptop').addEventListener('click', (event) => {
        console.log(event);
        let numberImg = event.target.attributes[3].value
        showSlides(index = numberImg);
    });

    function showSlides(n) {
        let slides = document.getElementsByClassName('img_box_laptop');
        let dots = document.getElementsByClassName('demo_laptop');
        if (n > slides.length) {
            index = 1;
        }
        if (n < 1) {
            index = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active_laptop', '')
        }
        slides[index - 1].style.display = 'block';
        dots[index - 1].className += ' active_laptop';
    }



    // при нажатии фото окрывается на вecь экран
    function openModal() {
        document.getElementById('myModal').style.display = 'block';
    }
    document.querySelector('.show_main_menu').addEventListener('click', (event) => {
        document.getElementById('myModal').style.display = 'block';
    })
    function closeModal() {
        document.getElementById('myModal').style.display = 'none';
    }

    let index2 = 1;

    showSlides2(index2);

    function plusSlides2(n) {
        showSlides2(index2 += n);
    }
    function currentSlide2(n) {
        showSlides2(index2 = n);
    }

    function showSlides2(n) {
        let hiddenSlides = document.getElementsByClassName('mySlides');
        let hiddenDots = document.getElementsByClassName('demo');
        console.log(hiddenDots);

        if (n > hiddenSlides.length) {
            index2 = 1;
        }
        if (n < 1) {
            index2 = hiddenSlides.length;
        }

        for (let i = 0; i < hiddenSlides.length; i++) {
            hiddenSlides[i].style.display = 'none';
        }

        for (let i = 0; i < hiddenDots.length; i++) {
            // почему так оно не работает
            // hiddenDots[i].className = hiddenDots[i].className.replace(' active_laptop', '');
            hiddenDots[i].style.opacity = '0.6';
        }
        hiddenSlides[index2 - 1].style.display = 'block';
        // почему так оно не работает
        // hiddenDots[slideIndex2 - 1].className += ' active_laptop';
        hiddenDots[index2 - 1].style.opacity = '1';
    }

}
*/