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
      <section className="middle-text">
        <h2>Never Forget Anything</h2>
        <h3>This is a quote about memory.</h3>

        <Link to="/login"><button className="landing-button">LOG IN</button></Link>
        <p>or</p>
        <Link to="/login"><button className="landing-button green">SIGN UP FOR FREE</button></Link>
      </section>
    </section>
  </div>
);

export default LandingPage;
