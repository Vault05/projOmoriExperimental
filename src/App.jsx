import { useState } from 'react'
import {Routes, Route, Link} from 'react-router'
import './App.css'

function Main(){
  return (
  <header class="geralHeader">
            <div class="headerLogo">
                <a href="index.html"><img src="src/assets/omoriLogo.png" height="100px" /></a>
            </div>
<nav class="geralNav">
                <a href="#">Personagens</a>
                <a href="#">Bestiário</a>
                <a href="#">Conquistas</a>
                <a href="#">História</a>
                <a href="#">Mapa</a>
                <a href="#">Mecânicas</a>
                <a href="#">Itens</a>
                <a href="#">Missões</a>
            </nav>
  </header>
  )
}

function App() {
  return (
    <>
    <Main />
    </>
  )
}

export default App
