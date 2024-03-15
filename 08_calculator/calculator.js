const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;	
};

const sum = function(arr) {
  if (arr.length > 0) {
    return arr.reduce((previous, current) => previous + current);
  } else {
    return 0;
  }
};

const multiply = function(arr) {
  if (arr.length > 0) {
    return arr.reduce((previous, current) => previous * current);
  } else {
    return 0;
  }
};

const power = function(num, ex) {
  return Math.pow(num,ex);	
};

const factorial = function(num) {
  if (num==0){
    return 1;
  } else {
    let fact = 1;
    for(let i = 1; i <= num; i++){
      fact *=i;
    }
    return fact;
  }	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
