var myscore = document.getElementById('myscore');
var zero = document.getElementById('counter');
myscore.addEventListener('click', myfunction)

function myfunction() {
    zero.innerHTML = +(zero.innerHTML) + 100 || +70 || +50;
}