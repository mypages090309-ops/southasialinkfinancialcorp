const API_URL = "https://safcworker.bagongacctt.workers.dev/";

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    loan: document.getElementById("loan").value
  };

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    alert("✅ Application submitted!");
    document.getElementById("form").reset();

  } catch (err) {
    alert("❌ Error");
  }
});

function calc() {
  let a = document.getElementById("amount").value;
  let m = document.getElementById("months").value;

  if (!a || !m) {
    document.getElementById("result").innerText = "Fill all fields";
    return;
  }

  let monthly = (a * 1.2) / m;

  document.getElementById("result").innerText =
    "Monthly: ₱" + monthly.toFixed(2);
}
