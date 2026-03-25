const API_URL = "https://safcworker.bagongacctt.workers.dev/";

// FORM
document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: name.value,
    phone: phone.value,
    loan: loan.value
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  alert("Application Sent!");
});

// CALCULATOR
function calc() {
  let a = amount.value;
  let m = months.value;

  let monthly = (a * 1.2) / m;

  result.innerText = "₱" + monthly.toFixed(2) + " / month";
}
