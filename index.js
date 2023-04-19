//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2) {
  let regExp = /[^\w]/g;

  const sortedStr1 = str1
    .toLowerCase()
    .replace(regExp, "")
    .split("")
    .sort()
    .join("");
  const sortedStr2 = str2
    .toLowerCase()
    .replace(regExp, "")
    .split("")
    .sort()
    .join("");

  return sortedStr1 === sortedStr2;
}
console.log(isAnagrams("finder", "FRienD"));
console.log(isAnagrams("hello", "world"));

module.exports = isAnagrams;
