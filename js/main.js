// Navbar Scroll
window.addEventListener("scroll", function () {
   const nav = this.document.querySelector("nav");
   nav.classList.toggle("sticky", window.scrollY > 150);
});

// Form Validation
(function () {
   "use strict";

   // Fetch all the forms we want to apply custom Bootstrap validation styles to
   var forms = document.querySelectorAll(".needs-validation");

   // Loop over them and prevent submission
   Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
         "submit",
         function (event) {
            if (!form.checkValidity()) {
               event.preventDefault();
               event.stopPropagation();
            }

            form.classList.add("was-validated");
         },
         false
      );
   });
})();

// // Highlight Navbar
const sectionAll = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
   const scrollY = window.pageYOffset;
   sectionAll.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");
      console.log(sectionId);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector('.navbar-nav a[href*="' + sectionId + '"]').classList.add("active");
      } else {
         document.querySelector('.navbar-nav a[href*="' + sectionId + '"]').classList.remove("active");
      }
   });
});

$(window).on("load", function () {
   // makes sure the whole site is loaded
   $("#status").fadeOut(); // will first fade out the loading animation
   $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
   $("body").delay(350).css({ overflow: "visible" });
});
