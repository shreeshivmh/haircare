// ==========================================
// HEMLATA UDAY HAIR CARE
// Website JavaScript
// ==========================================

window.addEventListener("load", function () {
    console.log("Welcome to Hemlata Uday Hair Care!");
});


// Buy Now Button
function buyNow(productName) {

    alert(
        "Thank you for your interest in " +
        productName +
        "!\n\n" +
        "Please contact Hemlata Uday Hair Care to place your order.\n" +
        "Phone: +91 7568963923"
    );

}


// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || phone === "" || message === "") {
            alert("Please fill in all the fields.");
            return;
        }

        alert(
            "Thank you, " + name +
            "!\n\nYour message has been received." +
            "\nWe will contact you soon."
        );

        contactForm.reset();

    });

}


// Active Navigation
const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});
