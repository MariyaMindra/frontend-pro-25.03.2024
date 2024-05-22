class Calculator {
    add(num1, num2) {
        return num1+num2;
    }

    subtract(num1, num2) {
        return num1-num2;
    }

    multiply(num1, num2) {
        return num1*num2;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            alert("Division by zero is not allowed.");
            return 'error';
        }
        return num1/num2;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 6));
console.log(calc.divide(8, 2));


//Static methods

console.log ("Static method in class");
class CalculatorStatic {
    static add(num1, num2) {
        return num1+num2;
    }

    static subtract(num1, num2) {
        return num1-num2;
    }

    static multiply(num1, num2) {
        return num1*num2;
    }

    static divide(num1, num2) {
        if (num2 === 0) {
            alert("Division by zero is not allowed.");
            return 'not allow!';
        }
        return num1/num2;
    }
}

console.log(CalculatorStatic.add(5, 3));
console.log(CalculatorStatic.subtract(10, 4));
console.log(CalculatorStatic.multiply(3, 6));
console.log(CalculatorStatic.divide(8, 2));
//console.log(CalculatorStatic.divide(8, 0));