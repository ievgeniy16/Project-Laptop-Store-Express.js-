export function dropdown() {
    let up = document.querySelector('.up');
    up = up.style.display = 'none';

    // докато не ce затворя dropdown не може да се scroll
    function offScrollTo() {
        window.scrollTo(0, 0);
    }

    document.getElementById('clickMenu').addEventListener('click', () => {
        if (document.querySelector('.up').style.display === 'none') {
            document.querySelector('.up').style.display = 'inline-block';
            document.querySelector('.down').style.display = 'none';
            document.querySelector('.visible_menu').style.display = 'block';
            
            window.addEventListener('scroll', offScrollTo);

        } else {
            document.querySelector('.up').style.display = 'none';
            document.querySelector('.down').style.display = 'inline-block';
            document.querySelector('.visible_menu').style.display = 'none';

            window.removeEventListener('scroll', offScrollTo);
        }
    });
}