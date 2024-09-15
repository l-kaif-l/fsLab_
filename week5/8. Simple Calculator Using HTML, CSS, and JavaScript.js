<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <style>
        .calculator {
            width: 200px;
            padding: 10px;
            border: 1px solid #ccc;
            margin: 50px auto;
            text-align: center;
            background-color: #f5f5f5;
        }
        .calculator input {
            width: 100%;
            margin: 5px 0;
            padding: 10px;
            font-size: 18px;
        }
        .calculator button {
            width: 48%;
            margin: 5px 1%;
            padding: 10px;
            font-size: 18px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <button onclick="appendNumber('1')">1</button>
        <button onclick="appendNumber('2')">2</button>
        <button onclick="appendNumber('3')">3</button>
        <button onclick="operate('/')">/</button><br>
        <button onclick="appendNumber('4')">4</button>
        <button onclick="appendNumber('5')">5</button>
        <button onclick="appendNumber('6')">6</button>
        <button onclick="operate('*')">*</button><br>
        <button onclick="appendNumber('7')">7</button>
        <button onclick="appendNumber('8')">8</button>
        <button onclick="appendNumber('9')">9</button>
        <button onclick="operate('-')">-</button><br>
        <button onclick="appendNumber('0')">0</button>
        <button onclick="clearDisplay()">C</button>
        <button onclick="calculate()">=</button>
        <button onclick="operate('+')">+</button>
    </div>

    <script>
        let displayValue = '';
        let operator = null;
        let operand1 = null;

        function appendNumber(number) {
            displayValue += number;
            document.getElementById('display').value = displayValue;
        }

        function operate(op) {
            if (displayValue !== '') {
                operand1 = parseFloat(displayValue);
                operator = op;
                displayValue = '';
                document.getElementById('display').value = '';
            }
        }

        function calculate() {
            if (operator !== null && displayValue !== '') {
                let operand2 = parseFloat(displayValue);
                let result;
                switch (operator) {
                    case '+':
                        result = operand1 + operand2;
                        break;
                    case '-':
                        result = operand1 - operand2;
                        break;
                    case '*':
                        result = operand1 * operand2;
                        break;
                    case '/':
                        result = operand1 / operand2;
                        break;
                }
                document.getElementById('display').value = result;
                displayValue = '';
                operator = null;
                operand1 = null;
            }
        }

        function clearDisplay() {
            displayValue = '';
            operator = null;
            operand1 = null;
            document.getElementById('display').value = '';
        }
    </script>
</body>
</html>
