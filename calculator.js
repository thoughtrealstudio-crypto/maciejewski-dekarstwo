document.addEventListener('DOMContentLoaded', function () {
    const materialInputs = document.querySelectorAll('input[name="material"]');
    const areaInput = document.getElementById('roof-area');
    const extraChecks = document.querySelectorAll('.extra-service');
    const priceDisplay = document.getElementById('total-price');

    function calculate() {
        // Cena bazowa za m2 (zaznaczony materiał)
        let basePrice = 0;
        materialInputs.forEach(input => {
            if (input.checked) basePrice = parseFloat(input.value);
        });

        const area = parseFloat(areaInput.value) || 0;

        // Ceny dodatków (za m2 lub stałe - tutaj dla uproszczenia jako % do ceny m2)
        let extras = 0;
        extraChecks.forEach(check => {
            if (check.checked) extras += parseFloat(check.value);
        });

        const total = (basePrice + extras) * area;

        // Animacja cyfr (opcjonalnie)
        priceDisplay.innerText = total.toLocaleString('pl-PL');
    }

    // Event listenery
    materialInputs.forEach(input => input.addEventListener('change', calculate));
    areaInput.addEventListener('input', calculate);
    extraChecks.forEach(check => check.addEventListener('change', calculate));

    // Pierwsze przeliczenie
    calculate();
});