const API_URL = "https://safcworker.bagongacctt.workers.dev/";

// FORM SUBMIT (SAVE TO D1)
document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    loan: document.getElementById("loan").value
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert("✅ Application submitted successfully!");
      document.getElementById("form").reset();
    } else {
      alert("❌ Failed to submit");
    }

  } catch (error) {
    console.error(error);
    alert("❌ Network error");
  }
});


// LOAN CALCULATOR
function calc() {
  let amount = document.getElementById("amount").value;
  let months = document.getElementById("months").value;

  if (!amount || !months) {
    document.getElementById("result").innerText = "Please fill all fields";
    return;
  }

  let interest = 0.02; // 2% monthly
  let monthly = (amount * (1 + interest * months)) / months;

  document.getElementById("result").innerText =
    "Estimated Monthly: ₱" + monthly.toFixed(2);
}
