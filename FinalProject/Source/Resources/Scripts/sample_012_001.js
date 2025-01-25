document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('tdDisplay');

    let currentNumber = '';
    let previousNumber = '';
    let operator = null;

    const clearDisplay = () => {
        currentNumber = '';
        previousNumber = '';
        operator = null;
        display.textContent = '0';
    };

    const appendNumber = (number) => {
        if (currentNumber.length < 10) {
            currentNumber += number;
            display.textContent = currentNumber;
        }
    };

    const setOperator = (op) => {
        if (currentNumber === '' && previousNumber === '') return;
        if (previousNumber && currentNumber && operator) {
            calculate();
        }
        operator = op;
        previousNumber = currentNumber;
        currentNumber = '';
    };

    const calculate = () => {
        if (previousNumber === '' || currentNumber === '' || !operator) return;
        const prev = parseFloat(previousNumber);
        const current = parseFloat(currentNumber);
        let result;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = current !== 0 ? prev / current : 'Error';
                break;
            default:
                return;
        }

        currentNumber = result.toString().substring(0, 10);
        previousNumber = '';
        operator = null;
        display.textContent = currentNumber;
    };

    document.getElementById('btnClear').addEventListener('click', clearDisplay);

    document.getElementById('btnEquals').addEventListener('click', calculate);

    ['btnNum0', 'btnNum1', 'btnNum2', 'btnNum3', 'btnNum4', 'btnNum5', 'btnNum6', 'btnNum7', 'btnNum8', 'btnNum9']
        .forEach((id, index) => {
            document.getElementById(id).addEventListener('click', () => appendNumber(index.toString()));
        });

    document.getElementById('btnAdd').addEventListener('click', () => setOperator('+'));
    document.getElementById('btnSubtract').addEventListener('click', () => setOperator('-'));
    document.getElementById('btnMultiply').addEventListener('click', () => setOperator('*'));
    document.getElementById('btnDivide').addEventListener('click', () => setOperator('/'));
});
