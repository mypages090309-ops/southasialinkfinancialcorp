document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Application submitted! We will contact you shortly.");

  this.reset();
});
