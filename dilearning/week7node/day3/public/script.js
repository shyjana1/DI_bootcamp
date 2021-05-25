
const sendData = ()=>{
    const user = document.getElementById('user').value;
    fetch(
        'http://localhost:5050/addUser', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user:user})
        }
)
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
}

const showdata = ()=>{
    fetch(
        'http://localhost:5050/showUsers')
        .then (res=> res.json())
        .then(data=> {
            console.log(data);
        })
    }