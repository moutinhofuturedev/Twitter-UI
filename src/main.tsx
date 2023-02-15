import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'

import twitterLogo from './assets/logo-twitter.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo Twitter" />
        <nav className="main-navigation">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Notifications</a>
          <a href="#">Messages</a>
          <a href="#">Booksmarks</a>
          <a href="#">Lists</a>
          <a href="#">Profile</a>
          <a href="#">More</a>
        </nav>
        <button className="new-twitter" type="button">
          Twitter
        </button>
      </aside>
      <div className="content">
        content
      </div>
    </div>
  </React.StrictMode>,
)
