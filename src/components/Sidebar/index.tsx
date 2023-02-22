import "./index.css"

import twitterLogo from '../../assets/logo-twitter.svg'
import hastagLogo from '../../assets/hastag.svg'
import homeLogo from '../../assets/home.svg'
import bellLogo from '../../assets/bell.svg'
import messageLogo from '../../assets/message.svg'
import bookmarkLogo from '../../assets/bookmark.svg'
import filetextLogo from '../../assets/file-text.svg'
import userLogo from '../../assets/user.svg'
import dotsthreeLogo from '../../assets/dotsthree.svg'

import { NavLink } from 'react-router-dom'
import { Pencil } from "phosphor-react"

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo Twitter" />
      <nav className="main-navigation">
        <NavLink to="/">
          <img src={homeLogo} alt="Home Icon" />
          <span>Home</span>
        </NavLink>
        <a href="#explore">
          <img src={hastagLogo} alt="Hastag Icon" />
          <span>Explore</span>
        </a>
        <a href="#notifications">
          <img src={bellLogo} alt="Bell Icon" />
          <span>Notifications</span>
        </a>
        <a href="#messages">
          <img src={messageLogo} alt="Message Icon" />
          <span>Messages</span>
        </a>
        <a href="#bookmarks">
          <img src={bookmarkLogo} alt="Bookmark Icon" />
          <span>Bookmarks</span>
        </a>
        <a href="#lists">
          <img src={filetextLogo} alt="File Text Icon" />
          <span>Lists</span>
        </a>
        <a href="#profile">
          <img src={userLogo} alt="User Icon" />
          <span>Profile</span>
        </a>
        <a href="#more">
          <img src={dotsthreeLogo} alt="Dotsthree Icon" />
          <span>More</span>
        </a>
      </nav>
      <button className="new-twitter" type="button">
        <Pencil />
        <span>Twitter</span>
      </button>
    </aside>
  );
}