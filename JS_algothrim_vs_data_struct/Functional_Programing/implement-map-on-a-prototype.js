// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  let newArr = []
  this.forEach(item=>newArr.push(callback(item)))
  return newArr
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s)