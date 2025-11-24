// TODO: Create arrow function double = (x) => { return x * 2; }
// Example:
// const double = (x) => {
//     return x * 2;
// };

const double = (x) => {
    if (typeof x !== "number") {
        return "Please enter a valid number.";
    }

    const doubled = x * 2;

    const message = `The double of ${x} is ${doubled}.`;

    return message;
};

console.log(double(8));
