const root = document.getElementById("root");

console.log(root);

const getData = async ()=>{
    event.preventDefault();
    try{
        const res = await fetch("http://localhost:5000")
        const data = await res.json();
        return (data);
    }
    catch(e){
        console.log(e);
    }
}