/* let bottleCounter = 0;
let bottles = +prompt("how many bottles is it going to be?", "99");
let bottleCounter = (`${bottles}`, bottleCounter++);

function subtract() {
    for (i = bottles; bottles >= 1; bottles -= bottleCounter); {
        console.log(bottles + "bottles of beer");
        if (i = 0, `${bottles}`) {
            console.log(false);

        }
    }
}
console.log(subtract());

 */

var bottleCount = 0;
var bottlesLeft = +prompt("How many bottles left on the wall?");
var remainingBottles = bottlesLeft - bottleCount

function beersWall() {
    for (i = bottlesLeft; bottlesLeft >= 1; bottlesLeft -= bottleCount) {
        console.log(bottlesLeft + " bottles of beer on the wall")
        console.log(bottlesLeft + " bottles of beer")
        bottleCount++;
    }
    if (bottleCount > 1) {
        console.log("Take " + bottleCount + "down, and pass it around")
        console.log(bottlesLeft + "bottles of beer on the wall")
    } else if (bottleCount === 1) {
        console.log("Take" + bottleCount + "down, and pass IT around")
        console.log(bottlesLeft + "bottles of beer on the wall")
    }
    while (bottleCount > 1) {
        if (bottlesLeft < 0);
        console.log(remainingBottles);
    }
}
beersWall()