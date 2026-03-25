const API_URL = "https://safcworker.bagongacctt.workers.dev/";

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = e.target.querySelector("button");
  btn.innerText = "Submitting...";
  btn.disabled = true;

  try {
    await fetch(API_URL, { method: "POST" });
    alert("✅ Submitted!");
  } catch {
    alert("❌ Error");
  }

  btn.innerText = "Submit";
  btn.disabled = false;
});
