function checkCashRegister(price, cash, cid) {
    var item = [
      ["PENNY",0.01],
      ["NICKEL",0.05],
      ["DIME",0.1],
      ["QUARTER", 0.25],
      ["ONE",1.0],
      ["FIVE", 5.0],
      ["TEN",10.0],
      ["TWENTY",20.0],
      ["ONE HUNDRED",100.0]
    ]
    var totalCashInRegister = cid.map(item => item[1]).reduce((x,y) => x+y,0)
    console.log(totalCashInRegister)
    var outCheck ={status: null, change: []}
    var change = cash - price;
    if(change == totalCashInRegister){
      outCheck.status = "CLOSED";
      outCheck.change = cid
      return outCheck
    }

    if(change > totalCashInRegister){
      outCheck.status = "INSUFFICIENT_FUNDS"
      return outCheck
    }

    if(change < totalCashInRegister){
      outCheck.status = "OPEN"
      for(let i = cid.length -1; i >=0 ;i--){
        var changeType = 0;
        while(change >= item[i][1] && cid[i][1] >0){
          change -= item[i][1]
          cid[i][1] -= item[i][1]
          changeType += item[i][1]
          change = Math.round(change * 100) / 100;
        }
        if(changeType == 0){
          continue;
        }
        outCheck.change.push([item[i][0],changeType])
      }
    }
    if(change == 0){
      return outCheck
    }
    else{
      outCheck.status = "INSUFFICIENT_FUNDS"
      outCheck.change = []
      return outCheck
    }
  }
  
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));