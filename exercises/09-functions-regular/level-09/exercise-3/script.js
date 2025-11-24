// TODO: Create function sayHello() that returns "Hello!"
// Example:
// function sayHello() {
//     return "Hello!";
// }
let number = 3;
function guess(a) {
    if (a === number){
        return "correct";
    }
    else{
        return "try again";
    }
}
console.log(guess(3));
