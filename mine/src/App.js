import React from 'react'

import { Footer, Blog, Posibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Brand, Navbar} from './components';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Posibility />
        <CTA />
        <Blog />
    </div>
  )
}

export default App
