window.addEventListener("scroll", function () {
    const nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});
