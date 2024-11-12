window.onscroll = function() {
    const header = document.getElementById("header");

    // Add or remove the 'shrink-header' class based on scroll position
    if (window.scrollY > 50) {
        header.classList.add("shrink-header");
    } else {
        header.classList.remove("shrink-header");
    }
};
document.querySelectorAll('.photo-container').forEach((container) => {
    const images = container.querySelectorAll('.portfolio-img');
    const prevArrow = container.querySelector('.prev-arrow');
    const nextArrow = container.querySelector('.next-arrow');
    let currentIndex = 0;

    // Ensure there's at least one image
    if (images.length === 0) return;

    // Initialize the first image
    images[currentIndex].classList.add('active');

    // Function to update the image display
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    // Event listeners for arrows, only if they exist
    if (prevArrow) {
        prevArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });
    }

    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    }
});

