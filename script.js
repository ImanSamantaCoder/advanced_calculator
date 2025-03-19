let display = document.getElementById("display");
let memoryValue = 0;

function clearDisplay() {
    display.value = "";
}

function appendToDisplay(value) {
    display.value += value;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Memory Functions
function memoryClear() {
    memoryValue = 0;
}

function memoryRecall() {
    display.value = memoryValue;
}

function memoryAdd() {
    memoryValue += parseFloat(display.value) || 0;
}

function memorySubtract() {
    memoryValue -= parseFloat(display.value) || 0;
}

// Trigonometric Functions
function calculateTrig(func) {
    let input = parseFloat(display.value);
    if (isNaN(input)) {
        display.value = "Error";
        return;
    }

    switch (func) {
        case "sin":
            display.value = Math.sin(input * (Math.PI / 180)).toFixed(6);
            break;
        case "cos":
            display.value = Math.cos(input * (Math.PI / 180)).toFixed(6);
            break;
        case "tan":
            display.value = Math.tan(input * (Math.PI / 180)).toFixed(6);
            break;
        case "cot":
            display.value = (1 / Math.tan(input * (Math.PI / 180))).toFixed(6);
            break;
    }
}
