import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes, Link } from "react-router";

import Storefront from "./assets/Storefront.svg"
import User from "./assets/User.svg"
import Discord from "./assets/DiscordLogo.svg"
import YouTube from "./assets/Youtubelogo.svg"
import Instagram from "./assets/Instagram.svg"
import Twitter from "./assets/Twitter.svg"
import './App.css'
import Marketplace from './components/Marketplace';
import Rankings from './components/Runkings';
import Connect from './components/Connect';
import Sign from './components/Sign';

function App() {

  return (
    <Router>
      <div className='navigation-wrap'>
          <header>
              <div className="logo">
                <img src={Storefront} />
                <h1>NFT Marketplace</h1>
              </div>
              <nav>
                <Link to="/Marketplace">Marketplace</Link>
                <Link to="/Rankings">Rankings</Link>
                <Link to="/Connect">Connect</Link>
                <Link to="/Sign" className='btn-sign'><img src={User}/>Sign</Link>
              </nav>
          </header>
      </div>
        <Routes>
              <Route path='/marketplace' element={<Marketplace/>}></Route>
              <Route path='/Rankings' element={<Rankings/>}></Route>
              <Route path='/Connect' element={<Connect/>}></Route>
              <Route path='/Sign' element={<Sign/>}></Route>
        </Routes>
        <footer>
          <div>
            <div className='footer-logo'>
              <img src={Storefront} />
              <h1>NFT Marketplace</h1>
            </div>
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join our community</p>
            <div className='social'>
              <img src={Discord} />
              <img src={YouTube} />
              <img src={Twitter} />
              <img src={Instagram} />
            </div>
          </div>
          <div>
            <h1>Explore</h1>
            <p>Marketplace</p>
            <p>Rankings</p>
            <p>Connect a wallet</p>
          </div>
          <div>
            <h1>Join our weekly digest</h1>
            <p>Get exclusive promotions & updates </p>
            <p>straight to your inbox.</p>
            <div className="subscribe-wrapper">
              <input type="email" placeholder="Enter your email here" />
              <button>Subscribe</button>
            </div>
          </div>
          

        </footer>
    </Router>
  )
}

export default App
