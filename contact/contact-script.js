window.onscroll = function() {
    const header = document.getElementById("header");

    // Add or remove the 'shrink-header' class based on scroll position
    if (window.scrollY > 50) {
        header.classList.add("shrink-header");
    } else {
        header.classList.remove("shrink-header");
    }
};