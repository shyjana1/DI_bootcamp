// XP GOLD

const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
]

Promise.all(urls.map(url =>
        fetch(url)
        .then(res => res.json())
    ))
    .then(arr => {
        console.log(arr[0])
        console.log(arr[1])
        console.log(arr[2])
        console.log(arr[3])
    })
    .catch(err => {
        console.log(err)
    })