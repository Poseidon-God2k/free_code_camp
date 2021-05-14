function spinalCase(str) {
    // return str.match(/[A-Z][a-z]+|[a-z]+/g).map(item=>item.toLowerCase()).join("-");
    // return str.match(/[A-Z][a-z]+|[a-z]+/g).join("-").toLowerCase();
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase() // ?= follow by [A-Z]
}
  
console.log(spinalCase("This Is Spinal Tap"));