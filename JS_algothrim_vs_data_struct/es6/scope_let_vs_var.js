//var scope is global
// when declare in block scope change global var
function checkScope(){
    var i = 'function scope';
    if(true){
        i = 'block scope';
        console.log('Block scope i is ',i);
    }
    console.log('Block scope i is ',i);

}
console.log(checkScope())
//Block scope i is block scope
//Block scope i is block scope


// let is block  scope 
// When you declare a variable with the let keyword inside a block, statement, or expression, 
//its scope is limited to that block, statement, or expression.
function checkScope1(){
    let i = 'function scope';
    if(true){
        let i = 'block scope';
        console.log('Block scope i is ',i);
    }
    console.log('Block scope i is ',i);

}
console.log(checkScope1())
// Block scope i is  block scope
// Block scope i is  function scope