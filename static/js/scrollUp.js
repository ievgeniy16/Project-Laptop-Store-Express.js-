export function topFunction() {
     document.getElementById('myBtn').addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });

    document.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 200) {
            document.getElementById('myBtn').style.display = 'block';
        } else {
            document.getElementById('myBtn').style.display = 'none';
        }
    });
}