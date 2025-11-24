// TODO: Use if-else if-else for multiple age groups
// Example:
// if (age < 18) {
//     console.log("Minor");
// } else if (age < 65) {
//     console.log("Adult");
// } else {
//     console.log("Senior");
// }
let age = 25;

if (age < 18) {
    console.log(`Age ${age}: Minor`);
} else if (age >= 18 && age < 65) {
    console.log(`Age ${age}: Adult`);
} else {
    console.log(`Age ${age}: Senior`);
}

