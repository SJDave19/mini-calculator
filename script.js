let currentInput = "0"

function clearScreen() {
    currentInput = "0"
    updateScreen()
}

function appendNumber(number) {
    if (currentInput === "0") {
        currentInput = number
    } else {
        currentInput += number
    }
    updateScreen()
}

function appendOperation(operation) {
    currentInput += operation
    updateScreen()
}

function calculateResult() {
    try {
        currentInput = eval(currentInput.replace(/x/g, "*")).toString()
    } catch (error) {
        currentInput = "Error"
    }
    updateScreen()
}

function updateScreen() {
    document.getElementById("screen").innerText = currentInput
}