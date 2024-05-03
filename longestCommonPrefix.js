var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) {
    return "";
  }

  strs.sort((a, b) => a.length - b.length);

  const shortest = strs[0];
  let prefix = "";

  for (let i = 0; i < shortest.length; i++) {
    const char = shortest[i];
    if (strs.every((string) => string[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  }

  return prefix;
};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
