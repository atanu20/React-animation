import React from 'react'
import { BrowserRouter, Switch,Route } from 'react-router-dom';

 import Home from './component/Home';
import Navbar from './component/Navbar';
import './App.css'


const App = () => {
  return (
    <>
    

    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/"  component={Home} />
    </Switch>
    
    
    </BrowserRouter>

      
    </>
  )
}

export default App
