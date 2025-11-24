// TODO: Create arrow function sayHi = () => { ... }
// Example:
// const sayHi = () => {
//     return "Hi!";
// };

const sayHi = (name) => {
    if (name) {
        return `Hi, ${name}!`;
    } else {
        return "Hi!";
    }
};

// 
console.log(sayHi());        
console.log(sayHi("Alice")); 
