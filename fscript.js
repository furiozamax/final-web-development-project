// ===============================
// Image Slider
// ===============================
const slides = document.querySelectorAll(".slider-image");
let currentSlide = 0;

document.getElementById("next").addEventListener("click", () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
});

document.getElementById("prev").addEventListener("click", () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
});

// ===============================
// Form Validation (for contact.html)
// ===============================
const form = document.querySelector("form");
if(form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    let errors = [];

    if(name.length < 2) errors.push("Name must be at least 2 characters.");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) errors.push("Enter a valid email.");
    if(message.length < 5) errors.push("Message must be at least 5 characters.");

    if(errors.length > 0){
      alert(errors.join("\n"));
    } else {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
}
