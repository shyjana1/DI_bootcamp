import react from 'react'

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './redux/reducer.js'
const store = createStore(reducer);


function App() {
  return (
    <>

    <div className="App">
     
    </div>

    </>
  );
}

export default App;
