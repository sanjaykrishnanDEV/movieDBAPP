import React from 'react'
import '../components/Header.css';
const Header = () => {
  return (
    <div className='header'>
        <span>FlixNet</span>
        <ul>
          <li><p>Movies</p></li>
          <li><p>Tv Shows</p></li>
        </ul>
    </div>
  )
}

export default Header