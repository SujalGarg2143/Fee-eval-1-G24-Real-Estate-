document.getElementById("calculateEMI").addEventListener("click", function () {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTenure = parseInt(document.getElementById("loanTenure").value);

    const resultDiv = document.getElementById("result");

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure) || loanAmount <= 0 || interestRate <= 0 || loanTenure <= 0) {
        resultDiv.style.color = "red";
        resultDiv.innerText = "Please enter valid inputs.";
        return;
    }

    resultDiv.style.color = "#4a90e2";

    const monthlyInterestRate = interestRate / 12 / 100;
    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) /
                (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

    resultDiv.innerText = `Your Monthly EMI: ₹${emi.toFixed(2)}`;
});
