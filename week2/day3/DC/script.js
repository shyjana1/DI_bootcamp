let stars1 = "*";
for (let i = 0; i < 6; i++) {
    console.log(stars1);
    stars1 += "*";
};
let stars2 = "*";
for (let i = 6; i > 0; i--) {
    let stars2 = "";
    for (x = 0; x < i + 1; x++) {
        stars2 += "*";
    }
    console.log(stars2);
}
//nice result :)