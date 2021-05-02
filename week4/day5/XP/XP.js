/*
 * findIntersection function return an array that
 * contain the numbers exist in both strings from the array.
 * ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
 */

const array1 = ["1,2,5,6,7", "2,5,7,8,15"]
const array2 = array1.split(",")
console.log(array2);
const filteredArray = array1.filter(value => array2.includes(value));