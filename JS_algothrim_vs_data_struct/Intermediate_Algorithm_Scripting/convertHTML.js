function convertHTML(str) {
    let htmlEntrie = {
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        "'":'&apos;'
    }
    return str.match(/\w+|\W/g).map(item => htmlEntrie.hasOwnProperty(item)?htmlEntrie[item]:item).join("")
}
  
console.log(convertHTML('Stuff in "quotation marks"'));