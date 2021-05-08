const names = document.getElementById('name')
const height = document.getElementById('height')
const birth = document.getElementById('birth-year')
const button = document.getElementById('button')
const home_world = document.getElementById('home-world')
const spinner = document.getElementById('spinner')
button.addEventListener('click', trulyRandom)
// let fetchApi = (async function () {
function trulyRandom() {
    spinner.style.display = 'block'
    let rand = Math.round(Math.random() * 81)
    console.log(rand);
    async function getData(num) {
        try {
            const api = await fetch('https://swapi.dev/api/people/' + num + '/')
            const people = await api.json();
            const planet = await fetch(people.homeworld)
            const planets = await planet.json();
            spinner.style.display = 'none'
            names.innerText = "your name is: " + people.name
            height.innerText = "your height is: " + people.height
            birth.innerText = "you were born in: " + people.birth_year
            home_world.innerText = "you are from: " + planets.name
        } catch (error) {
            console.log('error');
            spinner.style.display = 'none'
        }
    }
    getData(rand)
}

// try {
// return await fetch(`https://swapi.dev/api/people/${random}`)

//     } catch {
//         console.log('err');
//     }
//     document.querySelector('random')
// })()

// .then(data => data.json())
// .then(result => (console.log(result.name, result.height, result.birth_year)))

// console.log(names);
// .catch(e => {
//     console.log(e);
// })