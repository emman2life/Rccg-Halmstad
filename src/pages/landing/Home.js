import React from 'react';
import './Landing.css'

const Home =()=>{
    return(
        <div>
        <section className="landing">
            <div className="overlay">
                <h1 className="landing-title">Welcome to Redeem christian church of God Halmstad</h1>
                <a className="visit-button">Visit Us</a>
                
            </div>
        </section>
        <section id="about-us" className="mission">
            <div className="container mission-grid">
            <div className="mission-card left-card">
                <div className="mission-container">
                <h2>Mission</h2>
                <p>Our mission is to make heaven and take  many with us</p>
                </div>
            </div>
            <img className="right-pic" src={require('../../images/Evengalism.jpg')}/>
            </div>
            
        </section>
        <section className="">
            <div className="container kids-flex">
            <div className="block-img">
            <img className="" src={require('../../images/kids-rccg.jpg')}/>
            </div>
            <div className="block-content">
                
                <h2>Our kids</h2>
                <p>Children are a gift from the Lord;
they are a reward from him. 127:3. We provide quality Children’s programming during our Sunday services</p>
               
            </div>
           
            </div>
            <div className="service">
                   <h2>Sunday service</h2>
                   <p> 11:00am - 01:00pm</p>
                </div>
        </section>
        </div>
    );
}
export default Home; 