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

export function Sidebar() {
    return (
        <aside className="sidebar">
            <img className="logo" src={twitterLogo} alt="Logo Twitter" />
            <nav className="main-navigation">
                <NavLink to="/"><img src={homeLogo} alt="Home Icon" />Home</NavLink>
                <a href="#explore"><img src={hastagLogo} alt="Hastag Icon" />Explore</a>
                <a href="#notifications"><img src={bellLogo} alt="Bell Icon" />Notifications</a>
                <a href="#messages"><img src={messageLogo} alt="Message Icon" />Messages</a>
                <a href="#bookmarks"><img src={bookmarkLogo} alt="Bookmark Icon" />Bookmarks</a>
                <a href="#lists"><img src={filetextLogo} alt="File Text Icon" />Lists</a>
                <a href="#profile"><img src={userLogo} alt="User Icon" />Profile</a>
                <a href="#more"><img src={dotsthreeLogo} alt="Dotsthree Icon" />More</a>
            </nav>
            <button className="new-twitter" type="button">
                Twitter
            </button>
        </aside>
    )
}