// function repeatStringNumTimes(str, num) {
//     var outstr="";
//     for(let i = 0 ; i < num ;i++){
//         outstr+=str;
//     }
//     return outstr;
// }

/*
Recursion
function repeatStringNumTimes(str, num) {
   return num<1?"":str+repeatStringNumTimes(str, num-1)
}
*/

function repeatStringNumTimes(str, num) {
    return num>0?str.repeat(num):false
 }
console.log(repeatStringNumTimes("abc", -3));