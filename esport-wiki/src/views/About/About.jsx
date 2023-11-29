// eslint-disable-next-line no-unused-vars
import React from 'react';
import './About.css';
import Header from '../../components/Header/Header';

function About() {
  return (
    <div>
      <Header />
      <main>
        <div className='about-container'>
          <div className='about-upper'>
            <h3>Lorem Ipsum Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, felis eget suscipit sagittis, justo sem facilisis
              metus, id tristique justo ex a justo. Nullam rhoncus pharetra
              nulla, vel ultricies purus ullamcorper non.
            </p>
            <h3>Lorem Ipsum Another Title</h3>
            <p>
              Proin lacinia interdum felis, eu sagittis est ultricies vel.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Fusce eget interdum elit, vel egestas
              lacus.
            </p>
            <hr /> 
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;

