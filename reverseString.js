// var reverseString = function (s) {
//   return s.reverse();
// };

var reverseString = function (s) {
  const reversed = [];
  for (let char of s) {
    reversed.unshift(char);
  }
  return reversed;
};

const s = ["h", "e", "l", "l", "o"];

console.log(reverseString(s));
