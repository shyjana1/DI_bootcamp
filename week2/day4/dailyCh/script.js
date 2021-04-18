/* Prompt the user for several words (separated by commas).
Put the words into an array.
Console.log the words one per line, in a rectangular frame as seen below.
Check out the Hints and Requirements below.
For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:

stars and words


Hint
The number of stars that wraps the sentence, must depend on the length of the longest word. */

var words = prompt("enter your words here", "yes, here", )
var syntax = `${words}`.split(", ").join("*")
var stars = "*"
console.log(syntax);
var star = ([`${syntax}` + `${stars}`])

console.log(syntax + star);
console.log(star);