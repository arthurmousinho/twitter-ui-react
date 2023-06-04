import './style.css'
import twitterLogo from '../../assets/logo-twitter.svg';

import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Pencil } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";



export function Sidebar() {
    return (
        <aside className='sidebar'>

        <img src={twitterLogo} alt="logo" className='logo'/>

        <nav className='main-navegation'>
            <NavLink to="/" className='nav-link'>
              <House weight='fill'/>
              <span>Home</span>
            </NavLink>

            <Link to="" className='nav-link'>
              <Hash/>
              <span>Explore</span>
            </Link>

            <Link to="" className='nav-link'>
              <Bell/>
              <span>Notifications</span>
            </Link>

            <Link to="" className='nav-link'>
              <Envelope/>
              <span>Messages</span>
            </Link>

            <Link to="" className='nav-link'>
              <BookmarkSimple/>
              <span>Bookmarks</span>
            </Link>

            <Link to="" className='nav-link'>
              <FileText/>
              <span>List</span>
            </Link>

            <Link to="" className='nav-link'>
              <User/>
              <span>Profile</span>
            </Link>

            <Link to="" className='nav-link'>
              <DotsThreeCircle  />
              <span>More</span>
            </Link>
        </nav>

        <button className='new-tweet' type='button'>
          <Pencil/>
          <span>Tweet</span>
        </button>

      </aside>
    )
}