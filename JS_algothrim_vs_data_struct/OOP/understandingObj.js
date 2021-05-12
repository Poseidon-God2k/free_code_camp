function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line

  //inherit from Class father is
  console.log(Dog.prototype.isPrototypeOf(beagle))