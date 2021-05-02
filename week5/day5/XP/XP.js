const robots = [ // declares the robots values
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];
const main = document.querySelector('main'); // selects the main part of the HTML
const createRobot = (robot) => { //creates a robot of robots
    creareDiv = document.createElement('div'); //craetes divs for each robot inside robots
    let img = document.createElement('IMG');
    img.src = robot.image;
    let robotName = document.createElement('h1');
    robotName.textContent = robot.name
    let robotEmail = document.createElement('email')
    robotEmail.textContent = robot.email
    creareDiv.classList.add('robot-frame') //creates a class and adds the frame of each card to the class
    creareDiv.appendChild(img);
    creareDiv.appendChild(robotName);
    creareDiv.appendChild(robotEmail);
    main.appendChild(creareDiv); //assigns the functions to create robots to the main
}
for (let robot of robots) createRobot(robot); //repeats itself in a loop
const filter = () => { //declares on a filter 
    const allRobots = document.querySelectorAll('div') //assigns all divs to allRobots
    allRobots.forEach((item) => {
        item.remove() //removes every item  selected in allRobots (filter through the robots)
    })
    robots.forEach((robot) => { //goes over every robot in robots
        let letter = robot.name.split(' ') // creates a list for each word in the name devided by space
        for (let i of letter) {
            if (i.toLowerCase().indexOf(inputState.value.toLowerCase()) !== -1) { // pushes every card that is not in the letter that has been pushed outside of the list (-1)
                return createRobot(robot)
            }
        }
    })
}
const inputState = document.querySelector('input'); // selects the the input
inputState.addEventListener('keyup', filter) // once you lift you finger from the keyboard it will filter through the cards