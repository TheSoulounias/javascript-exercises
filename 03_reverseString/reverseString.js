const reverseString = function(string) {
    let str = '';
    for(let i = string.length; i > 0; i--) {
        str += string.slice(-1);
        string = string.slice(0,-1);
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
