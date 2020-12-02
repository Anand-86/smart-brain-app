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
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('Click')
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <Rank />
        {/* <FaceRecognition /> */}
      </div>
    )
  }
}

export default App
