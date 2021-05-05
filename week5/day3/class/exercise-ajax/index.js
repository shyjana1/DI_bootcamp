// api
// let next = 0

// function fetchData() {
//     let search = document.getElementById('search').value
//     let limit = document.getElementById('limit').value;
//     // let offset = document.getElementById('limit').value;

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', `https://api.giphy.com/v1/gifs/search?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${search}&limit=${limit}&offset=${next}`)
//     xhr.responseType = 'json'
//     xhr.send(); //sending a request. must
//     xhr.onload = function () {
//         createImages(xhr.response.data);
//     }
//     xhr.onerror = function () {
//         alert('please try again later');
//     };
//     next = next + Number(limit)
// }

// function createImages(arr) {
//     let root = document.getElementById('root');
//     root.innerHTML = "";
//     arr.forEach((item, i) => {
//         let img = document.createElement('img')
//         img.setAttribute('src', item.images.fixed_height.url)
//         root.appendChild(img)
//     })

// }

// function deleteAll() {
//     let root = document.getElementById('root');
//     root.innerHTML = "";
// }

// function nextImages() {
//     fetchData()
// }
function getCountry() {
    let search = document.getElementById('search').value
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.responseType = 'json';
    xhr.open("GET", `https://covid-19-data.p.rapidapi.com/report/country/name?name=${search}&date=2020-04-01`);
    xhr.setRequestHeader("x-rapidapi-key", "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c");
    xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
    xhr.send(data);
    xhr.onload = function () {
        console.log(xhr.response);
        showData(search[0].country);
    }
    xhr.onerror = function () {
        alert("Please try in few minutes, server is down");
    };
}

function deleteAll() {
    let root = document.getElementById('root');
    root.innerHTML = "";
}

function showData(arr) {
    let root = document.getElementById('root');
    let name = document.createElement('h1')
    name.innerHTML = arr[0].country
    root.appendChild(name)
}