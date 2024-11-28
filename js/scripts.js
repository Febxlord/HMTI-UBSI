// Contoh JavaScript untuk membuat navigasi smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
            
        });
    });
});
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Jika scroll lebih dari 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Script for Modal
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPosition = document.getElementById("modalPosition");
const closeModal = document.querySelector(".close");
const header = document.querySelector("header"); // Select the header

// Select all clickable images
const clickableImages = document.querySelectorAll(".clickable");

clickableImages.forEach((img) => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImage.src = this.src; // Set modal image source
        modalName.innerHTML = this.getAttribute("data-name"); // Set name in modal
        modalPosition.innerHTML = this.getAttribute("data-position"); // Set position in modal
        header.style.display = "none"; // Hide the header
    });
});

// Close the modal
closeModal.onclick = function () {
    modal.style.display = "none";
    header.style.display = "flex"; // Show the header
};

// Close modal when clicking outside the image
modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
        header.style.display = "flex"; // Show the header
    }
};