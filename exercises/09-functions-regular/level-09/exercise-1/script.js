// TODO: Create function greet(name) that returns "Hello, " + name
// Example:
// function greet(name) {
//     return "Hello, " + name;
// }
let pass = 1234;
let username = "tenz";


function code(pass, username){
    if( pass === 1234 && username == "tenz"){
        return "welcome Tenz";
    }
    else{
        return "Not authorized";
    }
}
console.log(code(1234,"thui"));
