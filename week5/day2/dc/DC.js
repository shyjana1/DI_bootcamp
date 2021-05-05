function myform(e) {
    // e.preventDefault();
    let xhr = new XMLHttpRequest();
    let temp = document.getElementById("form1")
    // 2. Configure it: GET-request for the URL /article/.../load
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?limit=10&q=${temp.value}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    // 3. Send the request over the network

    xhr.responseType = 'json'
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            // analyze HTTP status of the response
            // e.g. 404: Not Found
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else { // show the result
            // response is the server response
            // console.log(`Done, got ${xhr.response.length} bytes`);
            let data = xhr.response;
            createAllGifs(data.data);

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

    function createAllGifs(arr) {
        let popup = document.getElementById("popup") //this is the root
        for (let i = 0; i < arr.length; i++) {
            let gifs = document.createElement('img');
            gifs.setAttribute('src', arr[i].images.fixed_height_small.url);
            popup.appendChild(gifs);
        };
    }
}