// function uniteUnique() {
//    let inArr = [].concat(...[...arguments]);
//    let arr = []
//    inArr.forEach((item)=>{
//        if(arr.indexOf(item) == -1)
//             arr.push(item)
//    })
//    return arr
// }


//Set store unique

function uniteUnique() {
    let inArr = [].concat(...[...arguments]);
    
    return [... new Set(inArr)]
 }

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));