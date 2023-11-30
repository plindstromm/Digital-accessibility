// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Profile.css';
import Header from '../../components/Header/Header';
import Highlights from '../../assets/Highlights.mp4';

function Profile() {
    const initialMapData = [
        { name: 'Dust2', winPercentage: 60 },
        { name: 'Mirage', winPercentage: 55 },
        { name: 'Inferno', winPercentage: 65 },
    ];

    const initialMapData2 = [
        { name: 'AK47', HSPercentage: 74 },
        { name: 'M4A1S', HSPercentage: 61 },
        { name: 'Galil', HSPercentage: 55 },
    ];

    const initialMapData3 = [
        { name: '2023', Rank: 0.4 },
        { name: '2022', Rank: 9.4 },
        { name: '2021', Rank: 15 },
    ];

    const [mapData] = useState(initialMapData);
    const [mapData2] = useState(initialMapData2);
    const [mapData3] = useState(initialMapData3);

    const [activeProfile, setActiveProfile] = useState(null);

    const toggleProfile = (profile) => {
        setActiveProfile(activeProfile === profile ? null : profile);
    };

    return (
        <main className='main'>
            <Header />
            <div className='button-bar'>
                <button onClick={() => toggleProfile(1)}>Show win percentage</button>
                <button onClick={() => toggleProfile(2)}>Show world ranking</button>
                <button onClick={() => toggleProfile(3)}>Show HS percentage</button>
            </div>
            <section className='main-section'>
                {activeProfile === 1 && (
                    <aside className='main-profile'>
                        <h3>Maps and Win Percentage</h3>
                        <ul>
                            {mapData.map((map, index) => (
                                <li key={index}>
                                    <span>{map.name} </span>
                                    <span>{map.winPercentage}%</span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}

                {activeProfile === 2 && (
                    <aside className='main-profile'>
                        <h3>World rank</h3>
                        <ul>
                            {mapData3.map((map, index) => (
                                <li key={index}>
                                    <span>{map.name} </span>
                                    <span> Top {map.Rank} %</span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}

                {activeProfile === 3 && (
                    <aside className='main-profile'>
                        <h3>HS Percentage</h3>
                        <ul>
                            {mapData2.map((map, index) => (
                                <li key={index}>
                                    <span>{map.name} </span>
                                    <span>{map.HSPercentage}%</span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}
                <h3>Highlight of the day</h3>
                <div className='video-section'>
                    {/* Use the video element to display the imported video */}
                    <video controls width="100%">
                        <source src={Highlights} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </main>
    );
}

export default Profile;




