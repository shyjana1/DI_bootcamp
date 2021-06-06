// import React from 'react';
// import Home from './components/Home'
// import Profile from './components/Profile'
// import Shop from './components/Shop'
// import NavBar from './components/NavBar'
// import ErrorBoundary from './components/ErrorBoundary'
// import { Route, Switch } from 'react-router-dom'


// class App extends React.Component {
//   constructor(){
//     super()
//     }
  
//   render() {
    
//   return (
//     <>
//       <NavBar>
//         <Switch>

//           <Route exact path='/' component={Home} />
//           <ErrorBoundary>
//           <Route path='/profile' component={Profile} />
//           </ErrorBoundary>
//           <Route path='/shop' component={Shop} />
//         </Switch>
//       </NavBar>
//     </>
//   );
// }
// }

// export default App;

import React from 'react';
import Home from './components/Home'
import Profile from './components/Profile'
import Shop from './components/Shop'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import ErrorBoundary from './components/ErrorBoundary'
class App extends React.Component {
constructor(){
super()
}
    render() {
        return (          
           <>
           <NavBar/>
               <Switch>
            <Route exact path = '/' component = {Home}/> 
            <Route  path = '/profile' component = {Profile}/> 
        <ErrorBoundary>
            <Route path = '/shop' component = {Shop}/>
            </ErrorBoundary>
            </Switch>
       </>       
        );
    }
}
export default App;