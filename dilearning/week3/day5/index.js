let col=6;

const mid = () => {
    console.log("  ***  ");
}
const reg = () => {
    console.log(" *   * ");
}
const all = () => {
    console.log(" ***** ");
}

for (let i = 0; i < col; i++) {
    switch(i){
        case 0:mid()
        break;
        case 3:all() 
        break;      
        default:reg()
    }  
}
