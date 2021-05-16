function convertToRoman(num) {
    let outStr = ""
  
    let arrNum = `${num}`.split("").map(item => parseInt(item))
    for(let i in arrNum){
        let checkType = arrNum.length -i;
        if(arrNum[i]==0){
            continue;
        }
        if(checkType>=4){
            outStr += "M".repeat(arrNum[i])
        }
        else if (checkType == 3){
            outStr += RomanText(arrNum[i],"C","D","M")
        }
        else if (checkType == 2){
            outStr += RomanText(arrNum[i],"X","L","C")
        }
        else if (checkType == 1){
            outStr += RomanText(arrNum[i],"I","V","X")
        }
    }

    return outStr
}

function RomanText(num ,lowStr ,midStr, nextStr){
    switch(num){
        case 1:
        case 2:
        case 3:
            return lowStr.repeat(num);
            break;
        case 4:
            return lowStr+ midStr;
            break;
        case 5:
            return midStr;
            break;
        case 6:
        case 7:
        case 8:
            return midStr + lowStr.repeat(num-5);
            break;
        case 9:
            return lowStr + nextStr;
            break;
    }
}
console.log(convertToRoman(1000));