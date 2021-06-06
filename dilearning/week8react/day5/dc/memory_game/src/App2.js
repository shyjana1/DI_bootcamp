import React from 'react'
import Home from './components2/Home'
import Contact from './components2/Contact'
import About from './components2/About'
import Header from './components2/Header'
class App2 extends React.Component{
    
        constructor(){
            super()
            this.state = {
                page: 'home'
            }
        }
        navigate = (page) =>{
            this.setState({page: page})
        }
        render() {
            const {page} = this.state
    
            switch(page) {
                case 'home':
                return(<Home />)
                break;
                case 'about':
                    return (<About />)
                case 'contact':
                    return (<Contact />)
                default: return(<Home />)
            }
        
    
    }
}


export default App2;