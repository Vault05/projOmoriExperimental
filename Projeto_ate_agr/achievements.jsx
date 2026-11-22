import './App.css';
import { useState, useEffect } from 'react';
import StandartP from './standartP.jsx';
import goodMorning from './assets/conquistasImg/goodMorning.webp'
import oyasumi from './assets/conquistasImg/oyasumi.webp'
import altF4 from './assets/conquistasImg/altF4.webp'
function AchievementsCard({ status, difficulty, img, name, onClick }) {
    return (
        <div className={`achvsBorder ${status ? 'lockedAchvs' : difficulty}`} onClick={onClick}>
            <div className="achvsInner">
                <div className={`achvsImgWrapper ${status ? 'lockedAchvs' : difficulty}`}>
                    {status ? (
                        <div className="lockedContent">
                            <span className="lockedIcon">🔒</span>
                        </div>
                    ) : (
                        <img src={img} alt={name} className="achvsImg" />
                    )}
                </div>
                <span className="achvsTitle">{name}</span>
            </div>
        </div>
    );
}
function AchievementCardInfo({ isOpen, onClose, achvData, children }) {
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);
    if (!isOpen || !achvData) return null;
    const borderTheme = achvData.status ? 'lockedAchvs' : achvData.difficulty;
    return (
        <div className='windowBackdrop' onClick={onClose}> 
            <div className = {`achvCardWindow ${borderTheme}`} onClick={(e) => e.stopPropagation()}>
                <button className='windowCloseBtn' onClick={onClose} title='Fechar'>✕</button>
                <div className='windowHeader'>
                    <div className='windowImgBox'>
                        {achvData.status ? (
                            <span className='lockedIcon'>🔒</span>
                        ) : (
                            <img src={achvData.img} alt={achvData.name} className='windowImg' />
                        )}
                    </div>
                    <div className='windowTitleArea'>
                        <span className='windowBadge'>{achvData.status ? 'BLOQUEADA' : 'DESBLOQUEADA'}</span>
                        <h2>{achvData.name}</h2>
                    </div>
                </div>
                <div className='windowBody'>
                    {achvData.description.map((paragrafo, index) => (<p key={index}>{paragrafo}</p>))}
                </div>
                {achvData.stats && (
                    <div className='windowStatsGrid'>
                        {achvData.stats.map((stat, index) => (
                            <div key={index} className='windowStatItem'>
                                <span className='statLabel'>{stat.label}</span>
                                <span className='statValue'>{stat.value}</span>
                            </div>
                        ))}
                    </div>
                )}
                {children && <div className='windowExtraSlot'>{children}</div>}
            </div>
        </div>
    );
}
//difficulties: gold = gold | silver = silver | bronze = bronze | black = black
function AchievementsP () {
    const [ selectedAchv, setSelectedAchv ] = useState(null)
    const achv = [
        { id: 'good-morning',
            name: 'Good Morning!',
            status: false,
            img: goodMorning,
            difficulty: 'gold',
            description: [
                'n sei',
                'algo mais'
            ],
            stats: [
                {label: 'Raridade', value: 'Raro'},
            ],
        },
        { id: 'oyasumi',
            name: 'Oyasumi',
            status: false,
            img: oyasumi,
            difficulty: 'gold',
            description: [
                'n sei',
                'algo mais'
            ],
            stats: [
                {label: 'Raridade', value: 'Raro'},
            ],
        },
        { id: 'alt-f4',
            name: 'Alt + F4',
            status: false,
            img: altF4,
            difficulty: 'silver',
            description: [
                'Derrote Janela de Download',
                'Adquirido após derrotar Janela de Download no Ferro-Velho durante o prólogo'
            ],
            stats: [
                {label: 'Raridade', value: 'Raro'},
            ],
        },
    ];
    return (
        <>
            <StandartP></StandartP>
            <main className='achievementsMain'>
                <section className='contentAchievements'>
                    <div className='gridAchievements'>
                        {achv.map((item) => (<AchievementsCard key={item.id} {...item} onClick = {() => setSelectedAchv(item)}/>))}
                    </div>
                </section>
            </main>
            <AchievementCardInfo isOpen={Boolean(selectedAchv)} onClose={() => setSelectedAchv(null)} achvData={selectedAchv} />
        </>
    )
}
export default AchievementsP;