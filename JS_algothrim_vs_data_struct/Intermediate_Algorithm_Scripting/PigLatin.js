//so bad
/*function translatePigLatin(str) {
    let flag = false;
    let str_out = "";
    for( let i of str){
        if(["i","a","e","u","o"].indexOf(i) == -1){
            str_out+=i;
            str = str.slice(1)
            flag = true;
        }
        else{
            break;
        }
    }
    return flag? (str+str_out+"ay"):(str+"way")

}
*/

//good
// function translatePigLatin(str) {
//     return str.replace(/^[aeuio]\w*/,"$&way")
//               .replace(/(^[^aeuio]+)(\w*)/,"$2$1ay")
// } 


//recursion
function translatePigLatin(str,flag =0){
    return ((["i","a","e","u","o"].indexOf(str[0]) != -1)||flag == str.length)? str+(flag?"ay":"way"):translatePigLatin(str.slice(1)+str[0],flag+1)
}
console.log(translatePigLatin("rhythm"));