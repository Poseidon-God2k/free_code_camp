function diffArray(arr1, arr2) {
    // var outArr = arr1.concat(arr2);
    // console.log(outArr)
    // return outArr.filter(item => (outArr.filter(item2 => item2 == item).length ==1))
    return arr1.concat(arr2).filter(item=>arr1.indexOf(item) == -1||arr2.indexOf(item)==-1)
  }
  
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));