// 1. selecteer alle buttons (querySelectorAll)
const desktopItems = document.querySelectorAll(".desktop-item");

// 2. loop door alle buttons && voeg voor iedere button een eventListener toe
desktopItems.forEach(desktopItem => {
    const desktopItemsButton = desktopItem.querySelector("button");
    desktopItemsButton.addEventListener("click", togglePopup);
})

// 3. togglePopup met een parameter (element)
function togglePopup(event) {
    const desktopItemButton = event.currentTarget; 
    const desktopItem = desktopItemButton.closest(".desktop-item");
    const desktopWindow = desktopItem.querySelector("article");
    desktopWindow.classList.toggle("show");
}