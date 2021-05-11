let catName;
let quote;
function catTalk() {
    //enable strict Mode catch common mistake and unsafe action
  "use strict";
  
  catName = "Oliver";
  quote = catName + " says Meow!";
  return quote;
}
console.log(catTalk());

//let cannot redeclare but var can
