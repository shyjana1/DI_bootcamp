import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle';
import Hero from './components/Hero'
import Sidebar from './components/Sidebar/'
import Products from './components/Products'
import { productData } from './components/Products/data'
import Feature from './components/Feature';
function App() {
  return (
    <Router>
    <GlobalStyle />
    <Hero />
      <Navbar/>
      <Sidebar />
      <Products heading='Choose your favourite' data={productData}/>
      <Feature />
    </Router>
  );
}

export default App;
