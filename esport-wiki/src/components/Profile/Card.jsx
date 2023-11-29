// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Card.css';
import Profile from '../../assets/dust.jpg';

function Card() {
    return (
        <section className='card'>
            <div className='card-right'>
                <div className='profile-pic'>
                    <img className='profile-image' src={Profile} alt='Profile picture of Pontus lindstom' />
                </div>
                <h3>Team Dignitas</h3>
                <p>2019 - present</p>
            </div>
            <div className='card-left'>
                <h3>name</h3>
                <p>Pontus Lindström</p>
                <h3>Ingame-name</h3>
                <p>Muq</p>
            </div>
        </section>
    );
}

export default Card;
