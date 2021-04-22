var libButton = document.getElementById('lib-button');
var libIt = function () {
    var storyDiv = document.getElementById("story");
    var noun = document.getElementById('noun').value;
    var adjective = document.getElementById('adjective').value;
    var person = document.getElementById('person').value;
    var verb = document.getElementById('verb').value;
    var place = document.getElementById('place').value;
    let abort = false;
    for (item of document.getElementsByTagName('input')) {
        if (item.value.length === 0) {
            item.style.borderColor = "tomato";
            abort = true;
        } else {
            item.style.borderColor = "fuchsia"
        };
    };
    if (abort) {
        return;
    };
    storyDiv.innerHTML = ("i dont know " + noun + " what the hell " + adjective + " im doing " + person + " get me " +
        verb + " out of here " + place);
};
libButton.addEventListener('click', libIt);