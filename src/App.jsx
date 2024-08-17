import React from 'react'

import {Fotter,Blog,Possibility,Features,WhatGPT3,Header} from './containers';
 import {Cta,Brand,Navbar} from './components';

import './App.css'


const App = () => {
  return (
    <div className='App'>
      <div className="gradient_bg">
        <Navbar/>
        <Header/> 
      <h1>GPT-3</h1>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Fotter/>
     

      
      </div>
    </div>
  )
}

export default App
