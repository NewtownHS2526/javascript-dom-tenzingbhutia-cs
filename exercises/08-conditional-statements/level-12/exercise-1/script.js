// TODO: Create age variable, use if to check if >= 18
// Example:
// let age = 20;
// if (age >= 18) {
//     console.log("Adult");
// }
let age = [10, 11, 12, 13];

if (age.some(a => a === 10 || a === 11)) {
    console.log("below 12 not allowed");
}

