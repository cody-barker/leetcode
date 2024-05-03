var isPalindrome = function (s) {
  return (
    s.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("") ===
    s.replace(/[\W_]/g, "").toLowerCase()
  );
};

const s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));
