import React from 'react'
import {Brand,Cta,Feature,Navbar} from './components'
import {Footer,Blog,Possibility,WhatGpt3,Header} from "./containers"
import './App.css'

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGpt3/>
        <Feature/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App;