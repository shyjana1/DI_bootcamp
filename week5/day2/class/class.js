// exercise 1

// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function calcDigit(num){
//   let arr = new String(num).split('');
//   console.log(arr);
//   let sum = arr.reduce((total,num)=>{
//     return total + Number(num)
//   })
//   if(sum < 10){
//      return sum;
//   }
//   return calcDigit(sum)
// }
// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();
// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// 3. Send the request over the network
xhr.send();
xhr.onload = function () {
    if (xhr.status != 200) {
        // analyze HTTP status of the response
        // e.g. 404: Not Found
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else { // show the result
        // response is the server response
        // console.log(`Done, got ${xhr.response.length} bytes`);
        console.log(xhr.response);
    }
};
xhr.onprogress = function (event) {
    if (event.lengthComputable) {
        console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
        console.log(`Received ${event.loaded} bytes`); // no Content-Length
    }
};
xhr.onerror = function () {
    console.log("Request failed");
};


// xhr.responseType = 'json'; // converts the file to a json and receives it as an object
// xhr.responseType = 'document'; // converts the XML file to a json and receives it as an object?