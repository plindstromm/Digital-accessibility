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
          <div className='about-lower'>
            <div className='about-lower-left'>
              <h4>E-Mail</h4> <p>pontus.lindstrom@coin360.com</p>
              <h4>Follow me on Faceit: <a href="https://www.faceit.com/en" target="_blank" rel="noreferrer">Click here</a></h4>
            </div>
            <div className='about-lower-right'>
              <h4>Phone number:</h4> <p>0735-298598</p>
              <h4>Follow me on Twitter: <a href="https://twitter.com/Real_HeatoN" target="_blank" rel="noreferrer">Click here</a></h4>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default About;

