// function confirmEnding(str, target) {
//     return (str.slice(-target.length)==target);
// }

//use func default of js
// function confirmEnding(str, target){
//     return str.endsWith(target)
// }

//use Regex
function confirmEnding(str, target){
    let re = new RegExp(target+"$")
    return re.test(str)
}
console.log(confirmEnding("Connor", "n"));

