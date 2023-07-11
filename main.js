
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  
  async function calculate(a, b, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = await add(a, b);
        break;
      case '-':
        result = await subtract(a, b);
        break;
      case '*':
        result = await multiply(a, b);
        break;
      case '/':
        result = await divide(a, b);
        break;
      default:
        throw new Error('Invalid operator');
    }
  
    return result;
  }
  
  
  async function runCalculator() {
    try {
      const num1 = 10;
      const num2 = 5;
      const operator_plus = '+';
      const operator_minus = '-';
  
      const result1 = await calculate(num1, num2, operator_plus);
      const result2 = await calculate(num1, num2, operator_minus);

      console.log(`Result: ${result1}`);
      console.log(`Result: ${result2}`);


    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
    }
  }
  
  runCalculator();
  