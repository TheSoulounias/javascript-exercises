const sumAll = function (x, y) {

    let theSum = 0;
    if (x < 0 || y < 0 || !Number.isInteger(x)|| !Number.isInteger(y)) {
        return "ERROR";
    }
    else if (x < y) {
        for (let newX = x; newX < y; newX++) {
            theSum += newX;
        }
        theSum += y;
        return theSum;
    }
    else if (y < x) {
        for (let newY = y; newY < x; newY++) {
            theSum += newY;
        }
        theSum += x;
        return theSum;
    }

};

// Do not edit below this line
module.exports = sumAll;
