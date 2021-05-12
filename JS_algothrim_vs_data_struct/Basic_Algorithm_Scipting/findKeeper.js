// function findElement(arr, func) {
//     //one of each element in arr to find(predicate) => loop until predicate true
//     return arr.find()
// }

// function findElement(arr, func) {
//     //in to get index arr
//     //of to get value arr
//     for(let ele of arr){
//       if (func(ele)) {
//         return ele  
//       } 
//   }
// }

// function findElement(arr, func) {
//     //similar method 1
//     //console.log(arr.map(num=>num%2===0))=>[ false, true, false, true ]
//     //indexOf(true)=> return index first true
//     //return arr[index line2]
//     return arr[arr.map(func).indexOf(true)]
// }

//recursion
function findElement(arr, func){
    return arr.length && !func(arr[0])?findElement(arr.slice(1),func):arr[0]
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));