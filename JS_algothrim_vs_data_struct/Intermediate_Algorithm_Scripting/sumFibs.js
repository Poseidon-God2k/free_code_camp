function sumFibs(num) {
    let arrFibo = [1,1]
    let sum = 0;
    let curr = 0;
    for(curr; ;curr =arrFibo[0]+arrFibo[1]){
        if(curr>num){
            break;
        }
        console.log(curr)
        if(curr%2 == 1){
            sum+=curr
            console.log("Sum",sum)
        }
        arrFibo.shift()
        arrFibo.push(curr)
    }
    
    return sum;

}
  
console.log(sumFibs(4));