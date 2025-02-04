// Example 1: Global context
console.log(this); // In browser, it will log the window object

// Example 2: Object context
const person = {
  name: "John",
  greet: function() {
    console.log(this.name);
  }
};
person.greet(); // Logs "John" because 'this' refers to the person object

// Example 3: Arrow function context
const personArrow = {
  name: "Jane",
  greet: () => {
    console.log(this.name); // 'this' refers to the global object, not personArrow
  }
};
personArrow.greet(); // Logs undefined in strict mode (or window.name in browser context)
// Example 1: Basic closure
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer(); // outer function is executed, returning inner
counter(); // 1
counter(); // 2

// Example 1: Global scope
let globalVar = "I am global!";
function testGlobal() {
  console.log(globalVar); // Can access globalVar
}

// Example 2: Function scope
function functionScope() {
  let functionVar = "I am inside a function!";
  console.log(functionVar); // Accessible inside the function
}
functionScope();
// console.log(functionVar); // Error: functionVar is not defined outside the function

// Example 3: Block scope (using let and const)
if (true) {
  let blockVar = "I am inside a block!";
  console.log(blockVar); // Accessible inside the block
}
// console.log(blockVar); // Error: blockVar is not defined outside the block
