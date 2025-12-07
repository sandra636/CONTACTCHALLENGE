document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("Form");
    const amountInput = document.getElementById("Montage");
    const termInput = document.getElementById("Team");
    const rateInput = document.getElementById("Rate");
    const repaymentRadio = document.getElementById("radio1");
    const interestOnlyRadio = document.getElementById("radio2");
    const resultPanel = document.querySelector(".second"); // ton bloc droit avec l'image

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le rechargement

        let valid = true; // On considère le formulaire valide au départ

        // Vérification des champs
        if (amountInput.value.trim() === "") {
            amountInput.style.border = "2px solid red";
            document.getElementById('Montage-error').style.display = "block";
            valid = false;
        } else {
            amountInput.style.border = ""; // réinitialise si corrigé
            document.getElementById('Montage-error').style.display = "none";
        }

        if (termInput.value.trim() === "") {
            termInput.style.border = "2px solid red";
            document.getElementById('Team-error').style.display = "block";
            valid = false;
        } else {
            termInput.style.border = "";
            document.getElementById('Team-error').style.display = "none";
        }

        if (rateInput.value.trim() === "") {
            rateInput.style.border = "2px solid red";
            document.getElementById('Rate-error').style.display = "block";
            valid = false;
        } else {
            rateInput.style.border = "";
            document.getElementById('Rate-error').style.display = "none";
        }

        // Si un champ est vide, on ne fait rien et l'image reste identique
        if (!valid) return;

        // Récupération des valeurs
        const amount = parseFloat(amountInput.value);
        const years = parseFloat(termInput.value);
        const rate = parseFloat(rateInput.value) / 100 / 12;
        const months = years * 12;

        let monthlyPayment, totalRepayment;

        // Calcul selon le type de prêt
        if (repaymentRadio.checked) {
            const x = Math.pow(1 + rate, months);
            monthlyPayment = (amount * rate * x) / (x - 1);
            totalRepayment = monthlyPayment * months;
        } else if (interestOnlyRadio.checked) {
            monthlyPayment = amount * rate;
            totalRepayment = monthlyPayment * months;
        }

        // Formatage des nombres
        const monthlyFormatted = monthlyPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const totalFormatted = totalRepayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // Afficher le résultat dans le cadre de droite
        resultPanel.innerHTML = `
            <div style="
                color: white;
                background-color: #133040;
                height: 100%;
                border-radius: 0 15px 15px 0;
                padding: 30px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            ">
                <h2 style="color: #b2c700; margin-bottom: 10px;">Your Results</h2>
                <p style="color: #ccc;">Your monthly repayments:</p>
                <h1 style="color: #b2c700; font-size: 40px; margin: 10px 0;">£${monthlyFormatted}</h1>
                <hr style="border: none; border-top: 1px solid #334; margin: 20px 0;">
                <p style="color: #ccc;">Total you'll repay over the term:</p>
                <h3 style="color: white;">£${totalFormatted}</h3>
            </div>
        `;
    });
});
