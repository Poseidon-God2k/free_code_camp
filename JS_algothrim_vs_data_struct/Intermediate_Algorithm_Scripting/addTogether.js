function addTogether() {
    const [first,second] = [...arguments]
    if(typeof first !== "number"){
        return undefined
    }
    const add = (second) => typeof(second) !== "number"?undefined:first+second;

    if(second === undefined){
        return add
    }
    else{
        return add(second)
    }
}
  
console.log(addTogether(2)(3));


