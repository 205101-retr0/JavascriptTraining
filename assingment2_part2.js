let str = "racecar";
let rev_str = str.split("").reverse().join("");

var check = str === rev_str ? "This string is a palindrome." : "This string is not a palindrome.";

console.log(check);