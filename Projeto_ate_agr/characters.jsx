import { useState } from "react";
//import react items
import StandartP from './standartP.jsx';
//import standart
import headspaceMariImg from './assets/personagensImg/Headspace_Mari.webp';
import farwayAubreyImg from './assets/personagensImg/Farway_Aubrey.webp';
import headspaceAubrey from './assets/personagensImg/Headspace_Aubrey.webp';
import something from './assets/personagensImg/Something.webp';
//import images
import './App.css';
//import css
function CharactersCard({id, name, description, image, filters = [], details, spoilers,}) {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [spoilersVisible, setSpoilersVisible] = useState(false);
    const filterClasses = filters.map((filter) => `filter-${filter}`).join(" ");
    return (
        <div className={`itemCharacter ${filterClasses}`} id={id} dataFilters={filters.join(" ")}>
            <article className='itemCharactersContent'>
                <h2>{name}</h2>
                <p>{description}</p>
                {details?.length > 0 && detailsOpen && (
                    <div className="extraContent">
                        {details.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
                    </div>
                )}
                {spoilers?.length > 0 && spoilersVisible && (
                    <div className="spoilerSection">
                    {spoilers.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
                    </div>
                )}
                <div className="btnGrid">
                    {(details?.length > 0) && (
                        <div className="btnContainer">
                            {details?.length > 0 &&(
                                <button className="btn" type="button" onClick={() => setDetailsOpen((open) => !open)}>
                                    {detailsOpen ? 'Recolher Detalhes' : 'Expandir Detalhes'}
                                </button>
                            )}
                        </div>
                    )}
                    {(spoilers?.length > 0) && (
                        <div className="btnContainer">
                            {spoilers?.length > 0 &&(
                                <button className="btn" type="button" onClick={() => setSpoilersVisible((open) => !open)}>
                                    {spoilersVisible ? 'Ocultar Spoilers' : 'Revelar Spoilers'}
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </article>
            <div className="sideCardCharacters">
                <div className="imgCardCharacters">
                    <img src={image} alt={name} />
                </div>
            </div>
        </div>
    )
}
function CharactersP() {
    const characters = [
        { id: "headspaceMari" ,     
            name: "Mari",
            description: "Mari is a major supporting character in OMORI. She is the older sister of OMORI in HEADSPACE, and SUNNY's older sister in the REAL WORLD. Her presence as a whole also serves as one of the overarching driving forces behind the game's story.",
            image: headspaceMariImg,
            filters: ["headspace", "nsei"],
            details: [
                "She's often spoken of as being kind and gentle, and plays a sisterly role in the friend group with SUNNY, HERO, KEL, AUBREY, and BASIL. Her first appearance shows she has a mischievous side, poking fun at KEL and AUBREY's mannerisms and afterwards teasing HERO. These traits are shared with her HEADSPACE counterpart.",
                "Later in the game, it is also revealed when MARI was younger, she would pull pranks on HERO especially, such as putting bugs in his school desk. It is also shown that she was a perfectionist, spending hours at a time practicing the same piano piece over and over again and was even described to be overbearing.",
            ]
        },
        { id: "farwayAubrey",
            name: "Aubrey (Farway)",
            description: 'descrição fodástica beta 1.0',
            image: farwayAubreyImg,
            filters: ['farway', 'nsei'],
            details: [
                'Muie agreassiva',
                'doida'
            ],
            spoilers: [
                'machista',
                'matou o sunny crtz'
            ]
        },
        { id: 'headspaceAubrey',
            name: 'Aubrey (Headspace)',
            description: 'menina tomboy forte pra kct',
            image: headspaceAubrey,
            filters: ['headspace', 'principal'],
            details: [
                'direita',
                'esquerda',
                'gancho'
            ]
        },
        { id: 'something?',
            name: 'Something',
            description: 'algo',
            image: something,
            filters: ['headspace', 'nsei'],
            details: [
                'bem',
                'assustador'
            ],
            spoilers: [
                'é a Mari',
                'boo'
            ]
        },
    ];
    const sortedCharacters = [...characters].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    const [activeFilter, setActiveFilter] = useState('todos');
    const availableFilters = [...new Set(characters.flatMap((character) => character.filters ?? []))]
    const filteredCharacters = sortedCharacters.filter((character) => activeFilter === 'todos' || character.filters?.includes(activeFilter)
);
    return (
        <>
            <StandartP></StandartP>
            <main className='charactersMain'>
                <div className='charactersFilters'>
                    <div className="filterButtons" aria-label="Filtrar personagens">
                        <button type="button" className={`filterButton ${activeFilter === 'todos' ? 'active' : ''}`} aria-pressed={activeFilter === 'todos'} onClick={() => setActiveFilter("todos")}>Todos</button>
                        {availableFilters.map((filter) => (<button key={filter} type="button"
                        className={`filterButton ${activeFilter === filter ? 'active' : ''}`} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>))}
                        <div className="filterButtons" aria-label="Filtrar personagens"></div>
                    </div>
                </div>
                <div className='charactersCatalog'>
                    <aside className='sidebarCharacters'>
                        <h3>Conteúdo</h3>
                        <ol className="olContentCharacters">
                            {sortedCharacters.map((character) => (<li key={character.id}><a href={`#${character.id}`}>{character.name}</a></li>))}
                        </ol>

                    </aside>
                    <div className='gridCharacters'>
                        {filteredCharacters.map((character) => (<CharactersCard key={character.id} {...character} />))}

                    </div>
                </div>
            </main>
        </>
    )
}
export default CharactersP