import { useState } from 'react'
import {Routes, Route, Link} from 'react-router'
import header from './assets/headspaceBG.jpg'
import logo from './assets/omoriLogo.png'
import './App.css'

function Cards(){

}

function Main(){
  return(
  <>
  <Header />
  <h1>ITENS</h1>
  </>
  )
}

function Header(){
  return (
    <header className="geralHeader">
            <div className="headerLogo">
                <Link to='/'><img src={logo} height="100px" /></Link>
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

function Itens() {
  return (
    <>
    <Main />
    </>
  )
}

export default Itens
