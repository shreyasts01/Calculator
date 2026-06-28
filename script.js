const display = document.getElementById('display');

function appendValue(value) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value.slice(-1);
    if (operators.includes(lastChar) && operators.includes(value)) return;
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        if (display.value === '') return;
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 2000);
    }
}

