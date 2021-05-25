// get
// const sendData = ()=>{
//     const username = document.getElementById('user').value
//     const password = document.getElementById('pass').value
//     console.log(username, password);
//     fetch(`http://localhost:3000/login?user=${username}&pass=${password}`)
//     .then (res => res.json())
//     .then(data =>{
//         console.log(data);
//     })
// }


// post
// const sendData = ()=>{
//     const username = document.getElementById('user').value
//     const password = document.getElementById('pass').value
//     let data = {
//         user: username,
//         pass: password
//     }
//     fetch('http://localhost:3000/login',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//     })
//     .then (res => res.json())
//     .then(data =>{
//         console.log(data);
//     })
// }