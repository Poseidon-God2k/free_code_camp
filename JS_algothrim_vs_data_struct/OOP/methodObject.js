let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){
        //access undirected dog.numLegs
        //access directed
        return `This dog has ${this.numLegs} legs.`
    }
  };
  
console.log(dog.sayLegs());