/*
Write a function called pangrams that will
take one string, s as input.
A pangram is a sentence that contains
every letter of the alphabet.
The goal of this function is to determine
if the sentence given is a pangram or not.
If it is not a pangram, the function will return not pangram.
If it is a pangram,
the function will return pangram. Here is an example:
"The quick brown fox jumps over the lazy dog"
"We promptly judged antique ivory buckles for the prize"
x is missing
*/
// str = "The quick brown fox jumps over the lazy dog"
// alpahbet = 'a,b'
// function pangram {
//     alphabet.index => (str)
//     if(pangram = true) {
//         return "pangram"
//     } else {
//         return "not pangram"
//     }
// }

/* Birthday Cake Candles
 *  This array are Birthday Cake Candles
 *  You can blow only the tallest candles
 *  let ar = [2,4,4,1]
 *  birthdayCakeCandles function will return
 *  how many candles you can blow
 */

// let ar = [2,4,4,1]
// function birthdayCakeCandles (find(i=>{
//     return i.ar

// }

const population5 = {
    tokyo: 1,
    delhi: 4,
    shanghai: 3,
    datetime: {
        time: 5,
        date: 6
    }
}

const {
    delhi,
    datetime: {
        time,
        date
    }
} = population5;
console.log(delhi, time, date);