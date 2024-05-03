var hammingWeight = function (n) {
  console.log(n.toString(2));
  return n.toString(2).replaceAll("0", "").length;
};

const n = 11123123;
console.log(hammingWeight(n));
