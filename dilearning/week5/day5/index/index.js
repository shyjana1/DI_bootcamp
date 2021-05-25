const names = document.getElementById('name')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const type = document.getElementById('types')
const name_id = document.getElementById('id')
const image = document.querySelector('img')

console.log(names.innerText);
// const spinner = document.getElementById('spinner')
button.addEventListener('click', getData)
right.addEventListener('click', getData(`rand++`))
left.addEventListener('click', getData(`rand--`))
// let fetchApi = (async function () {
    // function trulyRandom() {

        // spinner.style.display = 'block'
        
    // }


        async function getData() {
            try {
                
                let rand = Math.round(Math.random() * 81)
                const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}/`)
                const people = await api.json();
    //             spinner.style.display = 'none'
                console.log(people);

                console.log(people.name);
                console.log(people.height);
                console.log(people.weight);
                console.log(people.types[0].type.name);
                console.log(people.id);
                let picture = await people.sprites.front_default;
                console.log(picture);
                
                names.innerText = "your name is: " + people.name
                height.innerText = "your height is: " + people.height
                weight.innerText = "your height is: " + people.weight
                type.innerText = "you were born in: " + people.types[0].type.name
                name_id.innerText = "you are from: " + people.id
                let imgs = image.innerText = `<img src="${picture}">`
                console.log(imgs);

                // `<img src="${picture}">`
        } catch (error) {
    //         console.log('error');
    //         spinner.style.display = 'none'
        }
    }
    // getData()


