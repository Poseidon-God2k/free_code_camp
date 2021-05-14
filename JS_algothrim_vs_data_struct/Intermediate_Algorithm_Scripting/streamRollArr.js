function steamrollArray(arr) {
    let flat = [].concat(...arr)
    //flat still remain arr
    return flat.some(Array.isArray)?steamrollArray(flat):flat;
}
  
console.log(steamrollArray([1, [2], [3, [[4]]]]));