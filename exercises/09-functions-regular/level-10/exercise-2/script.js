// TODO: Create function add(a, b) that returns a + b
// Example:
// function add(a, b) {
//     return a + b;
// }
function add(a, b,c) {
    if((a+b)*c < 20){
        return "low";
    }
    else{
        return "high";
    }
}
console.log(add(5, 3, 4));
