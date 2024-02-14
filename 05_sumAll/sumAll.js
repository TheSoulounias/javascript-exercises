const sumAll = function(x,y) {

    let theSum = 0;
    for(let newX=x;newX<y;newX++) {
        theSum += newX;
    }
    theSum += y;
    return theSum;
};

// Do not edit below this line
module.exports = sumAll;
