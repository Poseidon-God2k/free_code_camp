function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    function middleFunc(value){
        return Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+value,3)/GM));
    }
    return arr.map(item=> ({"name":item["name"], "orbitalPeriod":middleFunc(item["avgAlt"])}))
}
  
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));