function destroyer(arr) {
    var args = [...arguments]
    var arr = args[0]
    var arg = args.splice(1)

    return arr.filter(item=>arg.indexOf(item) == -1);
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));