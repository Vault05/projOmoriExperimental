import omoriLogo from './assets/omoriLogo.png';
import { Link } from 'react-router-dom';
import './App.css'
function StandartP() {
    return (
        <header className="geralHeader">
            <div className="headerLogo">
                <Link to='/'><img src={omoriLogo} height="100px" /></Link>
            </div>
            <nav className="geralNav">
                <Link to='/Characters'>Personagens</Link>
                <a href="#">Bestiário</a>
                <Link to='/Achievements'>Conquistas</Link>
                <a href="#">História</a>
                <a href="#">Mapa</a>
                <a href="#">Mecânicas</a>
                <a href="#">Itens</a>
                <a href="#">Missões</a>
            </nav>
        </header>
    )
}
export default StandartP;