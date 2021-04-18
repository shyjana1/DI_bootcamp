let lives = 3;


function playTheGame() {
    if (confirm("please enter your data here") == true) {
        let answer = +prompt("Enter a number between 0-10")
        let computerNumber = 0;

        if (answer !== parseInt(answer)) {
            alert("sorry, not a number my friend")
        } else {
            computerNumber = parseInt(Math.floor(Math.random() * 11));
            console.log('computer number', computerNumber);
            console.log('my answer', answer);
            test(answer, computerNumber, lives);
        };




    } else {
        alert("No problem, Goodbye");
    }
}
//secondPart



function test(answer, computerNumber, lives) {
    if (lives === 0) {
        alert('NO MORE CHance bitch')
    } else {
        console.log('lives', lives)
        if (answer === computerNumber) {
            alert("YOU ARE THE WINNER MY FRIEND!!!");
        } else if (answer > computerNumber) {
            lives--;
            alert("number too big");
            console.log('lives', lives)
            answer = +prompt('try another number...');
            return test(answer, computerNumber, lives)
            // check_live(lives);
        } else if (answer < computerNumber) {
            lives--;
            alert(" number too small");
            // lives--;
            console.log('lives', lives)
            answer = +prompt('try another number...');
            return test(answer, computerNumber, lives)
            // check_live(lives);
        } else if (answer == "") {
            console.log('empty')
        }
    }


}