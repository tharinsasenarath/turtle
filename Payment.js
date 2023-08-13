document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}




document.addEventListener("DOMContentLoaded", () => {
    const paymentForm = document.getElementById("payment-form");
    const payButton = document.getElementById("payButton");
    const payAmount = document.getElementById("payAmount");

    // Load summary table values from localStorage
    const summaryDate = localStorage.getItem("summaryDate");
    const summaryTime = localStorage.getItem("summaryTime");
    const summaryDuration = localStorage.getItem("summaryDuration");
    const summaryTickets = localStorage.getItem("summaryTickets");
    const summaryTotal = localStorage.getItem("summaryTotal");

    // Populate the summary table on the Payment page
    const summaryTable = document.querySelector(".summary-section");
    summaryTable.innerHTML = `
        <h2>Summary</h2>
        <table>
            <tr>
                <td>Date</td>
                <td>${summaryDate || "-"}</td>
            </tr>
            <tr>
                <td>Time</td>
                <td>${summaryTime || "-"}</td>
            </tr>
            <tr>
                <td>Duration</td>
                <td>${summaryDuration || "-"}</td>
            </tr>
            <tr>
                <td>Tickets</td>
                <td>${summaryTickets || "-"}</td>
            </tr>
            <tr>
                <td>Total Payable</td>
                <td>${summaryTotal || "-"}</td>
            </tr>
        </table>
    `;

    // Display the total amount to pay on the Pay button
    const totalPayable = summaryTotal ? parseFloat(summaryTotal.slice(1)) : 0;
    payAmount.textContent = `$${totalPayable.toFixed(2)}`;

    paymentForm.addEventListener("input", () => {
        const isFormValid = paymentForm.checkValidity();
        payButton.disabled = !isFormValid;
    });

    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Redirect to Confirmation page
        window.location.href = "confirmation.html";
    });
});
