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


function starIt() {
    sen = prompt("Enter a sentence").split(" ");
    let longestWord = '';
    let newsen = [];
    let stars1 = '';
    let stars2 = '';

    for (let i of sen) {
        if (i.length > longestWord.length) {
            longestWord = i;
        }
    }

    for (let k of sen) {
        for (j = k.length; j < longestWord.length; j++) {
            k += " ";
        }
        newsen.push("* " + k + " *");
    }

    stars1 = '*'.repeat(longestWord.length * 1.5);
    stars2 = stars1;
    newsen.unshift(stars1);
    newsen.push(stars2);

    for (let t of newsen) {
        console.log(t);
    }
}

starIt();