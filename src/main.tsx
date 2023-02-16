import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import twitterLogo from './assets/logo-twitter.svg'
import hastagLogo from './assets/hastag.svg'
import homeLogo from './assets/home.svg'
import bellLogo from './assets/bell.svg'
import messageLogo from './assets/message.svg'
import bookmarkLogo from './assets/bookmark.svg'
import filetextLogo from './assets/file-text.svg'
import userLogo from './assets/user.svg'
import dotsthreeLogo from './assets/dotsthree.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo Twitter" />
        <nav className="main-navigation">
          <a href="#" className="active"><img src={homeLogo} alt="Home Icon" />Home</a>
          <a href="#"><img src={hastagLogo} alt="Hastag Icon" />Explore</a>
          <a href="#"><img src={bellLogo} alt="Bell Icon" />Notifications</a>
          <a href="#"><img src={messageLogo} alt="Message Icon" />Messages</a>
          <a href="#"><img src={bookmarkLogo} alt="Bookmark Icon" />Bookmarks</a>
          <a href="#"><img src={filetextLogo} alt="File Text Icon" />Lists</a>
          <a href="#"><img src={userLogo} alt="User Icon" />Profile</a>
          <a href="#"><img src={dotsthreeLogo} alt="Dotsthree Icon" />More</a>
        </nav>
        <button className="new-twitter" type="button">
          Twitter
        </button>
        <video></video>
      </aside>
      <div className="content">
        
      </div>
    </div>
  </React.StrictMode>,
)
