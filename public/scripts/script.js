const desktopIcon1 = document.querySelector(".icon1 button");
const window1 = document.querySelector(".item1");

const desktopIcon2 = document.querySelector(".icon2 button");
const window2 = document.querySelector(".item2");

const desktopIcon3 = document.querySelector(".icon3 button");
const window3 = document.querySelector(".item3");

const desktopIcon4 = document.querySelector(".icon4 button");
const window4 = document.querySelector(".item4");

const desktopIcon5 = document.querySelector(".icon5 button");
const window5 = document.querySelector(".item5");

const desktopIcon6 = document.querySelector(".icon6 button");
const window6 = document.querySelector(".item6");

desktopIcon1.addEventListener("click", visibilityHandlerWindow1);
desktopIcon2.addEventListener("click", visibilityHandlerWindow2);
desktopIcon3.addEventListener("click", visibilityHandlerWindow3);
desktopIcon4.addEventListener("click", visibilityHandlerWindow4);
desktopIcon5.addEventListener("click", visibilityHandlerWindow5);
desktopIcon6.addEventListener("click", visibilityHandlerWindow6);

function visibilityHandlerWindow1() {
    window1.classList.toggle("show");
}

function visibilityHandlerWindow2() {
    window2.classList.toggle("show");
}

function visibilityHandlerWindow3() {
    window3.classList.toggle("show");
}

function visibilityHandlerWindow4() {
    window4.classList.toggle("show");
}

function visibilityHandlerWindow5() {
    window5.classList.toggle("show");
}

function visibilityHandlerWindow6() {
    window6.classList.toggle("show");
}