import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './HomePage.css'


export default function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
        <nav className='navigation'>
        <a href="/" className='title-link' >
          WorldNews
        </a>
        <button className='hamburger' onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }} >
          <MenuIcon />
        </button>
        <div className='nav-menu'  className={
          isNavExpanded ? 'nav-menu expanded': 'nav-menu'
        }>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">Coronavirus</a>
            </li>
            <li>
              <a href="">Politics</a>
            </li>
            <li>
              <a href="">World</a>
            </li>
            <li>
              <a href="">UK</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
