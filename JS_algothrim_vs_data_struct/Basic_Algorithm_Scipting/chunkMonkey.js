// function chunkArrayInGroups(arr, size) {
//     var out = []
//     for(let i=0; i< arr.length ;i+=size){
//         out.push(arr.slice(i,i+size))
//         //slice not change arr
//         //splice change arr
//     }
//     return out;
// }

function chunkArrayInGroups(arr, size) {
    var out = [];
    while(arr.length>0){
        out.push(arr.splice(0,size))
    }
    return out;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));