// TODO: Create function add(a, b) that returns a + b
// Example:
// function add(a, b) {
//     return a + b;
function solve(a,b,c){
    if ((a+b) === c){
        return a + "+" + b + "=" + c;
    }
    else {
        return " a + b !== c"
    }
}
console.log(solve(1,2,3));