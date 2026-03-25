const API_URL = "https://safcworker.bagongacctt.workers.dev/";

// =========================
// FORM SUBMIT
// =========================
const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const button = form.querySelector("button");
  button.innerText = "Submitting...";
  button.disabled = true;

  const data = {
    product: form.querySelector("select").value,
    firstName: form.querySelectorAll("input")[0].value,
    lastName: form.querySelectorAll("input")[1].value,
    email: form.querySelectorAll("input")[2].value,
    phone: form.querySelectorAll("input")[3].value
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    showPopup("✅ Application Submitted Successfully!");

    form.reset();

  } catch (err) {
    showPopup("❌ Failed to submit. Try again.");
  }

  button.innerText = "Submit";
  button.disabled = false;
});


// =========================
// POPUP (SUCCESS / ERROR)
// =========================
function showPopup(message) {
  let popup = document.createElement("div");
  popup.className = "popup";
  popup.innerText = message;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.opacity = "0";
  }, 2500);

  setTimeout(() => {
    popup.remove();
  }, 3000);
}


// =========================
// TESTIMONIAL SLIDER
// =========================
let testimonials = [
  "Mabilis at maayos kausap. Highly recommended!",
  "Napaka smooth ng process, mabilis approval!",
  "Legit financing company, salamat SAFC!"
];

let index = 0;
const box = document.querySelector(".testimonial-box p");

if (box) {
  setInterval(() => {
    index = (index + 1) % testimonials.length;
    box.innerText = testimonials[index];
  }, 3000);
}


// =========================
// SMOOTH SCROLL
// =========================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});
