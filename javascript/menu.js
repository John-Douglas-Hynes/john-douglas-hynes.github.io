const floatingTabs = document.querySelector(".floating-tabs");
const menuButton = document.getElementById("navTab");
const linksButton = document.getElementById("linksTab");
const navMenu = document.querySelector(".left-box");
const linksMenu = document.querySelector(".right-box");

menuButton.addEventListener("click", pulloutMenuNav);
linksButton.addEventListener("click", pulloutMenuLinks);

function pulloutMenuNav() {
    menuButton.style.display = "none";
    linksButton.style.display = "none";
    navMenu.style.width = "100%";
    navMenu.style.margin = "0";
    floatingTabs.appendChild(navMenu);
};

function pulloutMenuLinks() {
    menuButton.style.display = "none";
    linksButton.style.display = "none";
    linksMenu.style.width = "100%";
    linksMenu.style.margin = "0";
    floatingTabs.appendChild(linksMenu);
}
