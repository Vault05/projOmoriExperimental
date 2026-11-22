import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
/*import react items*/
import ChatactersP from "./characters.jsx"
import AchievementsP from "./achievements.jsx"
/*import pages*/
import "./App.css";
/*import css*/
import blackBulb from "./assets/blackBulb.png";
import omoriGroupWalk from "./assets/omoriGroupWalk.webp";
import omoriTitle from "./assets/omoriTitle.png";
import omori from "./assets/omori.png";
/*import images*/
function Index() {
    const [ expandLinks, setExpandLinks ] = useState(null)
    const categories = {
        acervo: {
            title: 'Acervo',
            links: [
                {name: 'Conquistas', path: '/Achievements'},
                {name: 'Personagens', path: '/Characters'},
            ]
        },
        inicio: {
            title: 'Início',
            links: [
                {name: 'Missões', path: '/Missions'},
                {name: 'História', path: '/Story'},
            ]
        },
        extras: {
            title: 'Extras',
            links: [
                {name: 'Mecânicas', path: '/BattleMechanics'},
                {name: 'Fórum', path: '/CommunityForum'},
            ]
        }
    };
    return(
        <div className="whiteSpaceBody">
            <main className="omoriScreen">
                <Link to="/Characters" className="topLink linkLeft"><img src= {blackBulb} alt="Lâmpada Negra" className="bulbImg" /></Link>
                <Link to="/Achievements" className="topLink linkRight"><img src={omoriGroupWalk} alt="Turma de Omori" className="groupImg" /></Link>
                <div className="indexTitle"><img src={omoriTitle} alt="OMORI Title" className="titleImg" /></div>
                <div className="omoriCharacter"><img src={omori} alt="Omori" /></div>
                <div className="cardButtons">
                    <div className="btnContainer" onClick={() => setExpandLinks(categories.acervo)}><button className="btn">ACERVO</button></div>
                    <div className="btnContainer" onClick={() => setExpandLinks(categories.inicio)}><button className="btn">INÍCIO</button></div>
                    <div className="btnContainer" onClick={() => setExpandLinks(categories.extras)}><button className="btn">EXTRAS</button></div>
                </div>
                {expandLinks && (
                    <div className="expandLinksOverlay" onClick={() => setExpandLinks(null)}>
                        <div className="expandLinksBox" onClick={(e) => e.stopPropagation()}>
                            <div className="expandLinksBoxHeader">
                                <h3>{expandLinks.title.toUpperCase()}</h3>
                                <button className='expandLinksCloseBtn' onClick={(() => setExpandLinks(null))} title='Fechar'>✕</button>
                            </div>
                            <div className="expandLinksList">
                                {expandLinks.links.map((link, index) => (<Link key={index} to={link.path} className="expandLinksItem">{link.name.toUpperCase()}</Link>))}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>  
    )
};
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/Characters" element={<ChatactersP />} />
                <Route path="/Achievements" element={<AchievementsP />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;