document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculator-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    const calculateButton = document.getElementById("calculate-button");
    calculateButton.addEventListener("click", function () {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);

        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = "Por favor, ingresa números válidos.";
        } else {
            let operations = ["suma", "resta", "multiplicación", "división", "módulo"];
            let results = [];

            for (let i = 0; i < 5; i++) {
                let result;

                switch (i) {
                    case 0:
                        result = `El resultado de la ${operations[i]} es: ${num1 + num2}`;
                        break;
                    case 1:
                        result = `El resultado de la ${operations[i]} es: ${num1 - num2}`;
                        break;
                    case 2:
                        result = `El resultado de la ${operations[i]} es: ${num1 * num2}`;
                        break;
                    case 3:
                        if (num2 === 0) {
                            result = `El resultado de la ${operations[i]} es: No se puede dividir por cero.`;
                        } else {
                            result = `El resultado de la ${operations[i]} es: ${num1 / num2}`;
                        }
                        break;
                    case 4:
                        result = `El resultado de la ${operations[i]} es: ${num1 % num2}`;
                        break;
                }
                results.push(result);
            }

            resultDiv.innerHTML = "<ul><li>" + results.join("</li><li>") + "</li></ul>"; // Usamos una lista desordenada
        }
    });
});
