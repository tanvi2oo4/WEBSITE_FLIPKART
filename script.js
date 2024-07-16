var navlinks = document.getElementById("nav-links");
function Showmenu() {
    navlinks.style.zIndex = 1000;
    navlinks.style.display = 'block';
    navlinks.style.background = 'black'
}
let Hidemenu = () => {
    navlinks.style.zIndex = -10000000;
    navlinks.style.background = 'white'
}