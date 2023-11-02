import React from 'react'
import '../components/UserInput.css'
import ScrollBox from './ScrollBox'
const UserInput = () => {
  return (
    <div className='hero'>
        <h1>Now Playing</h1>
        <div className='scroller'>
          <ScrollBox/>
        </div>
    </div>
  )
}

export default UserInput