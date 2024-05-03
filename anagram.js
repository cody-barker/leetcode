var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
};

const s = "cat";
const t = "tac";

console.log(isAnagram(s, t));
