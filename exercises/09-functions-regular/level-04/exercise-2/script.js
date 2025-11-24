// TODO: Create function add(a, b) that returns a + b
// Example:
// function add(a, b) {
//     return a + b;
// }
function enter(age){
    if (age <= 17){
        return "minor no entry";
    }
    else if (age >= 65){
        return "dicount 20%";
        
    }
}
console.log(enter(67));
