document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetID = link.getAttribute("href");
            const targetElement = document.querySelector(targetID);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Optimized Parallax Effect
    const parallaxImages = document.querySelectorAll(".parallax-image");
    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                parallaxImages.forEach(image => {
                    const speed = 0.5;
                    const offset = scrollY - image.offsetTop;
                    image.style.backgroundPositionY = `${offset * speed}px`;
                });
                ticking = false;
            });
            ticking = true;
        }
    });

    // Scroll-to-top button
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.textContent = "↑";
    scrollToTopBtn.classList.add("scroll-to-top");
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener("scroll", () => {
        scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
