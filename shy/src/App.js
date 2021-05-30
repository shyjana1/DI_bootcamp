import logo from './logo.svg';
import './App.css'
import Card from './Card';
import 'tachyons';
const robots = [
  { 
  id: 1, 
  name: 'artem',
  email: 'artem@gmail.com'
  },
  {
    id: 2, 
    name: 'shy',
    email: 'shy@gmail.com'
  },
  {
    id: 3, 
    name: 'ziv',
    email: 'ziv@gmail.com'
  },
  {
    id: 4, 
    name: 'galit',
    email: 'galit@gmail.com'
  }
]


function App() {
  return (
    <div>
    {
      robots.map( (item, i) =>{
        return <Card data={item} key={i}/>
      })
    }
      {/* <Card name={robots[0].name} email={robots[0].email} id={robots[0].id}/>
      <Card name={robots[1].name} email={robots[1].email} id={robots[1].id}/>
      <Card name={robots[2].name} email={robots[2].email} id={robots[2].id}/>
      <Card name={robots[3].name} email={robots[3].email} id={robots[3].id}/> */}
    </div>
  );
}

export default App;
