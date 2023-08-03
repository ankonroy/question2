// write your JavaScript here

const toggleBtn = document.querySelector(".menu_btn");
const mobileMenu = document.querySelector(".mobile_menu");
// const top = document.querySelector(".top");
// const low = document.querySelector(".low");

let open = false;

function openNav() {
    if(open) {
        closeNav();
        return;
    }

    mobileMenu.style.width = '100%';
    toggleBtn.src = "design/close.png";

    // low.style.marginTop = '0';
    // low.style.rotate= '-45deg';
    // top.style.rotate= '45deg';

    open = !open;
}

function closeNav() {
    mobileMenu.style.width = "0";
    toggleBtn.src = "design/open.png";

    // low.style.marginTop = "0";
    // low.style.rotate = "0deg";
    // top.style.rotate = "0deg";

    open = !open;
}