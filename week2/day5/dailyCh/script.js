var counter = 0;
var bottlesLeft = +prompt("How many bottles left on the wall?");
// var remainingBottles = bottlesLeft - bottleCounter

function beers() {
    for (i = bottlesLeft; bottlesLeft >= 1; bottlesLeft -= counter) {
        console.log(bottlesLeft + " bottles of beer on the wall")
        console.log(bottlesLeft + " bottles of beer")
        counter++;
    }
    if (counter > 1) {
        console.log("Take " + counter + "down, and pass it around")
        console.log(bottlesLeft + "bottles of beer on the wall")
    } else if (bottleCount === 1) {
        console.log("Take" + counter + "down, and pass IT around")
        console.log(bottlesLeft + "bottles of beer on the wall")
    }
    // while (counter > 1) {
    // if (bottlesLeft < 0);
    // console.log(remainingBottles);
    // }
}
beers()