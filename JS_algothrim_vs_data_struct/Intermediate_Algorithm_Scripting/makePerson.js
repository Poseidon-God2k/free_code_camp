var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var fullName = firstAndLast;
    this.getFullName = function() {
      return fullName;
    };
    this.getFirstName =function(){
      return fullName.split(" ")[0]
    }
    this.getLastName =function(){
      return fullName.split(" ")[1]
    }
    this.setFullName = function(name){
      fullName = name
    }
    this.setFirstName = function(name){
      fullName = name + fullName.split(" ")[1]
    }
    this.setLastName = function(name){
      fullName = fullName.split(" ")[0] + name
    }
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();