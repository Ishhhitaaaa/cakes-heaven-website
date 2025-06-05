// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    function adjustGalleryLayout() {
        const gallery = document.querySelector('.cake-gallery');
        if (window.innerWidth < 600) {
            gallery.style.flexDirection = 'column';
        } else {
            gallery.style.flexDirection = 'row';
        }
    }

    window.addEventListener('resize', adjustGalleryLayout);
    adjustGalleryLayout();
});
