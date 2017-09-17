import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SectionHeading from './components/SectionHeading';
import LinkButton from './components/LinkButton';
import ProjectCard from './components/ProjectCard';
import MediumFeed from './components/MediumFeed';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <section className="portfolio">
          <SectionHeading heading="portfolio"/>
          <ProjectCard
            name="concentration"
            description="Test your memory with this space-themed concentration game, just beware of the aliens."
            url="https://github.com/kscoulter/kscoulter.github.io"
            image="http://kseniacoulter.com/images/spacegame.jpg" />
          <ProjectCard
            name=""
            description=""
            url=""
            image="" />
        </section>

        <section className="writing">
          <SectionHeading heading="writing"/>
          <MediumFeed />
        </section>

        <section className="talks">
        <SectionHeading heading="talks"/>
        </section>
        <section class="contact">
          <div class="content">
            <h1><a id="contact">Contact Me</a></h1>
            <p>Let's start a conversation! You can email me, tweet at me, or add me on LinkedIn.</p>
            <LinkButton url="mailto:kseniacoulter@gmail.com" name="gmail"/>
            <LinkButton url="https://twitter.com/kscoult" name="twitter"/>
            <LinkButton url="https://www.linkedin.com/in/kseniacoulter" name="linkedin"/>
            <LinkButton url="https://github.com/kscoulter" name="github"/>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
