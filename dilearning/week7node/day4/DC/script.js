const root = document.getElementById('root');

const register = async ()=>{
  event.preventDefault();
  try{
    const res = await fetch("http://localhost:5500/register")
    const data = await res.json();
    console.log(data);
  }
  catch(e){
    console.log(e);
  }

}