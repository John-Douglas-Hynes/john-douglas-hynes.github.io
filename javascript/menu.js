const floatingTabs = document.querySelector(".floating-tabs");
const menuButton = document.getElementById("navTab")

menuButton.addEventListener("click", pulloutMenu);

function pulloutMenu() {
    floatingTabs.style.display = "none";
};
