function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

//when create object => that object is instance of its constructor

let myHouse = new House(20)
console.log(myHouse instanceof House)