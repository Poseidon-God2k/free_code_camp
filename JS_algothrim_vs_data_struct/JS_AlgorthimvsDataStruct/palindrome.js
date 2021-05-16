function palindrome(str) {
  let re = /[^\W_]/g;
  let arr =str.toLowerCase().match(re);
  for(let i in arr){
    if(i > arr.length/2)
      break;
    if (arr[i] != arr[arr.length-1 - i]){
      return false
    }
    
  }
  return true
}

  
  
console.log(palindrome("2_A3*3#A2"));