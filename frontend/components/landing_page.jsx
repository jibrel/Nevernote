import React from 'react';
import { Link } from 'react-router';

const LandingPage = () => (
  <div>
    <div className="landing-header">

      <h1>NEVERNOTE</h1>
      <nav className="landing-nav">
        <Link to="/login"><p>Sign In</p></Link>
        <Link to="/signup"><p>Create account</p></Link>
      </nav>
    </div>

    <section className="main-video">
      <div className="video-frame">
        <video autoPlay="autoplay" loop="loop" poster="https://cdn1.evernote.com/evernote.com/img/homepage/homepage-hero-video-desktop-still.jpg">
          <source className="webm" type="video/webm" src="https://cdn1.evernote.com/evernote.com/video/homepage/homepage-hero-video.webm" />
          <source className="mp4" type="video/mp4" src="https://cdn1.evernote.com/evernote.com/video/homepage/homepage-hero-video.mp4" />
        </video>
        <img src="https//cdn1.evernote.com/evernote.com/img/homepage/homepage-hero-video-desktop-still.jpg" className="mobile-fallback" alt />
      </div>
    </section>

    <section className="middle-text">
      <h2>Never Forget Anything</h2>
      <h3>This is a quote about memory.</h3>

      <Link to="/login"><button className="landing-button white">LOG IN</button></Link>
      <p>or</p>
      <Link to="/login"><button className="landing-button green">SIGN UP FOR FREE</button></Link>
    </section>

  </div>
);

export default LandingPage;
