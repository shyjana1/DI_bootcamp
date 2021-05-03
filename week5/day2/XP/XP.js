let xhr = new XMLHttpRequest();
// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?limit=10&offset=2&q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
// 3. Send the request over the network

xhr.send();
xhr.responseType = 'json'
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