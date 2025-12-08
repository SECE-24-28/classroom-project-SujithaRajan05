document.getElementById("rechargeForm").addEventListener("submit", function(e){
    e.preventDefault();

    let mobile = document.getElementById("mobile").value;
    let operator = document.getElementById("operator").value;
    let amount = document.getElementById("amount").value;

    // --- Replace this URL with your REAL recharge API ---
    let apiURL = "https://your-recharge-api.com/recharge";

    fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mobile: mobile,
        operator: operator,
        amount: amount
      })
    })
    .then(res => res.json())
    .then(data => {
        if(data.status === "success"){
            window.location.href = "success.html";
        } else {
            document.getElementById("message").innerText = "Recharge failed!";
        }
    })
    .catch(err => {
        console.log(err);
        document.getElementById("message").innerText = "API error!";
    });
});
