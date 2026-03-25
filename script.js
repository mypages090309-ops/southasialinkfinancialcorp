const API_URL = "https://safcworker.bagongacctt.workers.dev/";

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    loan: document.getElementById("loan").value
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  alert("✅ Application Submitted!");
});
