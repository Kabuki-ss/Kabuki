document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.image-gallery').forEach(img => {
        img.addEventListener('click', function() {
            document.getElementById('modalImage').src = this.src;
        });
    });
});

// Set the current year dynamically
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("current-year").textContent = new Date().getFullYear();
});



