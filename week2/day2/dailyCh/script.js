var sentence = prompt("The movie is not that bad , I like it");
var wordNot = sentence.search(" not ");
var wordBad = sentence.search(" bad ");
var bad = sentence.slice(wordNot + 1, wordBad + 5);

if (wordBad > wordNot) {
    newSentence = sentence.replace(bad, "good");
    console.log(newSentence);
} else {
    console.log(sentence);
};