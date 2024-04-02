function calc(expr) {

    if (!isNaN(expr)) {
        return +expr
    }
    const arr = expr.split(' ');
    const stack = [];

    function operator(item, operand1, operand2) {
        let res = 0;
        switch (item) {
            case "+":
                return res = operand2 + operand1;
            case "-":
                return res = operand2 - operand1;
            case "*":
                return res = operand2 * operand1;
            case "/":
                return res = operand2 / operand1;
        }
        return res;
    }
    arr.forEach((item) => {
        if (!isNaN(item)) {
            stack.push(parseFloat(item));
        } else {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            stack.push(operator(item, operand1, operand2))
        }
    });

    return stack.pop();
}

console.log(calc("15 7 1 1 + - / 3 * 2 1 1 + + -"));  
