import * as React from 'react';
import './App.css';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Projects from './components/portfolio/Projects';
import Gallery from './components/gallery/Gallery';
import Timeline from './components/portfolio/Timeline';


function App() {
  return (
    <main>
      <Header />
      <div class="section-break"></div>
      <div class="section-break"></div>
      <Nav />
      <div class="section-break"></div>
      <div class="section-break"></div>
      <div class="section-title-container"><p class="section-title">ABOUT</p></div>
      <Profile />
      <div class="section-break"></div>
      <div class="section-title-container"><p class="section-title" id ="experiences">EXPERIENCES</p></div>
      <Timeline/>
      <div class="section-break"></div>
      <div class="section-break"></div>
      <div class="section-title-container"><p class="section-title" id="projects">PROJECTS</p></div>
      <Projects/>
      <div class="section-break"></div>
      <div class="section-break"></div>
      <p class="closing">thank you for visiting - sharing some of my recent art and photography favourites below </p>
      <Gallery />
      <div class="section-break"></div>
      <p class="small-text">© Vivian Guo 2022</p>
    </main>
  );
}

export default App;