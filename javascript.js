let number1 = null;
let number2 = null;
let operator = null;

function operate(number1, number2, operator) {
    if (operator == "+") {
        return number1 + number2;
    }
    else if (operator == "-") {
        return number1 - number2;
    }
    else if (operator == "/") {
        if (number2 === 0) return "Undefined";
        return number1 / number2;
    }
    else if (operator == "*") {
        return number1 * number2;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch(button.textContent) {
            case "0" || "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9":
                if (number1 == null) number1 = Number(button.textContent);
                else number2 = Number(button.textContent);
                break;
            case "+" || "-" || "/" || "*":
                if (number1 != null && number2 != null) {
                    number1 = operate(number1, number2, button.textContent);
                    number2 = null;
                }
                operator = button.textContent;
                break;
            case "=":
                operate(number1, number2, operator)
        }
    })
})

// used to display result in .result
function displayResult()

