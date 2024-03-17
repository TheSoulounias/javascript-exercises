const fibonacci = function(num) {
  if (Number(num) < 0){
    return "OOPS";
  }
  if (Number(num) == 0){
    return 0;
  }
  else if (Number(num) == 1 || Number(num) ==2){
    return 1;
  } else {
    fib1 = 0;
    fib2 = 1;
    fibFinal = 0;
    for(let i = 1; i < Number(num); i++){
      fibFinal = fib1 + fib2;
      fib1 = fib2;
      fib2 = fibFinal;
    }
    return fibFinal;
  }


};

// Do not edit below this line
module.exports = fibonacci;
