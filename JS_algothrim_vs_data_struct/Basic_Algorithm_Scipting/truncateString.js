function truncateString(str, num) {
    return (str.length>num)?str.slice(0,num)+"...":str;
}

console.log(truncateString("Absolutely Longer", 2)) 