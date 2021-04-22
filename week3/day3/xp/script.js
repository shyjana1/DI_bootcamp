function myMove() {
    var element = document.getElementById("animate");
    var position = 0;
    var id = setInterval(frame, 5);
    var id2 = setInterval(frame2, 10);

    function frame() {
        //thinking outside the box 
        if (position == 500) {
            clearInterval(id);
        } else {
            position++;
            element.style.right = position + 'px';
        }
    }

    function frame2() {
        if (position == 0) {
            clearInterval(id2);
        } else {
            position--;
            element.style.left = position + 'px';
        }
    }
}
// exercise 2

// Create a draggable square/box element in your HTML file.
// In your javascript file add the functionality which will allow you to drag the square/box and drop it into a larger box.

// const fill = document.querySelector(".fill");
// const empties = document.querySelectorAll(".empty");

// fill.addEventListener("dragstart", dragStart);
// fill.addEventListener("dragend", dragEnd);

// for (const empty of empties) {
//     empty.addEventListener("dragover", dragOver);
//     empty.addEventListener("dragenter", dragEnter);
//     empty.addEventListener("dragleave", dragLeave);
//     empty.addEventListener("drop", dragDrop);

// }

// function dragStart() {
//     this.className += ' hold';
//     setTimeout(() => (this.className = 'invisible), 0);
//                 console.log(dragStart);
//             }

//             function dragEnd() {
//                 this.className = "fill";
//                 console.log(dragEnd);

//             }

//             function dragOver(e) {
//                 e.preventDefault();
//                 console.log(dragOver);

//             }

//             function dragEnter(e) {
//                 e.preventDefault();

//                 this.className += "hovered";
//                 console.log(dragEnter);

//             }

//             function dragLeave() {

//                 this.className = "empty";
//                 console.log(dragLeave);

//             }

//             function dragDrop() {
//                 this.className = "empty";
//                 this.append(fill);
//                 console.log(dragDrop);

//             }