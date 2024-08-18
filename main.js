let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');
let mobileMenu =document.getElementById('mobileMenu');

openMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'block';

    closeMenu.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    })
})