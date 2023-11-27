// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Profile.css';
import Header from '../../components/Header/Header';


function Profile() {
    // Sample map data
    const initialMapData = [
        { name: 'Dust2', winPercentage: 60 },
        { name: 'Mirage', winPercentage: 55 },
        { name: 'Inferno', winPercentage: 65 },
        
    ];

    // State to hold map data
    const [mapData] = useState(initialMapData);

    return (
        <main className='main'>
            <Header />
            <section className='main-section'>
                <aside className='main-profile'>
                    <h2>CS Maps and Win Percentages</h2>
                    <ul>
                        {mapData.map((map, index) => (
                            <li key={index}>
                                <span>{map.name} </span>
                                <span>{map.winPercentage}%</span>
                            </li>
                        ))}
                    </ul>
                </aside>
            </section>
        </main>
    );
}

export default Profile;
