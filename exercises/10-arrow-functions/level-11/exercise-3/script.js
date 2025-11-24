// TODO: Create arrow function sayHi = () => { ... }
// Example:
// const sayHi = () => {
//     return "Hi!";
// };

const sayHello = (language) => {
    let message = "";

    if (language === "italian") {
        message = "Ciao";
    } else if (language === "turkish") {
        message = "Merhaba";
    } else {
        message = "Hello";
    }

    return message;
};
console.log(sayHello("italian"));  
console.log(sayHello("turkish"));  
console.log(sayHello("english"));  
