function sumAll(arr) {
    arr.sort((a,b)=>a-b)
    return (arr[1]+arr[0])*(arr[1]-arr[0]+1)/2
  }

console.log(sumAll([1, 4]));