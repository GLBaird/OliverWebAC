function toggleMenu(e) {
    e.preventDefault();
    var nav = document.getElementById("navBar");
    nav.className = nav.className == "show" ? "" : "show";
}

document.getElementById("menuToggle").addEventListener("click", toggleMenu);
