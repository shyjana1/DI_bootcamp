import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {

  return (
    <>
    <div className="App">
      
        <div>
          <input id="fme" type="text" onChange={handleChange} /><button id="" onClick={()=>handleSubmit} />
        </div>

    </div>
    </>
  );
}
}

const mapStateToProps = (state)=>{
  
}
export default App;
