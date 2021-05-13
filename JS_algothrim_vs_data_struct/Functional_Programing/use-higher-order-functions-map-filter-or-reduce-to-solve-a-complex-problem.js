const squareList = arr => {
  // Only change code below this line
  return arr.filter(item => Number.isInteger(item)&& item>0).map(item=> item*item);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);