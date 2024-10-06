const toplinks = document.querySelectorAll('.toplink');

toplinks.forEach(link => {
    const dropdown = link.querySelector('.dropdown');

    link.addEventListener('mouseover', () => {
        dropdown.style.visibility = 'visible'; //visible
        dropdown.style.opacity = '1'; // fade in
    });

    link.addEventListener('mouseleave', () => {
        dropdown.style.opacity = '0'; 
        setTimeout(() => {
            dropdown.style.visibility = 'hidden'; //visibility fading out
        }, 0); //timeout
    });
});




const topbar = document.querySelector('.topbar');
//topbar scroll color change
function changeTopbarColorOnScroll() {
    if (window.scrollY > 5) {
        topbar.style.backgroundColor = '#2c2c2c';
    } else {
        topbar.style.backgroundColor = 'transparent'; 
    }
}


window.addEventListener('scroll', changeTopbarColorOnScroll);