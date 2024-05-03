var isPalindrome = function (s) {
  return (
    s.replace(/\W/g, "").toLowerCase().split("").reverse().join("") ===
    s.replace(/\W/g, "").toLowerCase()
  );
};

const s = "racecars";

console.log(isPalindrome(s));
