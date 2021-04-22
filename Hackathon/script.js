// let score = document.getElementsByClassName("score");
// let correct = document.getElementById('point');

// score.onclick = function () {
//     correct += 100;

// }



var myscore = document.getElementById('myscore');
var zero = document.getElementById('counter');
myscore.addEventListener('click', myfunction)

function myfunction() {
    zero.innerHTML = +(zero.innerHTML) + 100;


}