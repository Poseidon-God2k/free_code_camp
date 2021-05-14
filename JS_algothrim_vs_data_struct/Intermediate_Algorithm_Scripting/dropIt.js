function dropElements(arr, func) {
    let outArr = []
   for(let i in arr){
      if(func(arr[i])){
        outArr.push(...arr.slice(i))
        break;
      }
   }
   return outArr
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));