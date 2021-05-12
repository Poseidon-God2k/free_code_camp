function Dog(name) {
    this.name = name;// own property  of obj
  }
  
  Dog.prototype.numLegs = 4; // prototype property
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  for(let property in beagle){
      if(beagle.hasOwnProperty(property)){
          ownProps.push(property)
      }
      else{
          prototypeProps.push(property)
      }
  }

  console.log(ownProps)
  console.log(prototypeProps)