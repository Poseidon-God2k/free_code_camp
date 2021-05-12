function Animal() {
}
 Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
};
function Bird() { 
}
function Dog() { 
}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

var duck = new Bird();
var beagle = new Dog();

console.log(duck.constructor)
console.log(beagle.constructor)

// Only change code below this line

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

console.log(duck.constructor)
console.log(beagle.constructor)
/*
[Function: Animal]
[Function: Animal]
[Function: Bird]
[Function: Dog]
*/