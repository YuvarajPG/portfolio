/* Find odd or even */
/* let num = 7;
if (num % 2 !== 0) {
    console.log("odd");
} else {
    console.log("even");
}
 */

/* find largest number in a list */

/* const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,43,3231,523523,112.32,34334,2121];
let temp = 0;
for (let i = 0; i < list1.length; i++) {
    if (temp < list1[i]) {
        temp = list1[i];
    }
}
console.log(temp);
 */

/* reverse a string

let string = "yuvaraj";
let rev = "";
for (let i = string.length - 1; i >= 0; i--) {
    rev = rev + string[i];
}
console.log(rev);
*/

/* OTHER METHOD */

/* let string = "yuvaraj";
let rev = string.split("").reverse().join("");
console.log(rev);
 */

/* Count Vowels */
let Vowels = ["a", "e", "i", "o", "u"];
let val = "java";
let num = 0;

for (let c of val){
    if (Vowels.includes(c)){
        num++;
    }
}
console.log(num);
