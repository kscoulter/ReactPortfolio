import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SectionHeading from './components/SectionHeading';
import LinkButton from './components/LinkButton';
import ProjectCard from './components/ProjectCard';
import SimpleCard from './components/SimpleCard';
import MediumFeed from './components/MediumFeed';
import Footer from './components/Footer';
import concentration from './assets/images/concentration.jpg';
import manspreading from './assets/images/isitmanspreading.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="portfolio">
          <SectionHeading heading="portfolio"/>
          <ProjectCard
            name="Concentration"
            description="Test your memory with this space-themed concentration game, just beware of the aliens."
            url="https://github.com/kscoulter/kscoulter.github.io"
            image={concentration} />
          <ProjectCard
            name="Is It Manspreading?"
            description="Have you ever wondered if you're taking up too much space on public trasportation? This brainchild of Comedy Hack Day DC lets you link to an image of your spread, determines your spread degree, and lets you know if it is within acceptable range."
            url="http://isitmanspreading.com"
            image={manspreading} />
        </section>

        <section className="writing medium-posts">
          <SectionHeading heading="writing"/>
          <MediumFeed />
        </section>

        <section className="talks">
          <SectionHeading heading="talks"/>
          <div className="card-container">
            <SimpleCard
              title="Getting The Most Out Of Code Reviews"
              description='How do we judge “good code”? What does it mean for code to be maintainable? How do we create a culture of trust where feedback is not painful? Using real examples and code snippets, I discuss ways to use the code review process to improve your code base, reaffirm your team values, and promote a culture of learning.'
              background="#86BAA3"
              links={[["slides", "https://docs.google.com/presentation/d/e/2PACX-1vTRcK-aAGrIVQdmtXukz-2Y15tJtMP9LxnsUNQJLdAWJHzdy1HksQYPUYEEWwKud9toxQuESbu9evPl/pub?start=false&loop=false&delayms=3000"],["video", "https://youtu.be/8U1fdKG062k"]]} />
            <SimpleCard
              title="Build Faster Websites with Accelerated Mobile Pages (Workshop)"
              description="In the era of mobile web, speed and performance are critical. In this workshop I introduce attendees to Accelerated Mobile Pages (AMP). AMP uses multiple strategies – pre-loading, caching, async scripts, enforcement of best practices – to achieve a near-instantaneous load of content. Using starter templates, the workshop attendees will walk away with a fully functional AMP page and the knowledge needed to continue creating fast-loading pages."
              background="#AFC988"
              links={[["slides", "http//"],["github","https://github.com/kscoulter/CodeHerAMP"]]} />
            <SimpleCard
              title="Interviewing Is Exactly Like Online Dating"
              description="Through the metaphor of online dating, I coach the audience through every step of a job search from starting the search, creating a compelling online image, and resume writing, to offer acceptance and negotiation."
              background="#A39FB7"
              links={[["slides", "https://docs.google.com/presentation/d/e/2PACX-1vTRcK-aAGrIVQdmtXukz-2Y15tJtMP9LxnsUNQJLdAWJHzdy1HksQYPUYEEWwKud9toxQuESbu9evPl/pub?start=false&loop=false&delayms=3000"]]}/>
          </div>
        </section>
        <SectionHeading heading="contact me"/>
        <section className="contact">
          <div className="content">
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
