//Look largest in nested arr
// my method 
// function largestOfFour(arr) {
//     let arr_out= []
//     arr.forEach((item)=>{

//       arr_out.push(Math.max(...item))
//     });
//     return arr_out
// }
  


//Some method optimize
// reduce (optimize code)
//Explain and divide for understanding


// => use map pass ele => Math.max(...ele)

/*
OK 
Method in solve
function largestOfFour(arr){
    return arr.map(ele =>{
        //para 1  use to save result of before and current is current value of arr process 
        // Exampe ele =[4, 5, 1, 3]
        => ele.reduce((accumlator, currentValue))
        #read example below to more information 
        return ele.reduce((prev, current)=>{
            return prev< current? current: prev;
        })
    })
}

Example about reduce 
console.log([1,2,3,4].reduce((prev, current)=>{
    console.log("prev",prev)
    console.log("curr", current)
    return prev+ current;
}))

prev 1
curr 2
prev 3
curr 3
prev 6
curr 4
10

function largestOfFour(arr){
    return arr.for((group)=>{
        return Math.max(...group)
    })
}
*/

//Use Function.apply.bind
/*
similar method 1 you can see this method use arr.map() pass ele =>
Function.apply.bind(Math.max, null) get max ele in nested arr

so Question this ?
- Function.apply.bind
- not have ele of arr.map ?
- null in para 2

-> So answer that questions
this reveal to invoke of js
apply() method call a function with a given this and argument is array
bind() create new function 
=> this line mean Math.max.apply(null, [4, 5, 1, 3]//ele in map) => Math.nax([4, 5, 1, 3])
null to can use function no need parameter

function largestOfFour(arr){
    return arr.map(Function.apply.bind(Math.max,null))
}
*/




/*
Final method is recursion
function largestOfFour(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}
Explain
If not exist arr return finalArr
    else return function(arr.slice(1) //arr already slice arr[0], finalArr add max of arr[0])
*/







function largestOfFour(arr, finalArr = []) {
    return !arr.length
      ? finalArr
      : largestOfFour(arr.slice(1), finalArr.push(Math.max(...arr[0])))
  }







function largestOfFour(arr, finalArr = []) {
    return !arr.length
      ? finalArr
      : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
  }

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));