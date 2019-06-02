import LazyImage from "./lazyImage.js";

customElements.define("lazy-image", LazyImage);

document.addEventListener("DOMContentLoaded", () => {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.visible = true;
                io.unobserve(entry.target);
            }
        });
    })
    
    const lazyImages = document.querySelectorAll("lazy-image");

    for(const lazyImg of lazyImages) {
        io.observe(lazyImg);
    }

    setTimeout(() => {
        lazyImages[0].setAttribute("height", 500);
    }, 1000)
});