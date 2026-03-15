let number1 = null;
let number2 = null;
let current = number1;
let operator = null;
let showingResult = false;
let result = document.querySelector(".result");


function operate(number1, number2, operator) {
    if (operator == "+") {
        result.textContent = Number(number1) + Number(number2);
        return Number(number1) + Number(number2);
    }
    else if (operator == "-") {
        result.textContent = Number(number1) - Number(number2);
        return Number(number1) - Number(number2);
    }
    else if (operator == "÷") {
        if (number2 === "0") return "Undefined";
        result.textContent = Number(number1) / Number(number2);
        return Number(number1) / Number(number2);
    }
    else if (operator == "×") {
        result.textContent = Number(number1) * Number(number2);
        return Number(number1) * Number(number2);
    }

}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.textContent >= "0" && button.textContent <= "9") {

            if (showingResult) {
                current = null;
                showingResult = false;
            }

            if (current == null) {
                current = button.textContent;
                result.textContent = current;
            }
            else {
                current = current.concat(button.textContent);
                result.textContent = current;
            }
        }
        else if (
            button.textContent === "+" ||
            button.textContent === "-" ||
            button.textContent === "÷" ||
            button.textContent === "×"
        ) {
            if (number1 === null) {
                number1 = current;
                operator = button.textContent;
                current = null;
            }

            else if (current !== null) {
                number2 = current;

                number1 = operate(number1, number2, operator);
                result.textContent = number1;
                operator = button.textContent;
                current = null;
                number2 = null;
            }
        }

        else if (button.textContent === "=") {
            number2 = current;
            number1 = operate(number1, number2, operator);
            current = String(number1);
            number2 = null;
            result.textContent = number1;
            showingResult = true;

        }

        else if (button.textContent === "Clear") {
            number1 = null;
            number2 = null;
            current = null;
            operator = null;
            result.textContent = "";
            showingResult = false;
        }

        else if (button.textContent === "⌫") {
            current = current.slice(0, -1);
            result.textContent = current;
        }
    }
    )
})



