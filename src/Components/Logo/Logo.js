import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className="ma4 mt0">
<<<<<<< HEAD
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img style={{ paddingTop: '35px' }} alt="logo" src={brain} width='50%'/>
        </div>
      </Tilt>
=======
      <div className="ma4 mt0">
        <Tilt
          className="Tilt br2 shadow-2"
          options={{ max: 55 }}
          style={{ height: 150, width: 150 }}
        >
          <div className="Tilt-inner pa3">
            <img style={{ paddingTop: '5px' }} alt="logo" src={brain} />
          </div>
        </Tilt>
      </div>
>>>>>>> d11d317a0b5357729a94422d360f8a08e629c259
    </div>
  )
}

<<<<<<< HEAD
export default Logo
=======
export default Logo
>>>>>>> d11d317a0b5357729a94422d360f8a08e629c259
