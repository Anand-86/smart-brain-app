import React, { Component } from 'react'
import Particles from 'react-particles-js'
import './App.css'

// Components

import Navigation from './Components/Navigation/Navigation'
import Navigation from './Components/Logo/Logo'
import Navigation from './Components/ImageLinkForm/ImageLinkForm'
import Navigation from './Components/Rank/Rank'

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <ImageLinkForm />
        <Rank />
        {/* <FaceRecognition /> */}
      </div>
    )
  }
}

export default App
