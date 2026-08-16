const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

document.querySelectorAll("#mobileMenu a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
    });
});

const newsletterForm = document.getElementById("newsletterForm");
const message = document.getElementById("message");

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (email) {
        message.textContent = "Thanks for subscribing to Nostra!";
        newsletterForm.reset();
    }
});
const offerBar = document.getElementById("offerBar");
const closeOffer = document.getElementById("closeOffer");

closeOffer.addEventListener("click", function () {
    offerBar.style.display = "none";
});
const colorButtons = document.querySelectorAll(".color-btn");
const products = document.querySelectorAll(".product-card");

colorButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedColor = button.dataset.color;

        products.forEach(function (product) {

            if (
                selectedColor === "all" ||
                product.dataset.color === selectedColor
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

});
const colorOptions = document.querySelectorAll(
    '.color-filter input[name="color"]'
);

const shoes = document.querySelectorAll(".shoe-card");

colorOptions.forEach(function (option) {

    option.addEventListener("change", function () {

        const selectedColor = option.value;

        shoes.forEach(function (shoe) {

            if (
                selectedColor === "all" ||
                shoe.dataset.color === selectedColor
            ) {

                shoe.style.display = "block";

            } else {

                shoe.style.display = "none";

            }

        });

    });

});
const colorFilters = document.querySelectorAll(".color-filter");
const shoeCards = document.querySelectorAll(".shoe-card");
const shoeSearch = document.getElementById("shoeSearch");


function filterShoes() {

    const selectedColors = [];

    colorFilters.forEach(function(filter) {

        if (filter.checked) {
            selectedColors.push(filter.value);
        }

    });


    const searchValue = shoeSearch.value.toLowerCase();


    shoeCards.forEach(function(shoe) {

        const shoeColor = shoe.dataset.color;
        const shoeName = shoe.querySelector("h3").textContent.toLowerCase();


        const colorMatch =
            selectedColors.length === 0 ||
            selectedColors.includes(shoeColor);


        const searchMatch =
            shoeName.includes(searchValue);


        if (colorMatch && searchMatch) {

            shoe.style.display = "block";

        } else {

            shoe.style.display = "none";

        }

    });

}


colorFilters.forEach(function(filter) {

    filter.addEventListener("change", filterShoes);

});


shoeSearch.addEventListener("input", filterShoes);
const heroSlides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

setInterval(function () {

    heroSlides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= heroSlides.length) {
        currentSlide = 0;
    }

    heroSlides[currentSlide].classList.add("active");

}, 3000);