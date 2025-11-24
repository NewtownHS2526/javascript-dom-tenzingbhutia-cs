// TODO: Create function checkAge(age) with early return
// Example:
// function checkAge(age) {
//     if (age < 0) return "Invalid";
//     if (age < 18) return "Minor";
//     return "Adult";
// }
function checkAge(age) {
    if (age < 0) {
        return "Invalid age";
    }
    if (age < 18) {
        return "Minor";
    }
    return "Adult";
}
console.log(checkAge(11));
