// function pairElement(str) {
//     let inString = str.split("")
//     return inString.map((item)=>{
//         if(item == "G"){
//             return [item,"C"]
//         }
//         else if (item =="C"){
//             return [item, "G"]
//         }
//         else if (item =="A"){
//             return [item, "T"]
//         }
//         else{
//             return [item,"A"]
//         }
//     })
// }
function pairElement(str) {
    let pairs ={
        A:"T",
        T:"A",
        C:"G",
        G:"C"
    }
    return str.split("").map(item =>[item,pairs[item]])
}


console.log(pairElement("GCG"));