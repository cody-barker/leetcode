var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr[i - 1] = "FizzBuzz";
    } else if (i % 5 == 0) {
      arr[i - 1] = "Buzz";
    } else if (i % 3 == 0) {
      arr[i - 1] = "Fizz";
    } else {
      arr[i - 1] = `${i}`;
    }
  }
  return arr;
};

console.log(fizzBuzz(15));
