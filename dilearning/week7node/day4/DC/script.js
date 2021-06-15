const root = document.getElementById('root');
const register = async ()=>{
  const fname = document.getElementById('fname').value
  const lname = document.getElementById('lname').value
  const email = document.getElementById('email').value
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  event.preventDefault();
  try{
    const res = await fetch("http://localhost:5500/register")
    const data = await res.json();
    console.log(data);
    body = JSON.stringify({fname, lname, email, username, password})
  }
  catch(e){
    console.log(e);
  }

}