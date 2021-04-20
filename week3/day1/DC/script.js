let list_planet = document.createElement('listPlanet')[0];
let planets = ["Mercury", "Pluto", "Earth", "Venus"];

for (planet of planets) {
    console.log(planet);
    let div = document.createElement("div");
    div.setAttribute('class', `planet${planet}`);
    list_planet.appendChild(div);
}