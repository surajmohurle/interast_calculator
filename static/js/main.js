document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate-button");
    const recalculateButton = document.getElementById("recalculate-button");
    const resultsDiv = document.getElementById("results");
    
    
    calculateButton.addEventListener("click", function() {
        const principal = parseFloat(document.getElementById("principal").value);
        const rate = parseFloat(document.getElementById("rate").value);
        const period = parseFloat(document.getElementById("period").value);
        
        const interest = (principal * rate * period) / 100;
        const totalAmount = principal + interest;
        


        resultsDiv.innerHTML = `
            <p>Interest Earned: Rs ${interest.toFixed(2)}</p>
            <p>Principal Amount: Rs ${principal.toFixed(2)}</p>
            <p>Total Value: Rs ${totalAmount.toFixed(2)}</p>
        `;

        recalculateButton.style.display = "block";

        setTimeout(function() {
            document.getElementById("calculator-form").reset();
            resultsDiv.innerHTML = "";
            recalculateButton.style.display = "none";
        }, 11000); // 3000 milliseconds = 3 seconds
    });

    recalculateButton.addEventListener("click", function() {
        document.getElementById("calculator-form").reset();
        resultsDiv.innerHTML = "";
        recalculateButton.style.display = "none";
    });
});
