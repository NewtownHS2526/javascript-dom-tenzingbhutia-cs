// TODO: Create arrow function with implicit return
// Example:
// const add = (a, b) => a + b;

const add = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Please enter valid numbers.";
    }

    const sum = a + b;

    return `The sum of ${a} and ${b} is ${sum}.`;
};

console.log(add(3, 4)); 
