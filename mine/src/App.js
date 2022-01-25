import React from 'react';

import { Footer, Blog, Posibility, Features, WhatGPT3, Header, contact } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';
import About from './containers/about/About';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <About />
    <gallery />
    <CTA />
    <contact />
    <Footer />
  </div>
);

export default App;
