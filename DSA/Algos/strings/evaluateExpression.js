function evaluate(left, operator, right) {
    switch(operator) {
        case "*": {
            return left*right;
        }
        case "/": {
            return left/right;
        }
        case "-": {
            return left - right;
        }
        case "+": {
            return left + right;
        }
        default: {
            return 0;
        }
    }
}

function precedence(op){ 
    if(op === '+' || op === '-') 
        return 1;
    if(op === '*' || op === '/') 
        return 2;
    return 0;
} 

function evaluateExpression(exp) {
    const operators = [];
    const numerics = [];

    const len = exp.length;
    let i = 0;
    while(i < len) {
        if(exp[i] === " "){
            i++;
            continue;
        } else if(exp[i] === "(") {
            operators.push(exp[i]);
            i++;
        } else if (exp[i] === ")") {
            while(operators.length) {
                let op = operators.pop();
                if(op === "(")
                    break;
                let right = numerics.pop();
                let left = numerics.pop();
                let res = evaluate(left, op, right);
                numerics.push(res);
            }
            i++;
        } else if(exp[i] === "0" || parseInt(exp[i])) {
            let number = 0;
            while(i < exp.length && (exp[i] === "0" || parseInt(exp[i]))) {
                number = 10*number + parseInt(exp[i]);
                i++;
            }
            numerics.push(number);
        } else {
            while(operators.length && precedence(exp[i]) <= precedence(operators[operators.length - 1])) {
                let op = operators.pop();
                let right = numerics.pop();
                let left = numerics.pop();
                let res = evaluate(left, op, right);
                numerics.push(res);
            }

            operators.push(exp[i]);
            i++;
        }
    }

    while(operators.length) {
        let op = operators.pop();
        let right = numerics.pop();
        let left = numerics.pop();
        let res = evaluate(left, op, right);
        numerics.push(res);
    }

    return numerics[0];
}

console.log(evaluateExpression("100*(2+12)/14"));