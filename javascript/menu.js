const floatingTabs = document.querySelector(".floating-tabs");
const menuButton = document.getElementById("navTab");
const linksButton = document.getElementById("linksTab");
const navMenu = document.querySelector(".left-box");
const linksMenu = document.querySelector(".right-box");
const collapseButton = document.getElementById("collapse");
const contactButton = document.getElementById("contact-me-btn");

menuButton.addEventListener("click", pulloutMenuNav);
linksButton.addEventListener("click", pulloutMenuLinks);
collapseButton.addEventListener("click", collapse);
contactButton.addEventListener("click", () => alert("Sorry, I haven't gotten around to making \"Contact me\" work yet"));

function pulloutMenuNav() {
    menuButton.style.display = "none";
    linksButton.style.display = "none";
    navMenu.style.width = "100%";
    navMenu.style.margin = "0";
    navMenu.style["box-shadow"] = "4px 4px 8px 4px lightslategrey";
    navMenu.style["border-radius"] = "0";
    floatingTabs.appendChild(navMenu);
    navMenu.style.display = "block";
    collapseButton.style.display = "block";
};

function pulloutMenuLinks() {
    menuButton.style.display = "none";
    linksButton.style.display = "none";
    linksMenu.style.width = "100%";
    linksMenu.style.margin = "0";
    linksMenu.style["box-shadow"] = "4px 4px 8px 4px lightslategrey";
    linksMenu.style["border-radius"] = "0";
    floatingTabs.appendChild(linksMenu);
    linksMenu.style.display = "block";
    collapseButton.style.display = "block";
};

function collapse() {
    navMenu.style.display = "none";
    linksMenu.style.display = "none";
    menuButton.style.display = "inline-block";
    linksButton.style.display = "inline-block";
    collapseButton.style.display = "none";
}
